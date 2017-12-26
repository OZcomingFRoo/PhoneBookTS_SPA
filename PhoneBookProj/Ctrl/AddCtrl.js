app.controller('AddCtrl', function ($scope, dbService) {
    $scope.Phone = "";
    $scope.Name = "";
    $scope.block = true;
    $scope.Add = function () {
        console.log("STOP !!");
        dbService.AddNew(new Contact($scope.Name, $scope.Phone));
        document.getElementById("ToHome").click();
    };
    $scope.IsValid = function () {
        if (Contact.IsValid(new Contact($scope.Name, $scope.Phone)))
            $scope.block = false;
        else
            $scope.block = true;
    };
});
//# sourceMappingURL=AddCtrl.js.map