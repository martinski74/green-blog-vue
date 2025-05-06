const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
  },
});
