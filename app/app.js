/*
 * Copyright (c) 2015-2016 University of Tampere
 * Speech-based and Pervasive Interaction Group
 * Tampere Unit for Human-Computer Interaction (TAUCHI)
 * School of Information Sciences
 */

'use strict';

//Angular application for a generic audio streaming app
var app = angular.module('CareerGameApp', ['ngRoute']);

app.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //Routing for different views
    $routeProvider

    //To add a new view: add the path, controller and template to this file.
    //Then add the view to the views.js file and language strings in the language.js file
        
        //Chores View
        .when('/chores', {
            controller: 'ChoresCtrl', //The controller for the view
            templateUrl: 'app/components/chores/chores.tmpl.html' // Contains an html template file of the view about to be loaded
        })
        
        .otherwise({
            redirectTo:'/' //If the path is unknown. Redirects to a given view. The default view is '/'
        });

}
]);

//Wrapping underscore library as constant. The underscore library provides useful, functional-programming-like and other utility functions
app.constant('_', window._);

app.constant('avatars', {

    female_doctor : 'female_doctor.png',
    male_doctor : 'male_doctor.png',

    female_firefighter : 'female_firefighter.png',
    male_firefighter : 'male_firefighter.png',

    female_chef : 'female_chef.png',
    male_chef : 'male_chef.png'
});







