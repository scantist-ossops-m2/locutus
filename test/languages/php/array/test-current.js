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
var current = require('/Users/kvz/code/phpjs/src/php/array/current.js')

describe('src/php/array/current.js', function () {
  it('should pass example 1', function (done) {
    transport = ['foot', 'bike', 'car', 'plane']
    current(transport)
    var expected = 'foot'
transport = ['foot', 'bike', 'car', 'plane']
    var result = current(transport)
    expect(result).to.deep.equal(expected)
    done()
  })
})