// webpack的配置文件遵循着 commonJS规范，可以直接写node代码
const path = require('path')
const htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    output: {
      path: path.resolve('./dist') ,
    //   path: path.resolve(__dirname,'abc') , //必须是一个绝对路径
      filename:"bundle.js",
    },
    mode: 'development',// 'production',
    // watch: true, //监听文件变化，自动打包
    // devtool: 'inline-source-map',
    devServer:{
      port: 8090,
      open: true,
      hot: true,
    },
    // 配置插件
    plugins:[
      new htmlWebpackPlugin({
        // filename: 'index.html', //dist下生成的html文件名称
        // template: './src/template.html', //以当前路径下的template.html为模板生成dist下的html文件
      }), //打包时自动在dist目录生成一个引入bundle.js的html文件
    ],
    // 配置loader
    module:{
        rules:[
          {
            test: /\.css$/,
            use:['style-loader','css-loader']
          }
        ]
    }
}