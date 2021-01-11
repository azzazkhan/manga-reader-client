const { ProvidePlugin } = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  },
};
