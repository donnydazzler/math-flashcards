'use strict';

/**
 * @ngdoc function
 * @name yoFlashcardAppApp.controller:ConfigController
 * @description
 * # ConfigController
 * ConfigController of the yoFlashcardAppApp
 */
angular.module('yoFlashcardFullstackApp')
  .controller('SettingsCtrl', function ($scope, myfactory) {

    $scope.mathFunctions = [
      'Addition',
      'Subtraction',
      'Multiplication'
    ];

    $scope.maxNumber = 12;
    $scope.getNumber = function (num) {
      return new Array(num);
    };

    $scope.data = myfactory;

  });
