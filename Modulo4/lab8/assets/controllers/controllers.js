angular.module('lab8.controllers', ['lab8.services'])
.controller('lab8Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});