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
var call_user_func_array = require('/Users/kvz/code/phpjs/src/php/funchand/call_user_func_array.js')

describe.skip('src/php/funchand/call_user_func_array.js', function () {
  it('should pass example 1', function (done) {
    call_user_func_array('isNaN', ['a'])
    var expected = true
    var result = call_user_func_array('isNaN', ['a'])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    call_user_func_array('isNaN', [1])
    var expected = false
    var result = call_user_func_array('isNaN', [1])
    expect(result).to.deep.equal(expected)
    done()
  })
})