# Simple Download
Easy download files from **url**.

## Install
```bash
	$ npm install --save simple-download
```

## Usage
```js
		const download = require('simple-download');
    var url = 'https://example.com/myfile.txt';

    // path, url, callback()
    download('path/to/myFile.txt', url, (data) => {
    	console.log('Downloaded', data);
    });
```
See the [example](example.js) or the [Live Example](https://runkit.com/5861c08251463100141ed278/5861c08251463100141ed279)

## API

### path
- Type: `string`
- required: `true`
- Note: It needs to contain the file name, ex: `~/Desktop/myfile.txt`

### url
- Type: `string`
- required: `true`

### callback
Will be executed when download it's finished.
- Type: `function()`
- Default: `null`
