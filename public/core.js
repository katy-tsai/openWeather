var weather = angular.module('weather', []);

function mainController($scope,$http){
	$scope.cityname = "";

	$scope.search = function(){
		var cityname = $scope.cityname ==""?"Taipei":$scope.cityname;
		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityname+"&mode=json&units=metric&cnt=7";
		$http.get(url).success(function(data){
			$scope.city = data.city;
			//console.log(data);
			$scope.lists = data.list;

		}).error(function(data){
			console.log('Error:'+data);
		});

	};

  

};