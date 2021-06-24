# Simple Download
> Download files with ease. (No dependencies!)

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

## Install
```bash
	npm install simple-download

	# or

	yarn add simple-download
```


## Usage
```ts
	import download from 'simple-download'

	const url = 'https://httpbin.org/image/png'

	await download(url, '~/Desktop/my-image.png') //=> Promise<string | Buffer>
```

## API

### url
- Type: `string`
- required: `true`

### path
- Type: `string`
- required: `true`
- Note: It must have the file name. (ex: `~/Desktop/my-image.png`)
