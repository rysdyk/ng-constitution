var constControllers = angular.module("constControllers", []);

// this will take care of list part
constControllers.controller('ConstitutionController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('js/law.json').success(function(data){
		$scope.laws = data;
		$scope.lawOrder = "law";
		$scope.whichPart = $routeParams.partId;

    // amendments
		$scope.amendments = data[2].children;
		$scope.whichAmend = parseInt($routeParams.amendId, 10) - 1;

    // preamble
		$scope.preamble = data[0].children;

		// articless
		$scope.articles = data[1].children;
		$scope.whichArticle = parseInt($routeParams.artId, 10) - 1;
	});
}]);
