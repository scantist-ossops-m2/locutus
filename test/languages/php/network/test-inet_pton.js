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
var inet_pton = require('/Users/kvz/code/phpjs/src/php/network/inet_pton.js')

describe('src/php/network/inet_pton.js', function () {
  it('should pass example 1', function (done) {
    inet_pton('::')
    var expected = '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'
    var result = inet_pton('::')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    inet_pton('127.0.0.1')
    var expected = '\x7F\x00\x00\x01'
    var result = inet_pton('127.0.0.1')
    expect(result).to.deep.equal(expected)
    done()
  })
})