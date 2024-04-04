// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var printf = require('../../../../src/php/strings/printf.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/printf.js (tested in test/languages/php/strings/test-printf.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 6
    var result = printf("%01.2f", 123.1)
    expect(result).to.deep.equal(expected)
    done()
  })
})
