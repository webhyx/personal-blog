
module.exports = {
  lintOnSave: false,
  devServer:{
      proxy:{
          //配置跨域
          '/api': {
            target: 'https://www.hhsunset.top',
            // ws: true,
            changOrigin: true,
            pathRewrite: {
              '^/api': '/'
            }
          }
      }
  }

}
