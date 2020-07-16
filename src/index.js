const { URL } = require('url')
const path = require('path')
const fs = require('fs')
const https = require('https')
const fixPath = require('./lib/fixPath')


/**
 * @name download
 * 
 * @param {String} source
 * @param {String} destination 
 * 
 * @returns void
 */
const download = (source, dest) => new Promise(function (resolve, reject) {
	let client = https
	let url = new URL(source)

	const parsedPath = path.parse(dest)
	const filepath = path.join(fixPath(parsedPath.dir), parsedPath.base)

	const file = fs.createWriteStream(filepath)

	client
		.get(url, response =>
			response.pipe(file).on('finish', () => 
				file.close(resolve(file)))
		)
		.on('error', reject)
})

module.exports.default = download;
module.exports = download;