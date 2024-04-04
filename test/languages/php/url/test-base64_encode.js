// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var base64_encode = require('../../../../src/php/url/base64_encode.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/url/base64_encode.js (tested in test/languages/php/url/test-base64_encode.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    var result = base64_encode('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'YQ=='
    var result = base64_encode('a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = '4pyTIMOgIGxhIG1vZGU='
    var result = base64_encode('✓ à la mode')
    expect(result).to.deep.equal(expected)
    done()
  })
})
