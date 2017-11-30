'use strict';

angular.module('psJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function(){
      var url = '/';
      var user = {};

      var options = {
        url: url,
        method: 'POST',
        data: user
      };
      $http(options).then(function(response){
        alert('success', 'Ok!', 'You are now registered' );
      }, function(errResponse){
        alert('warning', 'Oops!', 'Could not register' );
      });

      console.log('working...');
    };
  });