const path = require('path')
const config = require('./build.config')
const basicAuth = require('../../server/src/utils/basic-auth')

/**
 * @todo
 * 
 * Revisit css loader in utils
 * https://github.com/gabrielstuff/async-await-vue/blob/master/build/utils.js
 * 
 */

const resolve = dir => path.resolve(config.src, dir)

// const fs = require('fs')
// fs.writeFileSync(path.resolve(__dirname, 'webpack.log'), '')

module.exports = {
    entry: resolve('app.js'),
    output: {
        path: config.dist,
        publicPath: '/',
        filename: 'app.js',
        /*devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'*/
        devtoolModuleFilenameTemplate: info => {
            /*fs.appendFile(
                path.resolve(__dirname, 'webpack.log'),
                JSON.stringify(info, null, '    '),
                err => { if (err) console.error(err) })*/
            return `webpack:///${info.resourcePath}`
        }
    },
    stats: 'minimal',
    devtool: 'inline-eval-cheap-source-map',
    devServer: {
        host: 'nitrade.local',
        port: 8080,
        contentBase: config.dist,
        historyApiFallback: true,
        stats: 'errors-only',
        hot: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }/*,
        before(app) {
            app.use(basicAuth('Nitrade', 'foo', 'NitradeDemo2017'))
        }*/
    },
    module: {
        rules: require('./rules')
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            'node_modules'
        ],
        alias: {
            '@': config.src,
            'locales': resolve('locales'),
            'src': config.src,
            'assets': resolve('assets'),
            'utils': resolve('utils'),
            'mixins': resolve('mixins'),
            'services': resolve('services'),
            'pages': resolve('pages'),
            'components': resolve('components')
        }
    },
    plugins: require('./plugins')
}
