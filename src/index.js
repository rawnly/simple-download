import path from 'path'
import fs from 'fs'
import https from 'https'
import http from 'http'

import { URL } from 'url'
import fixPath from './lib/utils'


class File {
	constructor (url, destination) {
		this.url = url
		this.dest = destination
		this.protocol = new URL(url).protocol
	}

	getURLInfo() {
		return new URL(this.url)
	}

	download() {
		let url = this.url
		let dest = this.dest

		const _path = path.parse(dest)
		const path_ = path.join(fixPath(_path.dir), _path.base)
		const file = fs.createWriteStream( path_ )
		const protocol = this.protocol

		return new Promise(function(resolve, reject) {
			var client = http

			switch (protocol) {
			case 'http:':
				client = http
				break
			case 'https:':
				client = https
				break
			default:
				reject(`INVALID PROTOCOL: "${protocol}"`)
			}

			const request = client.get(url, response => {
				response.pipe(file).on('finish', () => {
					file.close(resolve(_path))
				})
			})

			request.on('error', (e) => {
				reject(e)
			})	
		})
	}
}


module.exports = File
