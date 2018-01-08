app.controller('HomeCtrl', function ($scope, dbService) {
    //Data Models
    $scope.ContactArr = dbService.GetList(); //
    $scope.SearchParameter = "";
    //Data Models

    //Function is called when use presses "Remove" button on
    //one of the contacts
    $scope.Remove = function (index: number)
    {
        dbService.DeleteContact(index);
    }
});

