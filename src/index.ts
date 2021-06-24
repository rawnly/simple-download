import { URL } from 'url'
import https from 'https'
import fs from 'fs'
import { fixPath } from '@lib/util'


/**
 * @name download
 *
 * @param {String} source
 * @param {String} destination
 *
 * @returns void
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
