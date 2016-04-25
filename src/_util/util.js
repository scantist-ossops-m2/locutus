var globby = require('globby')
var path = require('path')
var fs = require('fs')
var async = require('async')
var YAML = require('js-yaml')
var mkdirp = require('mkdirp')
var debug = require('depurar')('locutus')
var _ = require('lodash')

function Util (config) {
  this.__src = path.dirname(__dirname)
  this.__root = path.dirname(path.dirname(__dirname))
  this.__test = path.dirname(path.dirname(__dirname)) + '/test'

  this.globals = {
    'XMLHttpRequest': '{} // eslint-disable-line no-native-reassign',
    'window': '{ // eslint-disable-line no-native-reassign\n' +
    '  window: {},\n' +
    '  document: {\n' +
    '    lastModified: 1388954399,\n' +
    '    getElementsByTagName: function () { return [] }\n' +
    '  },\n' +
    '  location: {\n' +
    '    href: ""\n' +
    '  }\n' +
    '}'
  }
  this.pattern = [this.__src + '/**/**/*.js', '!**/index.js', '!**/_util/**']
  this.concurrency = 8

  // Overwrite properties with config
  for (var k in config) {
    this[k] = config[k]
  }

  this._reindexBuffer = {}
}

Util.prototype.injectweb = function (args, cb) {
  this._runFunctionOnAll(this._injectwebOne, cb)
}

Util.prototype.reindex = function (args, cb) {
  var self = this
  self._reindexBuffer = {}
  self._runFunctionOnAll(self._reindexOne, function (err) {
    if (err) {
      return cb(err)
    }
    for (var indexJs in self._reindexBuffer) {
      var requires = self._reindexBuffer[indexJs]
      requires.sort()
      debug('writing: ' + indexJs)
      fs.writeFileSync(indexJs, requires.join('\n') + '\n', 'utf-8')
    }
  })
}

Util.prototype.writetests = function (args, cb) {
  this._runFunctionOnAll(this._writetestOne, cb)
}

Util.prototype._runFunctionOnAll = function (runFunc, cb) {
  var self = this

  var q = async.queue(function (fullpath, callback) {
    self._load.bind(self, fullpath, {}, function (err, params) {
      if (err) {
        return callback(err)
      }

      runFunc.bind(self, params, callback)()
    })()
  }, self.concurrency)

  debug({
    pattern: self.pattern
  })
  var files = globby.sync(self.pattern)

  q.push(files)

  q.drain = cb
}

Util.prototype._reindexOne = function (params, cb) {
  var fullpath = this.__src + '/' + params.filepath
  var dir = path.dirname(fullpath)
  var basefile = path.basename(fullpath, '.js')
  var indexJs = dir + '/index.js'

  var module = basefile
  if (basefile === 'Index2') {
    module = 'Index'
  }

  if (!this._reindexBuffer[indexJs]) {
    this._reindexBuffer[indexJs] = []
  }

  this._reindexBuffer[indexJs].push('module.exports[\'' + module + '\'] = require(\'./' + basefile + '\')')
  return cb(null)
}

Util.prototype._injectwebOne = function (params, cb) {
  var authors = {}
  var keys = ['original by', 'improved by', 'bugfixed by', 'revised by', 'input by']
  keys.forEach(function (key) {
    if (params.headKeys[key]) {
      authors[key] = _.flattenDeep(params.headKeys[key])
    }
  })

  var webfuncPath = this.__root + '/website/_functions/' + params.language + '/' + params.category + '/' + params.func_name + '.html'
  var data = {
    warning: 'This file is auto generated by `npm run web:inject`, do not edit by hand',
    examples: (params.headKeys.example || []).map(function (lines, i) {
      return lines.join('\n')
    }),
    returns: (params.headKeys.returns || []).map(function (lines, i) {
      return lines.join('\n')
    }),
    dependencies: [],
    authors: authors || {},
    notes: (params.headKeys.note || []).map(function (lines, i) {
      return lines.join('\n')
    }),
    layout: 'function',
    function: params.func_name,
    category: params.category,
    language: params.language,
    permalink: params.language + '/' + params.category + '/' + params.func_name + '/',
    redirect_from: [
      '/functions/' + params.language + '/' + params.func_name + '/',
      '/functions/' + params.category + '/' + params.func_name + '/',
      '/' + params.language + '/' + params.func_name + '/'
    ]
  }

  if (params.language === 'php') {
    data.redirect_from.push('/functions/' + params.func_name + '/')
  }

  try {
    var yml = YAML.safeDump(data).trim()
  } catch (e) {
    console.log(data)
    throw new Error('Unable to form valid YAML of above data. ' + e)
  }
  var buf = '---' + '\n' + yml + '\n' + '---' + '\n'

  buf += params.code

  mkdirp(path.dirname(webfuncPath), function (err) {
    if (err) {
      throw new Error('Could not mkdir  for ' + webfuncPath + '. ' + err)
    }
    fs.writeFile(webfuncPath, buf, 'utf-8', cb)
  })
}

Util.prototype._writetestOne = function (params, cb) {
  var self = this

  if (!params.func_name) {
    throw new Error('No func_name in ' + JSON.stringify(params))
  }
  if (!params.headKeys) {
    throw new Error('No headKeys in ' + params.func_name)
  }
  if (!params.headKeys.example) {
    throw new Error('No example in ' + params.func_name)
  }

  var testProps = ''
  if (params.headKeys.test) {
    testProps = params.headKeys.test[0][0]
  }

  var describeSkip = ''
  if (testProps.indexOf('skip-all') !== -1) {
    describeSkip = '.skip'
  }

  var codez = []

  codez.push('// warning: This file is auto generated by `npm run build:tests`, do not edit by hand')

  // Add globals
  for (var global in self.globals) {
    codez.push('var ' + global + ' = ' + self.globals[global])
  }

  // Set timezone for testing dates
  // Not ideal: http://stackoverflow.com/questions/8083410/how-to-set-default-timezone-in-node-js
  codez.push('process.env.TZ = \'UTC\'')

  codez.push('var ' + 'expect' + ' = require(\'chai\').expect')

  // Add language-wide dependencies
  // @todo: It would be great if we could remove this
  if (params.language === 'php') {
    codez.push('var ' + 'ini_set' + ' = require(\'' + self.__src + '/' + 'php/info/ini_set' + '\') // eslint-disable-line no-unused-vars')
    codez.push('var ' + 'ini_get' + ' = require(\'' + self.__src + '/' + 'php/info/ini_get' + '\') // eslint-disable-line no-unused-vars')
    if ([ 'array_search' ].indexOf(params.func_name) !== -1) {
      codez.push('var ' + 'array' + ' = require(\'' + self.__src + '/' + 'php/array/array' + '\') // eslint-disable-line no-unused-vars')
    }
  }

  // Add the main function to test
  codez.push('var ' + params.func_name + ' = require(\'' + self.__src + '/' + params.filepath + '\')')

  codez.push('')

  codez.push('describe' + describeSkip + '(\'src/' + params.filepath + '\', function () {')

  // Run each example
  for (var i in params.headKeys.example) {
    if (!params.headKeys.returns[i] || !params.headKeys.returns[i].length) {
      throw new Error('There is no return for example ' + i, test, params)
    }

    var humanIndex = parseInt(i, 10) + 1
    var itSkip = ''
    if (testProps.indexOf('skip-' + humanIndex) !== -1) {
      itSkip = '.skip'
    }

    codez.push('  it' + itSkip + '(\'should pass example ' + (humanIndex) + '\', function (done) {')

    codez.push('    ' + params.headKeys.example[i].join('\n' + '    '))

    var testExpected = params.headKeys.returns[i].join('\n')

    codez.push('    var expected = ' + testExpected + '')

    // Execute line by line (see date.js why)
    // We need result be the last result of the example code
    for (var j in params.headKeys.example[i]) {
      var testRun = params.headKeys.example[i][j]

      if (+j === params.headKeys.example[i].length - 1) {
        // last action gets saved
        codez.push('    var result = ' + testRun + '')
      } else {
        codez.push(testRun + '')
      }
    }

    codez.push('    expect(result).to.deep.equal(expected)')
    codez.push('    done()')
    codez.push('  })')
  }

  codez.push('})')

  // Legacy browser-> Node replacements
  var code = codez.join('\n')
    .replace(/window\.setTimeout/g, 'setTimeout')

  // Write to disk
  var basename = path.basename(params.filepath)
  var subdir = path.dirname(params.filepath)
  var testpath = this.__test + '/languages/' + subdir + '/test-' + basename
  var testdir = path.dirname(testpath)
  mkdirp(testdir, function (err) {
    if (err) {
      throw new Error(err)
    }
    debug('writing: ' + testpath)
    fs.writeFile(testpath, code, 'utf-8', cb)
  })
}

// Environment-specific file opener. function name needs to
// be translated to code. The difficulty is in finding the
// category.
Util.prototype._opener = function (fileOrName, requesterParams, cb) {
  var self = this
  var pattern

  var language = requesterParams.language || '*'

  if (path.basename(fileOrName, '.js').indexOf('.') !== -1) {
    // periods in the basename, like: unicode.utf8.RuneCountInString or strings.sprintf
    pattern = self.__src + '/' + language + '/' + fileOrName.replace(/\./g, '/') + '.js'
  } else if (fileOrName.indexOf('/') === -1) {
    // no slashes, like: sprintf
    pattern = self.__src + '/' + language + '/*/' + fileOrName + '.js'
  } else if (fileOrName.substr(0, 1) === '/') {
    // absolute path, like: /Users/john/code/locutus/php/strings/sprintf.js
    pattern = fileOrName
  } else {
    // relative path, like: php/strings/sprintf.js
    pattern = self.__src + '/' + fileOrName
  }

  pattern = pattern.replace('golang/strings/Index.js', 'golang/strings/Index2.js')
  debug('loading: ' + pattern)
  var files = globby.sync(pattern, {})

  if (files.length !== 1) {
    return cb(new Error('Found ' + files.length + ' occurances of ' + fileOrName + ' via pattern: ' + pattern))
  }

  var filepath = files[0]

  if (path.basename(filepath) === 'index.js') {
    return cb(null)
  }

  if (!filepath) {
    return cb(new Error('Could not find ' + pattern))
  }

  fs.readFile(filepath, 'utf-8', function (err, code) {
    if (err) {
      return cb(new Error('Error while opening ' + filepath + '. ' + err))
    }
    return cb(null, filepath, code)
  })
}

Util.prototype._load = function (fileOrName, requesterParams, cb) {
  var self = this
  self._opener(fileOrName, requesterParams, function (err, fullpath, code) {
    if (err) {
      return cb(err)
    }

    var filepath = path.relative(self.__src, fullpath)
    self._parse(filepath, code, cb)
  })
}

Util.prototype._findDependencies = function (fileOrName, requesterParams, dependencies, cb) {
  var self = this

  if (!requesterParams.headKeys['depends on'] || !requesterParams.headKeys['depends on'].length) {
    if (cb) {
      cb(null, {})
    }
    return
  }

  var i
  var depCodePath
  var loaded = 0
  for (i in requesterParams.headKeys['depends on']) {
    depCodePath = requesterParams.headKeys['depends on'][i][0]

    self._load(depCodePath, requesterParams, function (err, params) {
      if (err) {
        return cb(err)
      }

      dependencies[depCodePath] = params
      self._findDependencies(depCodePath, params, dependencies)

      if (cb && ++loaded === requesterParams.headKeys['depends on'].length) {
        cb(null, dependencies)
      }
    })
  }
}

Util.prototype._parse = function (filepath, code, cb) {
  if (!code) {
    return cb(new Error('Unable to parse ' + filepath + '. Received no code'))
  }

  if (filepath.indexOf('/') === -1) {
    return cb(new Error('Parse only accepts relative filepaths. Received: \'' + filepath + '\''))
  }

  var parts = filepath.split('/')
  var language = parts.shift()
  var codepath = parts.join('.')
  var name = parts.pop()
  var category = parts.join('.')

  var patFuncStart = /^\s*module\.exports = function\s*([^\s)]+)\s*\(([^\)]*)\)\s*\{\s*/i
  var patFuncEnd = /\s*}\s*$/
  var commentBlocks = this._commentBlocks(code)

  if (!commentBlocks[0]) {
    return cb(new Error('Unable to parse ' + filepath + '. Did not find any comment blocks in: ' + code))
  }

  var head = commentBlocks[0].raw.join('\n')
  var body = code.replace(head, '')
  body = body.replace(patFuncStart, '')
  body = body.replace(patFuncEnd, '')
  var headKeys = this._headKeys(commentBlocks[0].clean)

  // Parse fucntion signature
  var funcSigMatch = code.match(patFuncStart)
  if (!funcSigMatch) {
    return cb(new Error('Unable to parse ' + name))
  }

  var params = {
    headKeys: headKeys,
    body: body,
    head: head,
    name: name,
    filepath: filepath,
    codepath: codepath,
    code: code,
    language: language,
    category: category,
    func_signature: funcSigMatch[0],
    func_name: funcSigMatch[1],
    func_arguments: funcSigMatch[2].split(/,\s*/),
    commentBlocks: commentBlocks
  }

  this._findDependencies(filepath, params, {}, function (err, dependencies) {
    if (err) {
      return cb(err)
    }

    params.dependencies = dependencies
    return cb(null, params)
  })
}

Util.prototype._commentBlocks = function (code) {
  var cnt = 0
  var comment = []
  var commentBlocks = []
  var i = 0
  var lines = []
  var raise = false
  for (i in (lines = code.replace('\r', '').split('\n'))) {
    // Detect if line is a comment, and return the actual comment
    if ((comment = lines[i].match(/^\s*(\/\/|\/\*|\*)\s*(.*)$/))) {
      if (raise === true) {
        cnt = commentBlocks.length
        raise = false
      }
      if (!commentBlocks[cnt]) {
        commentBlocks[cnt] = {
          clean: [],
          raw: []
        }
      }

      commentBlocks[cnt].clean.push(comment[2].trim())
      commentBlocks[cnt].raw.push(lines[i])
    } else {
      raise = true
    }
  }

  return commentBlocks
}

Util.prototype._headKeys = function (headLines) {
  var i
  var keys = {}
  var match = []
  var dmatch = []
  var key = ''
  var val = ''
  var num = 0

  for (i in headLines) {
    if (!(match = headLines[i].match(/^\s*\W?\s*([a-z\ 0-9]+)\s*:\s*(.*)\s*$/))) {
      continue
    }
    key = match[1]
    val = match[2]

    if ((dmatch = key.match(/^(\w+)\s+(\d+)$/))) {
      // Things like examples and notes can be grouped
      key = dmatch[1]
      num = dmatch[2] - 1
    } else {
      num = 0
    }

    if (!keys[key]) {
      keys[key] = []
    }
    if (!keys[key][num]) {
      keys[key][num] = []
    }
    keys[key][num].push(val)
  }

  return keys
}

module.exports = Util
