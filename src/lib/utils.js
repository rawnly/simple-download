const os = require('os')

function fixPath(path) {
	if (path != undefined && typeof path == 'string') {

		if (path.includes('~')) {
			path = path.replace('~', os.homedir())
		}

		return path
	}

	throw new Error('UNDEFINED path')
}

module.exports = fixPath
