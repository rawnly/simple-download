#!/usr/bin/env node
const download = require('./index')
var url = 'https://raw.githubusercontent.com/Rawnly/chili-js/master/index.js'

download('~/Desktop', url, (data) => {
	console.log(`Downloaded at ${data}`)
})
