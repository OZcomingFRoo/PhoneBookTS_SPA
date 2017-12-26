
var app = angular.module("app", ["ngRoute"]); 
// Ng module Variable 


var myDB: HashTable<Contact> = new HashTable<Contact>();
myDB.Add(new Contact("Cody", "0546955424"));
myDB.Add(new Contact("Guy" , "0546977595")); 
myDB.Add(new Contact("Emma", "0523456541")); 
//Lets consider this as the database from some server