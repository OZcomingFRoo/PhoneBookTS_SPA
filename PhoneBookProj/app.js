var app = angular.module("app", ["ngRoute"]);
// Ng module Variable 
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Home", {
        templateUrl: "Views/Home.html",
        controller: "HomeCtrl"
    }) //Home Page
        .when("/Edit/:index", {
        templateUrl: "Views/Edit.html",
        controller: "EditCtrl"
    }) //Edit Contact Page
        .when("/AddNewPerson", {
        templateUrl: "Views/AddContact.html",
        controller: "AddCtrl"
    }) //Add new Contact Page
        .when("/About", {
        templateUrl: "Views/About.html"
    }) //  'About'\info Page
        .otherwise({
        templateUrl: "Views/Home.html",
        controller: "HomeCtrl"
    }); //If you url given is not found , go to Home page
    $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map