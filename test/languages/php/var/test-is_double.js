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
var is_double = require('/Users/kvz/code/phpjs/src/php/var/is_double.js')

describe('src/php/var/is_double.js', function () {
  it('should pass example 1', function (done) {
    is_double(186.31)
    var expected = true
    var result = is_double(186.31)
    expect(result).to.deep.equal(expected)
    done()
  })
})