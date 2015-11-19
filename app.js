var myApp = angular.module('myApp', []);

myApp.controller('mainController' , function ($scope, $http) { 
    
    $scope.getRequest = function () { 
        $http.get("http://localhost:8080/rest/getCustomers")
            .success(function(response){
                $scope.response = response;
            console.log(response);
            })
            .error(function(response){
                console.log("Unable to perform get request");
            });
    };
    
    $scope.search = function(){
        $http.get("http://localhost:8080/rest/searchCustomers/" + $scope.text)
            .success(function(response){
            $scope.text = document.getElementById("search").value;
                $scope.response = response;
            console.log(response);
        })
        .error(function(response){
            console.log("Unable to perform request");
        })
    };
       
});

