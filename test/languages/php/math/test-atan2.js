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
var atan2 = require('/Users/kvz/code/phpjs/src/php/math/atan2.js')

describe('src/php/math/atan2.js', function () {
  it('should pass example 1', function (done) {
    atan2(1, 1)
    var expected = 0.7853981633974483
    var result = atan2(1, 1)
    expect(result).to.deep.equal(expected)
    done()
  })
})