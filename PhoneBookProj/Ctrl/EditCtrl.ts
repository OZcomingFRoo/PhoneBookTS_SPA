app.controller('EditCtrl', function ($scope, dbService, $routeParams, $location, otherService) {
    //Data Models
    $scope.person = dbService.GetContact(<number>$routeParams.index); // Contact object received by Service
    $scope.Phone = (<Cell<Contact>>$scope.person).Value.Phone; // string
    $scope.Name = (<Cell<Contact>>$scope.person).Value.Name; // string
    $scope.block = !(Contact.IsValid(new Contact($scope.Name, $scope.Phone))); // Boolean value
    //Data Models

    //Functions saves the VALID information of updated contact
    //Redirects to Home page
    $scope.Save = function () {
        dbService.SaveChanges(<number>$routeParams.index,
            new Contact($scope.Name, $scope.Phone));
        $location.path("Home");
    }

    //Function is called when user edits Contact info
    //Function checks if info is valid and gives '$scope.block' a new boolean value
    //Function's responsibility is to let the user update Contact if it meets the requirements
    $scope.IsValid = function () {
        if (Contact.IsValid(new Contact($scope.Name, $scope.Phone)))
            $scope.block = false;
        else
            $scope.block = true;     }

});

