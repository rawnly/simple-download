# Simple Download
Easy download files from **url**.

## Install
```bash
	$ npm install --save simple-download
```


## Usage
```js
		const download = require('simple-download');
		const url = 'https://httpbin.org/image/png'

		download(url, 'my_image.png') //=> Promise

```

## API

### url
- Type: `string`
- required: `true`

### path
- Type: `string`
- required: `true`
- Note: It needs to contain the file name, ex: `~/Desktop/my_image.png`
