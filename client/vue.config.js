const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    compress: true,
    // disableHostCheck: true,
    allowedHosts: ['green-blog.up.railway.app'],
    port: 3000,
  },
});
