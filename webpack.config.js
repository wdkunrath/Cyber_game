const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dotenv = require("dotenv");
const webpack = require("webpack");

const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

const host = process.env.HOST || "localhost";

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    entry: resolveAppPath("src"),
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      contentBase: resolveAppPath("public"),
      compress: true,
      hot: true,
      host,
      port: 3000,
      publicPath: "/",
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=image/svg+xml",
        },
        {
          test: /\.(png|jpe?g|gif|ttf)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader",
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveAppPath("public/index.html"),
      }),
    ],
  };
};
