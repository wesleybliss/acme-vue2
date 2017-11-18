const path = require('path')
const config = require('./build.config')

const rules = [
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
            /node_modules\/gdax/,
            /node_modules\/fs/,
            /node_modules\/tls/,
            /node_modules\/tunnel-agent/,
        ],
        loader: 'babel-loader'
    },
    {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader'
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
                        path.resolve(config.src, 'styles/index.styl')
                    ]
                }
            }
        ]
    },
    {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
    },
    {
        test: /\.yml$/,
        use: ['json-loader', 'yaml-loader']
    }
    /*,
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
    }*/
]

if (config.lint)
    rules.unshift({
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [config.src, config.test],
        options: {
            formatter: require('eslint-friendly-formatter')
        }
    })


module.exports = rules
