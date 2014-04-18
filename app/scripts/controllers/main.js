'use strict';

angular.module('renovanApp')
  .controller('MainCtrl', function ($scope) {
    
    /*required for test to succeed need to adapt test and remove...*/
	$scope.awesomeThings = [
		'een',
		'twee',
		'drie'
	];

	/*TODO use projectName var here in the url... iso other stuff*/
	$scope.images = [
		'images/mainpage/foto1.jpg',
		'images/mainpage/foto2.jpg',
		'images/mainpage/foto3.jpg',
		'images/mainpage/foto4.jpg'
	];

	$scope.textContent = function(){};
	$scope.textContent.paragraphs = [
		'Hier komt er wat info over het project. Het is in verschillende paragrafen ingedeeld. Dit is paragraaf1',
		'paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2 paragraaf2',
		'paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3 paragraaf3'
	];
	$scope.textContent.title = 'Bitje informatie voorzien e';
});
