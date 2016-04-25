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
var xdiff_string_patch = require('/Users/kvz/code/phpjs/src/php/xdiff/xdiff_string_patch.js')

describe('src/php/xdiff/xdiff_string_patch.js', function () {
  it('should pass example 1', function (done) {
    xdiff_string_patch('', '@@ -0,0 +1,1 @@\n+Hello world!')
    var expected = 'Hello world!'
    var result = xdiff_string_patch('', '@@ -0,0 +1,1 @@\n+Hello world!')
    expect(result).to.deep.equal(expected)
    done()
  })
})