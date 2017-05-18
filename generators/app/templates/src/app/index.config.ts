'use strict';
import {ConfigurationProvider} from "gl-angular-configuration/package/src/ConfigurationProvider";

export class Config {
    /** @ngInject */
    constructor($logProvider: angular.ILogProvider,
                configurationProvider: ConfigurationProvider<IGLIonicWebpackSeedConfig>,
                $ionicConfigProvider: any) {

        configurationProvider.addDefaultConfiguration(require('../configuration/default.json'));

        var versionFile = require('../configuration/version.json');

        configurationProvider.addConfiguration(versionFile);

        // enable log
        $logProvider.debugEnabled(true);

        $ionicConfigProvider.backButton.previousTitleText('');
        $ionicConfigProvider.backButton.text('');

        $ionicConfigProvider.navBar.alignTitle('center');
    }

}
