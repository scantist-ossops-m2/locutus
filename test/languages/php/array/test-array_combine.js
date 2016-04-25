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
var array_combine = require('/Users/kvz/code/phpjs/src/php/array/array_combine.js')

describe('src/php/array/array_combine.js', function () {
  it('should pass example 1', function (done) {
    array_combine([0,1,2], ['kevin','van','zonneveld'])
    var expected = {0: 'kevin', 1: 'van', 2: 'zonneveld'}
    var result = array_combine([0,1,2], ['kevin','van','zonneveld'])
    expect(result).to.deep.equal(expected)
    done()
  })
})