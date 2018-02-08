#!/usr/bin/env node

const File = require('../dist/index')
const chalk = require('chalk')

let file = new File('http://rawnly.com/index.html', __dirname + '/downloads/' + 'index.html')

file.download().then(info => {
	let filename = info.base
	let path = info.dir
	let source = file.url

	console.log(chalk`"{bold {yellow ${filename}}}" downloaded in "{bold {gray ${path}}}" \n from {bold ${source}}\n`)
	console.log({
		rootdir: info.root,
		ext: info.ext
	})
	
	console.log()
}).catch(e => {
	throw new Error(e)
})
