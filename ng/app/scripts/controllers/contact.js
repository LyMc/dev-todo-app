'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.inputValue = ''
    $scope.todoList = []
    $scope.addTodo = function() {
      $scope.todoList.push($scope.inputValue)
      $scope.inputValue = ''
    }
    $scope.deleteItem = function(index) {
      $scope.todoList.splice(index, 1)
    }
    $scope.onEnter = function(event) {
      console.log(event)
    }
  });
