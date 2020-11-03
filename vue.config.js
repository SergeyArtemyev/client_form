module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/main.scss";
          @import "@/assets/variables.scss";
          @import "@/assets/success.scss";
          @import "@/assets/media.scss";
        `
      }
    }
  },
  publicPath: '/vue_client_form/'
}