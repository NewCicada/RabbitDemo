module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        __dirname + "/src/assets/styles/variables.less",
        __dirname + "/src/assets/styles/mixin.less",
      ],
    },
  },
  chainWebpack: (config) => {
    // 禁用域名检查
    config.devServer.disableHostCheck(true);
    // 小于 10kb 的图片打包为 base64 编码格式
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 10000 }));
  },
};
