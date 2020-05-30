'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'CirquityRPC.js',
    library: 'CirquityRPC',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  },
  target: 'web'
}
