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

    // setup drop-down data
    $scope.mathFunctions = [
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division'
    ];

    // setup drop-down data
    $scope.maxNumber = 12;
    $scope.getNumber = function (num) {
      return new Array(num);
    };

    // set drop-down values if in cookie
    $scope.selectedMathFunction = $cookieStore.get('math-flashcards.selectedMathFunction') || '';
    $scope.selectedMaxNumber = $cookieStore.get('math-flashcards.selectedMaxNumber') || 0;

    $scope.saveSettings = function () {
      $cookieStore.put('math-flashcards.selectedMathFunction', $scope.selectedMathFunction);
      $cookieStore.put('math-flashcards.selectedMaxNumber', $scope.selectedMaxNumber);
    };

    $scope.resetSettings = function () {
      $cookieStore.put('math-flashcards.selectedMathFunction', '');
      $cookieStore.put('math-flashcards.selectedMaxNumber', 0);
      $cookieStore.put('math-flashcards.score', 0);
      $scope.selectedMathFunction = '';
      $scope.selectedMaxNumber = 0;
      $scope.score = 0;
    };

  });
