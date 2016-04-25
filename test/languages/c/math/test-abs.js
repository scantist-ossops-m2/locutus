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
var abs = require('/Users/kvz/code/phpjs/src/c/math/abs.js')

describe('src/c/math/abs.js', function () {
  it('should pass example 1', function (done) {
    abs(4.2)
    var expected = 4.2
    var result = abs(4.2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    abs(-4.2)
    var expected = 4.2
    var result = abs(-4.2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    abs(-5)
    var expected = 5
    var result = abs(-5)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    abs('_argos')
    var expected = 0
    var result = abs('_argos')
    expect(result).to.deep.equal(expected)
    done()
  })
})