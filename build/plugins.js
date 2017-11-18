const path = require('path')
const config = require('./build.config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = [
    
    new FriendlyErrorsWebpackPlugin(),
    
    new HtmlWebpackPlugin({
        title: 'vue-webpack3-test',
        template: path.resolve(config.src, 'index.html'),
        inject: true
    }),
    
    new webpack.NamedModulesPlugin(),
    
    /*new webpack.SourceMapDevToolPlugin({
        test: /\.(js|css|vue)$/,
        filename: '[name].map'
    }),*/
    
    new webpack.HotModuleReplacementPlugin(),
    
    new webpack.DefinePlugin({
        'typeof window': '"object"',
        'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
    })
    
]
