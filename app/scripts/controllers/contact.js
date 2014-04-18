'use strict';

angular.module('renovanApp')
  .controller('ContactCtrl', function ($scope) {
	
  	$scope.sendContactForm = function()
  	{
  		if(!$scope.contactForm.$valid){
  			return false;
  		}
  		alert('Valid form');
  	}
});