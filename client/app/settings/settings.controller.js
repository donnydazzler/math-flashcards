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

    $scope.mathFunctions = [
      'Addition',
      'Subtraction',
      'Multiplication'
    ];

    $scope.maxNumber = 12;
    $scope.getNumber = function (num) {
      return new Array(num);
    };

    $scope.selectedMathFunction = myfactory.selectedMathFunction;
    $scope.selectedMaxNumber = myfactory.selectedMaxNumber;
//    $scope.score = myfactory.score;

    $scope.saveSettings = function () {
      $cookieStore.put('math-flashcards.selectedMathFunction', $scope.selectedMathFunction);
      $cookieStore.put('math-flashcards.selectedMaxNumber', $scope.selectedMaxNumber);
      myfactory.selectedMathFunction = $scope.selectedMathFunction;
      myfactory.selectedMaxNumber = $scope.selectedMaxNumber;
    };

    $scope.resetSettings = function () {
      $cookieStore.put('math-flashcards.selectedMathFunction', '');
      $cookieStore.put('math-flashcards.selectedMaxNumber', 0);
      $cookieStore.put('math-flashcards.score', 0);
      $scope.selectedMathFunction = myfactory.selectedMathFunction = '';
      $scope.selectedMaxNumber = myfactory.selectedMaxNumber = 0;
      $scope.score = myfactory.score = 0;
    };

  });
