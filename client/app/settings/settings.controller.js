'use strict';

/**
 * @ngdoc function
 * @name yoFlashcardFullstackApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * SettingsCtrl of the yoFlashcardFullstackApp
 */
angular.module('yoFlashcardFullstackApp')
  .controller('SettingsCtrl', function ($scope, $cookieStore) {

    // setup drop-down data
    $scope.mathFunctions = [
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division'
    ];

    // setup drop-down data
    $scope.maxNumber = 15;
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
