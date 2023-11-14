const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  output: {
    publicPath: './',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        // Create a vendors chunk, which includes all code from node_modules in the whole application.
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: './public/index.html',
        },
        {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
      )
    ),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('codevolution'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
