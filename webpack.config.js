let path = require('path');
let webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:{
        index: './src/js/index',
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname,'./index.html'),
            inject: 'body',//script标签的放置
            minify: {//html压缩
                removeComments: true,//移除注释
                collapseWhitespace: true //移除空格
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require("autoprefixer")({
                        overrideBrowserslist: [
                            "> 1%",
                            "last 2 versions"
                        ]
                    })
                ]
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname,'/src'),
                exclude: path.resolve(__dirname,'/node_modules'),
                options: {
                    name: 'js/[name].[ext]'
                }
            },
            //处理css中的loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            //处理sass中的loader
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //处理html模板中的loader
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            //处理图片中的loader( 通常url/file/image-webpack等loader配合 )
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: 'font/[name].[ext]'
                }
            }
        ]
    }
};
