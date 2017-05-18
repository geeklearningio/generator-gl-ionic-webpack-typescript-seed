/**
 * Created by Vidailhet on 28/07/16.
 */

'use strict';

var _ = require('lodash');

module.exports = {
    customizer: function (objValue, srcValue) {
        if (_.isArray(objValue)) {
            return objValue.concat(srcValue);
        }
    }
};



