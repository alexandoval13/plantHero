const path = require('path');
// const nodeExternals = require('webpack-node-externals')
// const webpack = require('webpack');

module.exports = {
 entry: "./client/index.jsx", // make sure to point this to the right file path
 watch: true, // this or removind the -d from something else?
 output: {
   filename: "bundle.js",
   path: path.resolve(__dirname, "./client/dist") // not sure what this does, pointing it to that file though
 },
//  target: 'node',
//  externals: [nodeExternals()],
 module: {
   rules: [{
     test: /\.jsx?/, // changed this
     exclude: /node_modules/, // regex?
     loader: "babel-loader"
   },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      }
    ]
  }]
 }
};