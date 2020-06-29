// webpack的配置文件遵循着 commonJS规范，可以直接写node代码
const path = require('path')
module.exports={
    entry:'./src/main.js',
    output: {
      path: path.resolve('./dist') ,
    //   path: path.resolve(__dirname,'abc') , //必须是一个绝对路径
      filename:"bundle.js",
    },
    
    mode: 'development',// 'production',
    watch: true,
    devServer:{
      port: 8090,
      open: true,
      hot: true,
    }
    
}