const test = require('ava')
const fs = require('fs')
const download = require('../src')
const tempy = require('tempy')

test('Check if the file is downloaded', async t => {
    const url = 'https://httpbin.org/image/png'
    const filepath = tempy.file({ extension: 'png' })

    t.false(fs.existsSync(filepath), 'The file already exists. Try cleaning your TMP: ' + filepath)
    await download(url, filepath)
    t.true(fs.existsSync(filepath), 'Cannot find the downloaded file at: ' + filepath)
})

