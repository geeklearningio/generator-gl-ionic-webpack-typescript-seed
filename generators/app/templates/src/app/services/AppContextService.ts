'use strict';

export class AppContextService {
    public isMobileSize: boolean = false;
    public static InterfaceScreenLayoutChangeEvent: string = "event.broadcast.app.interface.screenLayoutChange";
    public static AppStatusResumeEvent: string = "event.broadcast.app.status.resume";
    public static AppStatusPauseEvent: string = "event.broadcast.app.status.pause";

    /* @ngInject */
    constructor(private $window,
                private $rootScope,
                private ionic: any) {
        this.checkIfWindowIsMobileSize(true);

        angular.element(this.$window).bind('resize', () => {
            this.checkIfWindowIsMobileSize();
        });

        document.addEventListener('pause', () => {
            this.$rootScope.$broadcast(AppContextService.AppStatusPauseEvent);
        });

        document.addEventListener('resume', () => {
            this.$rootScope.$broadcast(AppContextService.AppStatusResumeEvent);
        });
    }

    private checkIfWindowIsMobileSize(isFirstCall: boolean = false) {
        var oldIsMobileSize = this.isMobileSize;
        this.isMobileSize = this.$window.innerWidth < 1024;

        if (oldIsMobileSize !== this.isMobileSize) {
            this.$rootScope.$broadcast(AppContextService.InterfaceScreenLayoutChangeEvent, this.isMobileSize);
            if (!isFirstCall) {
                this.$rootScope.$digest();
            }
        }
    }

    public isIE() {
        return this.ionic.Platform.ua.toLowerCase().indexOf('trident') > -1;
    }
}
