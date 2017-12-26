app.controller('EditCtrl', function ($scope, dbService, $routeParams) {
    alert("loop?");
    $scope.person = dbService.GetContact(<number>$routeParams.index);

    $scope.Phone = (<Cell<Contact>>$scope.person).Value.Phone;
    $scope.Name = (<Cell<Contact>>$scope.person).Value.Name;
    $scope.block = !(Contact.IsValid(new Contact($scope.Name, $scope.Phone)));
    $scope.Save = function () {
        console.log("STOP !!");
        dbService.SaveChanges(<number>$routeParams.index,
            new Contact($scope.Name, $scope.Phone));
        document.getElementById("ToHome").click();
    }
    $scope.IsValid = function () {
        if (Contact.IsValid(new Contact($scope.Name, $scope.Phone)))
            $scope.block = false;
        else
            $scope.block = true;     }

});

