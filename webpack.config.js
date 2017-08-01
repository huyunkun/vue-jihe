var webpack = require('webpack');
var path = require('path');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry:  './src/main.js',
    // 输出配置
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                // 让webpack去验证文件是否是.js结尾将其转换
                test: /\.js$/,
                // 通过babel转换
                loader: 'babel-loader',
                // 不用转换的node_modules文件夹
                exclude: /node_modules/
            },
            {
                // 让webpack去验证文件是否是.js结尾将其转换
                test: /\.vue$/,
                // 通过babel转换
                loader: 'vue',
            }
        ]
    },
    vue: {
        loaders: {
        js: 'babel'
    }
                
}

