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
var is_object = require('/Users/kvz/code/phpjs/src/php/var/is_object.js')

describe('src/php/var/is_object.js', function () {
  it('should pass example 1', function (done) {
    is_object('23')
    var expected = false
    var result = is_object('23')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    is_object({foo: 'bar'})
    var expected = true
    var result = is_object({foo: 'bar'})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    is_object(null)
    var expected = false
    var result = is_object(null)
    expect(result).to.deep.equal(expected)
    done()
  })
})