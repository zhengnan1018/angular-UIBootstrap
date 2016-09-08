'use strict';

/**
 * @ngdoc function
 * @name angularUiBootstrapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularUiBootstrapApp
 */
angular.module('angularUiBootstrapApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.status = {
      open: false,
      isFirstDisabled: false,
      isFirstOpen: false,
    };
    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }]
  });
