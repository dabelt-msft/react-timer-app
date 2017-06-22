const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: path.resolve(__dirname),
    filename: "./public/bundle.js"
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    alias: {
      "Main": path.resolve(__dirname, 'app/components/Main.jsx'),
      "Navigation": path.resolve(__dirname, 'app/components/Navigation.jsx'),
      "Timer": path.resolve(__dirname, 'app/components/Timer.jsx'),
      "Countdown": path.resolve(__dirname, 'app/components/Countdown.jsx'),
      "Clock": path.resolve(__dirname, 'app/components/Clock.jsx'),
      "applicationStyles": path.resolve(__dirname, 'app/styles/app.scss')

    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        options: {
            presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
