const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const PROD = process.env.NODE_ENV === 'production'

const distDir = 'public'
const srcDir = 'src'

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['babel-preset-stage-2'],
        plugins: ['transform-object-rest-spread']
    }
}

module.exports = {
    entry: './' + srcDir + '/app.js',
    output: {
        path: path.resolve(__dirname, distDir),
        publicPath: '/',
        filename: 'app.js'
    },
    stats: 'minimal',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8080,
        contentBase: distDir,
        historyApiFallback: true,
        stats: 'errors-only',
        hot: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                use: [babelLoader, 'vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [babelLoader]
            },
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                use: ['pug-loader', 'vue-loader']
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [
                                require('axis')({ implicit: false }),
                                require('rupture')(),
                                require('fa-stylus')()
                            ],
                            import: [
                                path.resolve(__dirname, 'src/styles/index.styl')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.yml$/,
                use: ['json-loader', 'yaml-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            'node_modules'
        ],
        alias: {
            '@': path.resolve(__dirname, srcDir),
            /*'vue': 'vue/dist/vue.common.js',
            'utils': path.resolve(__dirname, './utils'),*/
            'locales': path.resolve(__dirname, 'src/locales'),
            'src': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'components': path.resolve(__dirname, 'src/components')
        }
    },
    plugins: (() => {
        let plugins = [
            new FriendlyErrorsWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'vue-webpack3-test',
                xhtml: true,
                template: srcDir + '/index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'typeof window': '"object"',
                'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
            })
        ]
        return plugins
    })()
}
