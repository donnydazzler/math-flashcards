'use strict';

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Calculate the answer
function getAnswer(num1, num2, mathFunction) {
  var answer;

  if (mathFunction === 'Addition') {
    answer = Number(num1) + num2;
  }

  if (mathFunction === 'Subtraction') {
    answer = Number(num1) - num2;
  }


  if (mathFunction === 'Multiplication') {
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
  .controller('CardCtrl', function ($scope, myfactory, $location, $cookieStore) {

    if ($cookieStore.get('math-flashcards.selectedMaxNumber') === 0) {
      $location.path('/settings');
    }

    // get data from cookie
    $scope.selectedMathFunction = $cookieStore.get('math-flashcards.selectedMathFunction');
    $scope.selectedMaxNumber = $cookieStore.get('math-flashcards.selectedMaxNumber');
    $scope.score = $cookieStore.get('math-flashcards.score') || 0;

    // determine math symbol
    $scope.mathSymbol = getMathSymbol($scope.selectedMathFunction);

    // setup question
    $scope.nextQuestion = function () {
      $scope.firstNumber = getRandomInt(0, Number($scope.selectedMaxNumber) + 1);
      $scope.secondNumber = getRandomInt(0, Number($scope.selectedMaxNumber) + 1);
      if ($scope.firstNumber < $scope.secondNumber) {
        $scope.nextQuestion();
      }
      $scope.answer = getAnswer($scope.firstNumber, $scope.secondNumber, $scope.selectedMathFunction);
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

    // set question
    $scope.nextQuestion();

    // hide image
    $scope.hideResponse = function () {
      $scope.displayResponse = false;
    };
  });
