app.controller('HomeCtrl', function ($scope, dbService) {
    //$scope.ContactArr = new HashTable<Contact>();
    $scope.ContactArr = dbService.GetList();
    $scope.SearchParameter = "";
    $scope.Remove = function (index) {
        dbService.DeleteContact(index);
    };
});
//# sourceMappingURL=HomeCtrl.js.map