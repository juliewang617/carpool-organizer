const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: [
      "@babel/polyfill",
      "webpack-hot-middleware/client?reload=true",
      "./client/src/index.js",
    ],
  },
  output: {
    path: `${__dirname}/client/dist`,
    filename: "[name]-bundle.js",
    publicPath: "/",
  },
  stats: {
    colors: true,
  },
  devtool: "source-map",
  devServer: {
    overlay: true,
    contentBase: "client/dist",
    stats: { colors: true },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "client/src/index.html",
      publicPath: "/",
    }),
  ],
};
