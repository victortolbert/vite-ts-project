const data = require('./demo')

// Run this to generate data.json
var fs = require('fs')
// var db = {}

// Credit http://www.paulirish.com/2009/random-hex-color-code-snippets/
function hex() {
  return Math.floor(Math.random() * 16777215).toString(16)
}

// Tables
// db.accounts = require('./data/accounts')
// db.people = data().people

fs.writeFileSync('db.json', JSON.stringify(data(), null, 2))
