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
var _locutus_shared_bc = require('/Users/kvz/code/phpjs/src/php/_locutus_shared/_locutus_shared_bc.js')

describe.skip('src/php/_locutus_shared/_locutus_shared_bc.js', function () {
  it('should pass example 1', function (done) {
    _locutus_shared_bc()
    var expected = {}
    var result = _locutus_shared_bc()
    expect(result).to.deep.equal(expected)
    done()
  })
})