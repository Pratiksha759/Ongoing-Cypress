import { Configuration } from 'webpack';

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

export default config;