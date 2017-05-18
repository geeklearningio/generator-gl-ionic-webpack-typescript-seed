'use strict';

var path = require('path');
var _ = require('lodash');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var baseConfig = require('./webpack.base.config');

__dirname = __dirname + '/../';

module.exports = [
    baseConfig.config("app", {
        devtool: 'inline-source-map',
        plugins: [
        new HtmlWebpackPlugin({
            pkg: require(path.join(__dirname, 'package.json')),
            template: path.join(__dirname, 'src/app/index.cordova.dev.html'),
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'www'
            },
            ui: false,
            online: false,
            notify: false
        })
        ]
    })
];
