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
var nl2br = require('/Users/kvz/code/phpjs/src/php/strings/nl2br.js')

describe('src/php/strings/nl2br.js', function () {
  it('should pass example 1', function (done) {
    nl2br('Kevin\nvan\nZonneveld')
    var expected = 'Kevin<br />\nvan<br />\nZonneveld'
    var result = nl2br('Kevin\nvan\nZonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    nl2br("\nOne\nTwo\n\nThree\n", false)
    var expected = '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
    var result = nl2br("\nOne\nTwo\n\nThree\n", false)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    nl2br("\nOne\nTwo\n\nThree\n", true)
    var expected = '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
    var result = nl2br("\nOne\nTwo\n\nThree\n", true)
    expect(result).to.deep.equal(expected)
    done()
  })
})