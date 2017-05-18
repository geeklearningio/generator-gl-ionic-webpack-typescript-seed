'use strict';

export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider
            .state('main',
            {
                url: '',
                abstract: true,
                template: require('./views/main/main.html'),
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('main.home', {
                url: '/home',
                template: require('./views/home/home.html'),
                controller: 'HomeController',
                controllerAs: 'home'
            });

        $urlRouterProvider.otherwise('/home');
    }
}
