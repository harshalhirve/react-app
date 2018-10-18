const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const rootDir = path.resolve(__dirname, "..");

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "./",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  optimization: {
    // splitChunks: {
    //   chunks: "async",
    //   minSize: 240000,
    //   maxSize: 0,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   automaticNameDelimiter: "~",
    //   name: true,
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       priority: -10,
    //       reuseExistingChunk: true
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true
    //     }
    //   }
    // },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          },
          warnings: false
        },
        parallel: true,
        cache: true,
        sourceMap: false,
        extractComments: "all"
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true,
        mangle: true,
        beautify: false,
        comments: false,
        compress: {
          unused: true,
          dead_code: true,
          warnings: false,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true,
          sequences: true,
          booleans: true
        },
        extractComments: true
      }),
      new CompressionPlugin({
        algorithm: "gzip"
      }),
      new BrotliPlugin()
    ],
    runtimeChunk: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
});
