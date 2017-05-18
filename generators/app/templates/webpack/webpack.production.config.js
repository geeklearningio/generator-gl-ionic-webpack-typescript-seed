'use strict';

var webpack = require('webpack');
var path = require('path');

var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var autoprefixer = require('autoprefixer');
var _ = require('lodash');

var baseConfigNoFastCss = require('./webpack.base.nofastcss.config');

module.exports = [
    baseConfigNoFastCss.config("app", {
        plugins: [
            new ngAnnotatePlugin({
                add: true
            }),
            new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        )]
    })
];
