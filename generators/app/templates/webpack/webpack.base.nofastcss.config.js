'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var _ = require('lodash');

var utils = require('./webpack.utils');

__dirname = __dirname + '/../';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var baseConfig = require('./webpack.base.config');

var baseConfigFunction = function () {
    return {
        entry: [
            path.join(__dirname, "src/app/style.scss")
        ],
        plugins: [
            new ExtractTextPlugin("style.css"),
            new HtmlWebpackPlugin({
                pkg: require(path.join(__dirname, 'package.json')),
                template: path.join(__dirname, 'src/app/index.cordova.html'),
                inject: 'body',
                hash: true
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader',
                    'css-loader!postcss-loader!sass-loader')
                }
            ]
        },
        postcss: [autoprefixer({browsers: ['last 2 versions']})],
        tslint: {
            failOnHint: true
        }
    };
};

module.exports = {
    app: function () {
        return configBase("app", {});
    },
    web: function () {
        return configBase("web", {
            plugins: [
                new HtmlWebpackPlugin({
                    pkg: require(path.join(__dirname, 'package.json')),
                    template: path.join(__dirname, 'src/app/index.web.html'),
                    inject: 'body',
                    hash: true
                })
            ]
        });
    },
    config: function (name, customization) {
        var config = _.mergeWith({name: name}, baseConfigFunction(), baseConfig[name](), utils.customizer);
        return _.mergeWith({name: name}, config, customization, utils.customizer);
    }
};

