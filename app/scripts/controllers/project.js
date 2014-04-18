'use strict';

angular.module('renovanApp')
  .controller('ProjectCtrl', function ($scope, $routeParams) {
	
	var projectName = $routeParams.projectName;

	// TODO use projectName var here in the url... iso
	$scope.images = [
		'images/projects/'+ projectName +'/foto1.jpg',
		'images/projects/'+ projectName +'/foto2.jpg',
		'images/projects/'+ projectName +'/foto3.jpg',
		'images/projects/'+ projectName +'/foto4.jpg'
	];

	$scope.textContent = function(){};
	$scope.textContent.paragraphs = [
		'Hier komt er wat info over het project. Het is in verschillende paragrafen ingedeeld. Dit is paragraaf1',
		'paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2',
		'paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3'
	];
	$scope.textContent.title = projectName;
});
