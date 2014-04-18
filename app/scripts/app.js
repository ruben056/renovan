'use strict';

angular
  .module('renovanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angular-carousel',
    'ngAnimate'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        redirectoTo: '/projects/algemeen'
      })
      .when('/projects/:projectName', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
