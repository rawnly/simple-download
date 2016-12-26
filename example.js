#!/usr/bin/env node
const download = require('./download');

var url = 'https://example.com/myfile.txt';

// file_name, url, destination, callback
download('myfile', url, './', () => {
  console.log('Downloaded!');
});
