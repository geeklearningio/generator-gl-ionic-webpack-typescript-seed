'use strict';

import {AppContextService} from "../../services/AppContextService";

export class MainController {

    /** @ngInject */
    constructor(private appContextService: AppContextService) {
        this.fixInternetExplorerClickProblems();
    }

    fixInternetExplorerClickProblems() {
        if (this.appContextService.isIE()) {
            window.addEventListener('click', (event) => {
                    this.doubleClickButtonIEFix(event);
                }
                , true);
        }
    }

    // avoid double click event on buttons in IE
    doubleClickButtonIEFix(event: any) {
        if (Object.prototype.toString.call(event) === '[object PointerEvent]') {
            event.stopPropagation();
        }
    }
}
