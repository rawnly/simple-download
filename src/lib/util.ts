const os = require('os')

export const fixPath = (path: string) =>
  path.replace(/^~/gi, os.homedir());
