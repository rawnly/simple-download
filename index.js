const fs = require('fs')
const https = require('https')

var log = console.log
var get = https.get


module.exports = (file_path, url, callback) => {
	var file = fs.createWriteStream(file_path)

	get(url, function(response) {
		response.pipe(file).on('finish', () => {
			if (callback !== undefined) {
				callback(file_path)
			} else {
				log(file + ' Downloaded')
			}
		})
	})
}
