const config = {
  entry: ['./src/dash-platform-user.js'],
  output: {
    path: __dirname + '/build',
    filename: 'dash-platform-user-lib.js',
    libraryTarget: 'var',
    library: 'DashPlatformUser'
  },
  externals: {

    "dash": "Dash"

  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      }]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    port: 3031,
    contentBase: __dirname + '/build',
    inline: true
  }
}
module.exports = config;