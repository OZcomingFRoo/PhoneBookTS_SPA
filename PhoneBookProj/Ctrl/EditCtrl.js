app.controller('EditCtrl', function ($scope, dbService, $routeParams) {
    alert("loop?");
    $scope.person = dbService.GetContact($routeParams.index);
    $scope.Phone = $scope.person.Value.Phone;
    $scope.Name = $scope.person.Value.Name;
    $scope.block = !(Contact.IsValid(new Contact($scope.Name, $scope.Phone)));
    $scope.Save = function () {
        console.log("STOP !!");
        dbService.SaveChanges($routeParams.index, new Contact($scope.Name, $scope.Phone));
        document.getElementById("ToHome").click();
    };
    $scope.IsValid = function () {
        if (Contact.IsValid(new Contact($scope.Name, $scope.Phone)))
            $scope.block = false;
        else
            $scope.block = true;
    };
});
//# sourceMappingURL=EditCtrl.js.map