const download = require('../src')

async function main() {
	const url = 'https://httpbin.org/image/png'

	try {
		await download(url);		
	} catch (error) {
		console.error('failed to download the file')
	}
}