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
var array_sum = require('/Users/kvz/code/phpjs/src/php/array/array_sum.js')

describe('src/php/array/array_sum.js', function () {
  it('should pass example 1', function (done) {
    array_sum([4, 9, 182.6])
    var expected = 195.6
    var result = array_sum([4, 9, 182.6])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    total = []; index = 0.1; for (y=0; y < 12; y++){total[y] = y + index;}
    array_sum(total)
    var expected = 67.2
total = []; index = 0.1; for (y=0; y < 12; y++){total[y] = y + index;}
    var result = array_sum(total)
    expect(result).to.deep.equal(expected)
    done()
  })
})