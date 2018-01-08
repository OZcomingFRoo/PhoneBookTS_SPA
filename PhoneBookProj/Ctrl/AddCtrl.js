app.controller('AddCtrl', function ($scope, dbService, $location, otherService) {
    //Data models
    $scope.Phone = "";
    $scope.Name = "";
    $scope.block = true;
    //Data models
    //Function creates the new Contact in DB (Hashtable collection)
    //Redirects to Home page
    $scope.Add = function () {
        dbService.AddNew(new Contact($scope.Name, $scope.Phone));
        $location.path("Home");
    };
    //Function is called when user edits Contact info
    //Function checks if info is valid and gives '$scope.block' a new boolean value
    //Function's responsibility is to let the user create Contact if it meets the requirements
    $scope.IsValid = function () {
        if (Contact.IsValid(new Contact($scope.Name, $scope.Phone)))
            $scope.block = false;
        else
            $scope.block = true;
    };
});
//# sourceMappingURL=AddCtrl.js.map