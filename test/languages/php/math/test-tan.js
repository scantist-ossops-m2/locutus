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
var tan = require('/Users/kvz/code/phpjs/src/php/math/tan.js')

describe('src/php/math/tan.js', function () {
  it('should pass example 1', function (done) {
    Math.ceil(tan(8723321.4) * 10000000)
    var expected = 54251849
    var result = Math.ceil(tan(8723321.4) * 10000000)
    expect(result).to.deep.equal(expected)
    done()
  })
})