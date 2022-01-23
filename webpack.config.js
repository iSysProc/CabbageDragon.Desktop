const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production'

const commonSettings = {
    devtool: isProduction ? undefined : "source-map",
    stats: "minimal",
    mode: isProduction ? 'production' : 'development',
}

module.exports = [
    {
        ...commonSettings,
        entry: './src/electron/main.ts',
        target: 'electron-main',
        resolve: {
            extensions: [".ts", ".json"],
        },
        module: {
            rules: [{
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'electron.js'
        }
    },
    {
        ...commonSettings,
        entry: './src/electron/preload.ts',
        target: 'electron-preload',
        resolve: {
            extensions: [".ts", ".json"],
        },
        module: {
            rules: [{
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'preload.js'
        }
    },
    {
        ...commonSettings,
        entry: './src/App.tsx',
        target: 'electron-renderer',
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
        module: {
            rules: [{
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [], // disable initial clean
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];