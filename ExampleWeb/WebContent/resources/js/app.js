'use strict';

var App = angular.module('myApp',['ui.router','ui.bootstrap',"angucomplete-alt","ngGrid","ImageCropper","nvd3","jkuri.timepicker"]);



App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/")
	
	$stateProvider
	.state('home', {
		url: "/",
			views: {
	            'content': {
	            	templateUrl: 'home',
	        		controller : "HomeController"
	            }
	        }
	})
}]);

