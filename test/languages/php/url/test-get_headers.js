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
var get_headers = require('/Users/kvz/code/phpjs/src/php/url/get_headers.js')

describe.skip('src/php/url/get_headers.js', function () {
  it('should pass example 1', function (done) {
    get_headers('http://kvz.io/pj_test_supportfile_1.htm')[0]
    var expected = 'Date: Wed, 13 May 2009 23:53:11 GMT'
    var result = get_headers('http://kvz.io/pj_test_supportfile_1.htm')[0]
    expect(result).to.deep.equal(expected)
    done()
  })
})