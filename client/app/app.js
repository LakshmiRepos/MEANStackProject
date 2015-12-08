'use strict';

var app = angular.module('shoppingCart', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login',{
      url : '/login',
      templateUrl : 'app/pages/login/login.html',
      controller : 'loginCtrl as login'
    }).state('homeProducts',{
      url : '/home/products/:id',
      templateUrl : 'app/pages/home/home.html',
      controller : 'homeCtrl as hc'
    }).state('homeCheckout',{
      url : '/home/checkout/:id',
      templateUrl : 'app/pages/checkout/checkout.html',
      controller : 'checkOutCtrl as cc'
    }).state('homeHistory',{
      url : '/home/history/:id',
      templateUrl : 'app/pages/history/history.html',
      controller : 'historyCtrl as hist'
    });
});
