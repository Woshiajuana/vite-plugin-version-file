
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    // mode: 'development',
    mode: 'production',

    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    // 配置 Webpack 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 模板
            template: path.resolve(__dirname, 'public/index.html'),
            minify: {
                removeAttributeQuotes: false, // 移除属性的引号
                removeComments: false, // 移除注释
                collapseWhitespace: false, // 折叠空白区域
            },
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             // 定义要拷贝的源目录
        //             from: path.resolve(__dirname, 'public'),
        //             // 定义要拷贝到的目标目录
        //             to: path.resolve(__dirname, 'dist'),
        //         },
        //     ],
        // }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: [ '.ts', '.js' ]
    },

};
