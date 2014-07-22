'use strict';

angular.module('yoFlashcardFullstackApp')
  .factory('myfactory', function () {

    return {
      selectedMaxNumber: 0,
      selectedMathFunction: '',
      score: 0
    };

//    var meaningOfLife = 42;

// Public API here
//    return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
//    };
  });
