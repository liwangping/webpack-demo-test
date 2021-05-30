const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const dayjs = require("dayjs");

const pkg = require("./package");

module.exports = merge(common, {
  mode: "production",

  plugin: [
    new webpack.BannerPlugin({
      banner: `Last update: ${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )} \nVersion: ${pkg.version}`,
    }),
  ],
});
