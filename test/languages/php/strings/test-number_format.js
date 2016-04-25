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
var number_format = require('/Users/kvz/code/phpjs/src/php/strings/number_format.js')

describe('src/php/strings/number_format.js', function () {
  it('should pass example 1', function (done) {
    number_format(1234.56)
    var expected = '1,235'
    var result = number_format(1234.56)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    number_format(1234.56, 2, ',', ' ')
    var expected = '1 234,56'
    var result = number_format(1234.56, 2, ',', ' ')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    number_format(1234.5678, 2, '.', '')
    var expected = '1234.57'
    var result = number_format(1234.5678, 2, '.', '')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    number_format(67, 2, ',', '.')
    var expected = '67,00'
    var result = number_format(67, 2, ',', '.')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    number_format(1000)
    var expected = '1,000'
    var result = number_format(1000)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    number_format(67.311, 2)
    var expected = '67.31'
    var result = number_format(67.311, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    number_format(1000.55, 1)
    var expected = '1,000.6'
    var result = number_format(1000.55, 1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    number_format(67000, 5, ',', '.')
    var expected = '67.000,00000'
    var result = number_format(67000, 5, ',', '.')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    number_format(0.9, 0)
    var expected = '1'
    var result = number_format(0.9, 0)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 10', function (done) {
    number_format('1.20', 2)
    var expected = '1.20'
    var result = number_format('1.20', 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 11', function (done) {
    number_format('1.20', 4)
    var expected = '1.2000'
    var result = number_format('1.20', 4)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 12', function (done) {
    number_format('1.2000', 3)
    var expected = '1.200'
    var result = number_format('1.2000', 3)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 13', function (done) {
    number_format('1 000,50', 2, '.', ' ')
    var expected = '100 050.00'
    var result = number_format('1 000,50', 2, '.', ' ')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 14', function (done) {
    number_format(1e-8, 8, '.', '')
    var expected = '0.00000001'
    var result = number_format(1e-8, 8, '.', '')
    expect(result).to.deep.equal(expected)
    done()
  })
})