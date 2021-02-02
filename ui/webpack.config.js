const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const uiRoot = `${__dirname}`;
module.exports = {
    entry: [
        `${uiRoot}/src/index.js`
    ],
    output: {
        path: `${uiRoot}/dist`,
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            '@src': `${uiRoot}/src`,
            '@components': `${uiRoot}/src/components`,
            '@services': `${uiRoot}/src/services`
        }
    },
    module: {
        rules: [
            {
                test: /.*\.js$/i,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(uiRoot, 'src/index.html')
        })
    ],
}