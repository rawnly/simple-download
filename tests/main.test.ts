import download from '@src/index'
import fs from 'fs'

describe('Download', () => {

  it('Should download a file', async () => {
    const data = await download('https://httpbin.org/image/png', process.cwd() + '/test.png' )
    const result = fs.existsSync(data)

    expect(result)
      .toBe(true)
  })
})
