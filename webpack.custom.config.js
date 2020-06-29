// webpack的配置文件遵循着 commonJS规范，可以直接写node代码
const path = require('path')
module.exports={
    entry:'./src/main.js',
    output: {
      path: path.resolve('./dist') ,
      filename:"bundle.js",
    },
    mode: 'production',
}