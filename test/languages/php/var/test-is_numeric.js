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
var is_numeric = require('/Users/kvz/code/phpjs/src/php/var/is_numeric.js')

describe('src/php/var/is_numeric.js', function () {
  it('should pass example 1', function (done) {
    is_numeric(186.31)
    var expected = true
    var result = is_numeric(186.31)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    is_numeric('Kevin van Zonneveld')
    var expected = false
    var result = is_numeric('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    is_numeric(' +186.31e2')
    var expected = true
    var result = is_numeric(' +186.31e2')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    is_numeric('')
    var expected = false
    var result = is_numeric('')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    is_numeric([])
    var expected = false
    var result = is_numeric([])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    is_numeric('1 ')
    var expected = false
    var result = is_numeric('1 ')
    expect(result).to.deep.equal(expected)
    done()
  })
})