const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main/web-app/index.jsx',
    output: {
        path: './src/main/resources/public',
        filename: './appbundle.min.js'
    },
    devServer:{
        port: 8081,
        contentBase: './src/main/resources/public'
    },
    resolve:{
        extensions: ['','.js','.jsx'],
        alias:{
            modules: './node_modules'
        }
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loaders:[{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query:{
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}