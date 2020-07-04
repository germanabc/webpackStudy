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
    // css:{ //脚手架3可以这样配置
    //   sourceMap:true
    // },
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
          },
          {
            test: /\.less$/,
            //use或者 loaders 两种写法都可以，推荐webpack4 use 写法
            // use:['style-loader','css-loader','less-loader']
            loaders: ['style-loader', 'css-loader', 'less-loader']
          },
          {
            test: /\.scss$/,
            use:['style-loader','css-loader','sass-loader']
            // loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          // {
             //支持各种图片，那么下载file-loader就行了
            // test: /\.(png|svg|jpg|gif)$/,
            // use:['file-loader'],
            // use:[{
            //   loader:'file-loader',
            //   options: {
            //     publicPath:"/"
            //   }
            // }]
          // },
           //想对图片进行复杂配置, 那么就使用url-loader
           //url-loader底层依赖file-loader,但不需要另外安装
          {
            test: /\.(png|svg|jpg|gif)$/,
            use:[{
              "loader":'url-loader',
              // limit表示如果图片大于2KB，就以路径形式展示，小于的话就用base64格式展示
              options:{
                limit: 2*1024
              }
            }]
          },
        ]
    }
}