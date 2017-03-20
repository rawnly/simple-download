const fs = require('fs')
const https = require('https')
const chili = require('chili-js');

function download(opt, cb) {
	let url,
			filename;

	// Download Destination
	const pp = (opt.path !== undefined) ? opt.path : path.join(home, 'Desktop')

	// Parsing url
	if (typeof opt == 'object') {
		url = opt.url;
	} else if (typeof opt == 'string') {
		url = opt;
	} else {
		throw new Error(`Invalid options input! Expected 'object' or 'string'.`)
	}

	if ( opt.file !== undefined ) {
		filename = opt.file
	} else if ( url.split('/')[url.split('/').length - 1].length > 0 ) {
		filename = url.split('/')[url.split('/').length - 1]
	} else if (url.split('?')[url.split('?').length - 1]) {
		filename = url.split('?')[url.split('?').length - 1]
	}

	https.get(url, response => {
		response.pipe(fs.createWriteStream(`${pp}/${filename}`)).on('finish', () => {
			cb(`${pp}/${filename}`, filename)
		})
	});

}

module.exports = download;
