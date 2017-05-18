'use strict';

export class HomeController {
    private currentEnvironment: string;

    /** @ngInject */
    constructor(private configuration: IGLIonicWebpackSeedConfig) {
        this.currentEnvironment = this.configuration.name;
    }
}
