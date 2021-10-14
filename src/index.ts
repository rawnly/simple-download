import { URL } from 'url'
import https from 'https'
import fs from 'fs'
import { fixPath } from './lib/util'


/**
 * @name download
 *
 * @param {String} urlString - Source url
 * @param {String} destination - Destination path (with filename)
 *
 * @example
 * ```ts
 * const downloadPath = await download('https://httpbin.org/image/png', '~/Desktop/my-file.png')
 * console.log(`Image downloaded to ${downloadPath}`)
 * ```
 *
 * @returns {string | Buffer}
 */
const download = (urlString: string, destination: string) : Promise<string | Buffer> => {
	const url = new URL(urlString)
	const filepath = fixPath(destination)

	const file = fs.createWriteStream(filepath)

	const request = https.get(url)

	return new Promise((resolve, reject) => {
		const onFinish = () => {
			file.close()
			resolve(file.path)
		}

		request.on('error', reject)

		request.on('timeout', () => {
			reject(new Error('Request Timed out.'))
		})

		request.on('response', response => {
			const stream = response.pipe(file)

			stream.on('error', reject)
			stream.on('finish', onFinish)
			stream.on('close',onFinish)
		})
	})
}


export default download;
