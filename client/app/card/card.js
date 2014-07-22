'use strict';

angular.module('yoFlashcardFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/card', {
        templateUrl: 'app/card/card.html',
        controller: 'CardCtrl'
      });
  });
