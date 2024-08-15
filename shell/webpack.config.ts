const webpack = require('webpack');
const path = require('path');
const { Configuration } = webpack

interface IEnv {
  mode: 'production' | 'development'
}

/** @type {import('webpack').Configuration} */
module.exports = (env: IEnv) => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }
}
