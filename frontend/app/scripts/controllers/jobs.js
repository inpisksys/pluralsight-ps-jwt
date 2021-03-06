'use strict';

angular.module('psJwtApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
    var options = {
      url: 'http://localhost:1337/job',
      method: 'GET'
    };

    $http(options).then(function(response) {
        $scope.jobs = response.data;
      }, function(errResponse){
        alert('warning', "Unable to get jobs", errResponse.message);
    });

  });
