const os = require('os')

/**
 * 
 * @param {String} path 
 */
module.exports = (path) => path.replace(/~/gi, os.homedir());
