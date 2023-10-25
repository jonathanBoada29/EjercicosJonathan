module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/build',
  },
  devtool: 'eval-source-map',
  mode: 'development'
}