// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var vsprintf = require('../../../../src/php/strings/vsprintf.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/vsprintf.js (tested in test/languages/php/strings/test-vsprintf.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '1988-08-01'
    var result = vsprintf('%04d-%02d-%02d', [1988, 8, 1])
    expect(result).to.deep.equal(expected)
    done()
  })
})
