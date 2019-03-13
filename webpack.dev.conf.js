const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        port: 8081,
        overlay: {
          warnings: true,
          errors: true
      }
    },
    plugin: [
        new webpack.SourceMapDevToolPlugin
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})