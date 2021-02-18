const webpack = require('webpack'),
WebpackDevServer = require('webpack-dev-server'),
config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true}
}).listen(3000, (err) => {
  if(err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000');
})