'use strict';

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Calculate the answer
function getAnswer(num1, num2, fn) {
  var answer;

  if (fn === 'Addition') {
    answer = Number(num1) + num2;
  }

  if (fn === 'Subtraction') {
    answer = Number(num1) - num2;
  }


  if (fn === 'Multiplication') {
    answer = Number(num1) * num2;
  }

  return answer;
}

function getMathSymbol(mathFunction) {
  var symbol;

  if (mathFunction === 'Addition') {
    symbol = '+';
  }

  if (mathFunction === 'Subtraction') {
    symbol = '-';
  }


  if (mathFunction === 'Multiplication') {
    symbol = '*';
  }

  return symbol;
}

/**
 * @ngdoc function
 * @name yoFlashcardAppApp.controller:CardController
 * @description
 * # CardController
 * CardController of the yoFlashcardAppApp
 */
angular.module('yoFlashcardFullstackApp')
  .controller('CardCtrl', function ($scope, myfactory) {

    $scope.data = myfactory;
    $scope.mathSymbol = getMathSymbol(myfactory.selectedMathFunction);

    $scope.nextQuestion = function () {
      $scope.firstNumber = getRandomInt(0, Number(myfactory.selectedMaxNumber) + 1);
      $scope.secondNumber = getRandomInt(0, Number(myfactory.selectedMaxNumber) + 1);
      if ($scope.firstNumber < $scope.secondNumber) {
        $scope.nextQuestion();
      }
      $scope.answer = getAnswer($scope.firstNumber, $scope.secondNumber, myfactory.selectedMathFunction);
      $scope.enteredAnswer = null;
    };

    $scope.verify = function () {
      if ($scope.answer === Number($scope.enteredAnswer)) {
        $scope.result = null;
        myfactory.score += 10;
        $scope.nextQuestion();
      } else {
        $scope.result = false;
      }
      $scope.enteredAnswer = null;
    };

    $scope.nextQuestion();
  });
