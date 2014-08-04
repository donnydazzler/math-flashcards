'use strict';

// returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// returns the answer and math symbol
function getAnswer(num1, num2, mathFunction) {
  var answer, symbol;

  if (mathFunction === 'Addition') {
    answer = Number(num1) + num2;
    symbol = '+';
  }

  if (mathFunction === 'Subtraction') {
    answer = Number(num1) - num2;
    symbol = '-';
  }


  if (mathFunction === 'Multiplication') {
    answer = Number(num1) * num2;
    symbol = '*';
  }

  if (mathFunction === 'Division') {
    answer = Number(num1) / num2;
    symbol = '/';
  }

  return {
    answer: answer,
    symbol: symbol
  };
}

/**
 * @ngdoc function
 * @name yoFlashcardAppApp.controller:CardCtrl
 * @description
 * # CardCtrl
 * CardCtrl of the yoFlashcardAppApp
 */
angular.module('yoFlashcardFullstackApp')
  .controller('CardCtrl', function ($scope, $location, $cookieStore, myfactory) {

    // redirect to settings view if no max number
    if ($cookieStore.get('math-flashcards.selectedMaxNumber') === 0) {
      $location.path('/settings');
    }

    // get session data from cookie
    $scope.selectedMathFunction = $cookieStore.get('math-flashcards.selectedMathFunction');
    $scope.selectedMaxNumber = $cookieStore.get('math-flashcards.selectedMaxNumber');
    $scope.score = $cookieStore.get('math-flashcards.score') || 0;

    // get question
    $scope.nextQuestion = function () {
      var questionData;
      $scope.firstNumber = getRandomInt(0, Number($scope.selectedMaxNumber) + 1);
      $scope.secondNumber = getRandomInt(0, Number($scope.selectedMaxNumber) + 1);

      // ensure first number is greater than the second number
      if ($scope.firstNumber < $scope.secondNumber) {
        $scope.nextQuestion();
      }

      // if doing division, ensure remainder is 0
      if ($scope.selectedMathFunction === 'Division' && ($scope.firstNumber % $scope.secondNumber !== 0)) {
        $scope.nextQuestion();
      }

      questionData = getAnswer($scope.firstNumber, $scope.secondNumber, $scope.selectedMathFunction);
      $scope.answer = questionData.answer;
      $scope.mathSymbol = questionData.symbol;
      $scope.enteredAnswer = null;
    };

    // verify answer
    $scope.verify = function () {

      if ($scope.enteredAnswer === null) {
        return;
      }

      if ($scope.answer === Number($scope.enteredAnswer)) {
        $scope.score += 10;
        $cookieStore.put('math-flashcards.score', $scope.score);

        // display random correct image
        $scope.displayResponse = true;
        var imgUrl = myfactory.correctImages[getRandomInt(0, myfactory.correctImages.length + 1)];
        $scope.responseSrc = imgUrl;
        console.log('Image: ' + imgUrl);
        $scope.nextQuestion();
      }
      $scope.enteredAnswer = null;
    };

    // get question
    $scope.nextQuestion();

    // hide image
    $scope.hideResponse = function () {
      $scope.displayResponse = false;
    };
  });
