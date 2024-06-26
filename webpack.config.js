const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    mode: "development",
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    module: {
      rules: [
        {
          loader: `babel-loader`,
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: {
              sourceMap : true
            } },
            { loader: "sass-loader", options: {
              sourceMap: true
            } },
          ],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
      compress: true,
      publicPatk: "/dist/",
      port: 9000,
    },
  };
};
