#!/usr/bin/env node
const download = require('node-downloader')

var url = 'https://example.com/myfile.txt'

// file_name, url, destination, callback
download('myfile', url, './', () => {
	console.log('Downloaded!')
})
