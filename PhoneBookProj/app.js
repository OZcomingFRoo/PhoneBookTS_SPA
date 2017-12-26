app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Home", {
        templateUrl: "Views/Home.html",
        controller: "HomeCtrl"
    })
        .when("/Edit/:index", {
        templateUrl: "Views/Edit.html",
        controller: "EditCtrl"
    })
        .when("/AddNewPerson", {
        templateUrl: "Views/AddContact.html",
        controller: "AddCtrl"
    })
        .when("/About", {
        templateUrl: "Views/About.html"
    })
        .otherwise({
        templateUrl: "Views/Home.html",
        controller: "HomeCtrl"
    });
    $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map