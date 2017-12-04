require('dotenv').config()
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const { PORT } = process.env

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true
}).listen(PORT, 'localhost', function(err, result) {
  if (err) {
    console.log(err)
  }

  console.log(`Listening at http://localhost:${PORT}/`)
})
