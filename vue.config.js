const path = require("path");

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            // 这个是加上自己的路径，
            // 注意：不能使用别名路径
            path.resolve(__dirname,'./src/assets/style/theme.less')
        ]
    }
}
}
