var angular = require('angular'),
  route = require('angular-route'),
  house = require('./controllers/house'),
  sl;


sl = angular.module('sl', [
  'ngRoute',
  'sl.controllers'
]);

// add range filter
require('./directives/range');

sl.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/house.html',
        controller: 'HouseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
