
module.exports = {
  lintOnSave: false,
  devServer:{
      proxy:{
          //配置跨域
          '/api': {
            target: 'http://www.hhsunset.top',
            ws: true,
            changOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
      }
  }

}
