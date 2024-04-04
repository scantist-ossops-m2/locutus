// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var parse_str = require('../../../../src/php/strings/parse_str.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/parse_str.js (tested in test/languages/php/strings/test-parse_str.js)', function () {
  it('should pass example 1', function (done) {
    var expected = { first: 'foo', second: 'bar' }
    var $arr = {}
    parse_str('first=foo&second=bar', $arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = { str_a: "Jack and Jill didn't see the well." }
    var $arr = {}
    parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', $arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = {"3":"a","a":{"b":{"c":"def"},"q":"t 5"}}
    var $abc = {3:'a'}
    parse_str('a[b]["c"]=def&a[q]=t+5', $abc)
    var result = $abc
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = {"a":{"0":{"0":"value"}}}
    var $arr = {}
    parse_str('a[][]=value', $arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = {"a":{"0":"2"}}
    var $arr = {}
    parse_str('a=1&a[]=2', $arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
})
