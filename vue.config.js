'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const port = process.env.port || 80

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true
  },
  configureWebpack: {
    name: defaultSettings.websiteName,
    resolve: {
      extensions: ['.js', '.vue', '.scss'],
      alias: {
        '@': resolve('src')
      }
    }
  }
}