const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

/*
When using Webpack Dev Server with the Node.js API, don't put the dev server options on the webpack configuration object. Instead, pass them as a second parameter upon creation. For example:

new WebpackDevServer(compiler, options)

To enable HMR, you also need to modify your webpack configuration object to include the HMR entry points. The webpack-dev-server package includes a method called addDevServerEntrypoints which you can use to do this. Here's a small example of how that might look:
 */

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});