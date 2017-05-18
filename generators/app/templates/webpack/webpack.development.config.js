'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var _ = require('lodash');

var baseConfigNoFastCss = require('./webpack.base.nofastcss.config');

module.exports = [
    baseConfigNoFastCss.config("app", {
        devtool: 'inline-source-map'
    })
];
