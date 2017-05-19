'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var _ = require('lodash');

var utils = require('./webpack.utils');

__dirname = __dirname + '/../';

var jsonConfigurationFile;

for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === '--env') {
        if (process.argv[i + 1]) {
            jsonConfigurationFile = process.argv[i + 1] + '.json';
        }
    }
}

var baseConfigFunction = function () {
    return {
        entry: [
            path.join(__dirname, "src/app/index.module.ts")
        ],
        output: {
            path: path.join(__dirname, "www"),
            filename: "bundle.js"
        },
        resolve: {
            root: __dirname,
            extensions: ['', '.ts', '.webpack.js', '.web.js', '.css', '.scss', '.js', '.json']
        },
        resolveLoader: {
            modulesDirectories: ["node_modules"]
        },
        module: {
            preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'tslint-loader',
                    exclude: /node_modules/
                }
            ],
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'imports-loader?ionic=>window.ionic!awesome-typescript-loader'
                }, {
                    test: /\.html$/,
                    loader: 'html-loader'
                }, {
                    test: /\.json$/,
                    loader: "json-loader"
                }, {
                    test: /\.(png|jpg)$/,
                    loader: 'file-loader?name=[path][name].[ext]&context=./src/app'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader?name=fonts/[name].[ext]"
                }, {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader?name=fonts/[name].[ext]"
                }
            ]
        },
        postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/),
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, "src/configuration/" + jsonConfigurationFile),
                    to: path.join(__dirname, "www/configuration.json")
                }
            ])
        ]
    };
};

function configBase(name, customization) {
    return _.mergeWith({ name: name }, baseConfigFunction(), customization, utils.customizer);
}

module.exports = {
    app: function () {
        return configBase("app", {
            plugins:[]
        });
    },
    web: function () {
        return configBase("web", {
            plugins: [
                new HtmlWebpackPlugin({
                    pkg: require(path.join(__dirname, "package.json")),
                    template: path.join(__dirname, 'src/app/index.web.html'),
                    inject: 'body',
                    hash: true
                })
            ]
        });
    },
    config: function (name, customization) {
        return _.mergeWith({ name: name }, module.exports[name](), customization, utils.customizer);
    }
};
