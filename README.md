# Node Downloader
Easy download files from **url**.

## Install
```bash
	$ npm install --save node-downloader
```

## Usage
```js
	const download = require(download);
    
    var url = 'https://example.com/img.jpg';
    
    // file_name, url, destination, callback()
    download('myPhoto', url, './');
```

## API

### file_name
- Type: `string`
- Default: **random** readable string
- required: `false`
- extension: *Automatic if url contains the file name*

### url
- Type: `string` 
- required: `true`

### destination

- Type: `string`
- Default: './'

### callback
Will be executed when download it's finished.
- Type: `function()`
- Default: `null`



