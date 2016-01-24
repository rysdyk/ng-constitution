// the array consists of dependencies
var myApp = angular.module('myApp', [
	'ngRoute',
	'constControllers'
]);

// routes go here
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/constitution.html',
		controller: 'ConstitutionController'
	})
	.when('/preamble', {
		templateUrl: 'partials/preamble.html',
		controller: 'ConstitutionController'
	})
	.when('/0', {
		redirectTo: '/preamble'
	})
	.when('/articles', {
		templateUrl: 'partials/articles.html',
		controller: 'ConstitutionController'
	})
	.when('/1', {
		redirectTo: '/articles'
	})
	.when('/articles/:artId', {
		templateUrl: 'partials/article.html',
		controller: 'ConstitutionController'
	})
	.when('/amendments/', {
		templateUrl: 'partials/amendments.html',
		controller: 'ConstitutionController'
	})
	.when('/2', {
		redirectTo: '/amendments'
	})
	.when('/amendments/0', {
		redirectTo: '/amendments'
	})
	.when('/amendments/:amendId', {
		templateUrl: 'partials/amendment.html',
		controller: 'ConstitutionController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
