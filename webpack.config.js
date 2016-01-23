var webpack = require('webpack');

module.exports = {
		entry: {
		    app: [ './src/app.js'],
			vendor: ["react", "react-dom","react-router","re-base"],
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
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
           ]
};