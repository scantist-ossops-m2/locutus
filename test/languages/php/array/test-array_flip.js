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
var array_flip = require('/Users/kvz/code/phpjs/src/php/array/array_flip.js')

describe.skip('src/php/array/array_flip.js', function () {
  it('should pass example 1', function (done) {
    array_flip( {a: 1, b: 1, c: 2} )
    var expected = {1: 'b', 2: 'c'}
    var result = array_flip( {a: 1, b: 1, c: 2} )
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.return_locutus_arrays', 'on')
    array_flip(array({a: 0}, {b: 1}, {c: 2}))[1]
    var expected = 'b'
ini_set('locutus.return_locutus_arrays', 'on')
    var result = array_flip(array({a: 0}, {b: 1}, {c: 2}))[1]
    expect(result).to.deep.equal(expected)
    done()
  })
})