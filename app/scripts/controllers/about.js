'use strict';

angular.module('renovanApp')
  .controller('AboutCtrl', function ($scope) {
	$scope.toonAbout1 = true;
	$scope.toonAbout2 = true;

	$scope.clickAbout1 = function(){
		$scope.toonAbout2 = !$scope.toonAbout2;
	}
});