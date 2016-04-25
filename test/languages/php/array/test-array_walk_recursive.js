// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
var XMLHttpRequest = {} // eslint-disable-line no-native-reassign
var window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_walk_recursive = require('/Users/kvz/code/phpjs/src/php/array/array_walk_recursive.js')

describe('src/php/array/array_walk_recursive.js', function () {
  it('should pass example 1', function (done) {
    array_walk_recursive ({'a': 'b', 'c': {'d': 'e'}}, 'void', 'userdata')
    var expected = true
    var result = array_walk_recursive ({'a': 'b', 'c': {'d': 'e'}}, 'void', 'userdata')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_walk_recursive ('a', 'void', 'userdata')
    var expected = false
    var result = array_walk_recursive ('a', 'void', 'userdata')
    expect(result).to.deep.equal(expected)
    done()
  })
})