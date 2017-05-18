'use strict';

export class RunBlock {
    /** @ngInject */
    constructor(private ionic: any) {

        this.ionic.Platform.ready(() => {
            if ((<any>navigator).splashscreen) {
                (<any>navigator).splashscreen.hide();
            }
        });
    }
}
