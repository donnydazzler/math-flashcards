'use strict';

/**
 * @ngdoc function
 * @name yoFlashcardAppApp.controller:ConfigController
 * @description
 * # ConfigController
 * ConfigController of the yoFlashcardAppApp
 */
angular.module('yoFlashcardFullstackApp')
  .controller('SettingsCtrl', function ($scope, $cookieStore, myfactory) {

    $scope.selectedMathFunction = myfactory.selectedMathFunction;
    $scope.selectedMaxNumber = myfactory.selectedMaxNumber;

    $scope.mathFunctions = [
      'Addition',
      'Subtraction',
      'Multiplication'
    ];

    $scope.maxNumber = 12;
    $scope.getNumber = function (num) {
      return new Array(num);
    };

    $scope.saveSettings = function () {
      console.log('saving settings...');
      console.log('math function: ' + $scope.selectedMathFunction);
      console.log('max number: ' + $scope.selectedMaxNumber);
      $cookieStore.put('math-flashcards.selectedMathFunction', $scope.selectedMathFunction);
      $cookieStore.put('math-flashcards.selectedMaxNumber', $scope.selectedMaxNumber);
      myfactory.selectedMathFunction = $scope.selectedMathFunction;
      myfactory.selectedMaxNumber = $scope.selectedMaxNumber;
    };

  });
