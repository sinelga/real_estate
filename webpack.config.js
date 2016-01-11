var webpack = require('webpack');

module.exports = {
		entry: {
		    app: [ './src/app.js']

		  },
   output: {
     path: __dirname + '/dist',
     filename: 'bundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/]  }
      ]
   }
};