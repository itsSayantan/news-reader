const webpack = require('webpack');
const path = require('path');

const { copy } = require('./utils');

const REACT_BASE_PATH = '../src/';
const REACT_DEV_SERVER_OUTPUT_PATH = path.resolve(__dirname, '../public/');
const REACT_OUTPUT_PATH = path.resolve(__dirname, '../dist/');
const REACT_OUTPUT_FILE_NAME = 'bundle.js';

if (process.env.NODE_ENV === 'production') {
    copy();
}

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@Components': path.resolve(
                __dirname,
                REACT_BASE_PATH,
                'components'
            ),
            '@Shared': path.resolve(__dirname, REACT_BASE_PATH, 'shared')
        }
    },
    entry: './index.tsx',
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'source-map'
            : 'cheap-eval-source-map',
    output: {
        path:
            process.env.NODE_ENV === 'production'
                ? REACT_OUTPUT_PATH
                : REACT_DEV_SERVER_OUTPUT_PATH,
        filename: REACT_OUTPUT_FILE_NAME
    },
    devServer: {
        contentBase: REACT_DEV_SERVER_OUTPUT_PATH,
        disableHostCheck: false,
        port: 3000,
        compress: true,
        hot: true,
        writeToDisk: false,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.tsx{0,1}$/,
                exclude: /\.test\.tsx{0,1}$/,
                use: ['ts-loader']
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
