var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

const clientConfig = (env, argv) => {
  
    return {
      mode: 'production',
      entry: './src/index.ts',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ]
      },
      plugins: [
        //new webpack.DefinePlugin()
      ],
      resolve: {
        extensions: ['.ts']
      },
      output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        library: 'horseman',
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this',
      },
      externals: [nodeExternals()]
    }
  };

  module.exports = clientConfig;