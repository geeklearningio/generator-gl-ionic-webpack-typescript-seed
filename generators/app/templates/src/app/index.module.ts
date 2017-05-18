/// <reference path="../../typings/index.d.ts" />
/// <reference path="../configuration/IGLIonicWebpackSeedConfig.d.ts" />

'use strict';

import moment = require("moment");

// if you want readable angular errors, just use the non-minified version
import 'ionic-sdk/release/js/ionic.bundle.min';

import './thirdparty/angular-moment';
import 'angular-i18n/angular-locale_fr.js';
import 'moment/locale/fr';
import 'ng-cordova';

import 'gl-angular-configuration/package/src/ConfigurationProvider';

declare var exports: any;

import {Config} from  './index.config';
import {RouterConfig} from  './index.route';
import {RunBlock} from  './index.run';
import {loadConfigurationJSON} from "gl-angular-configuration/package/src/ConfigurationProvider";
import {AppContextService} from "./services/AppContextService";
import {MainController} from "./views/main/MainController";
import {HomeController} from "./views/home/HomeController";

exports = angular.module('glIonicWebpackSeed', [
    'ionic',
    'ngSanitize',
    'angularMoment',
    'ngCordova',
    'gl-angular-configuration'])
    .config(Config)
    .constant('moment', moment)
    .constant('ionic', (<any>window).ionic)
    .constant('$ionicLoadingConfig', {
        template: '<ion-spinner class="spinner-royal" icon="spiral"></ion-spinner>'
    })
    .config(RouterConfig)
    .run(RunBlock)
    .service('appContextService', AppContextService)
    .controller('MainController', MainController)
    .controller('HomeController', HomeController)
    ;

loadConfigurationJSON(() => {
    var domElement = document.querySelector('html');
    angular.bootstrap(domElement, ["glIonicWebpackSeed"]);
});
