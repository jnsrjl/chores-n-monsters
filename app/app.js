/*
 * Copyright (c) 2015-2016 University of Tampere
 * Speech-based and Pervasive Interaction Group
 * Tampere Unit for Human-Computer Interaction (TAUCHI)
 * School of Information Sciences
 */

'use strict';

//Angular application for a generic audio streaming app
var app = angular.module('CareerGameApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'angularModalService']);

app.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //Routing for different views
    $routeProvider

    //To add a new view: add the path, controller and template to this file.
    //Then add the view to the views.js file and language strings in the language.js file

        //Main screen
        .when('/', {
            controller: 'MainCtrl', //The controller for the view
            templateUrl: 'app/components/main/main.tmpl.html' // Contains an html template file of the view about to be loaded
        })
        
        //Chores View
        .when('/chores', {
            controller: 'ChoresCtrl', //The controller for the view
            templateUrl: 'app/components/chores/chores.tmpl.html' // Contains an html template file of the view about to be loaded
        })

        //Monster View
        .when('/monster', {
            controller: 'MonsterCtrl', //The controller for the view
            templateUrl: 'app/components/monster/monster.tmpl.html' // Contains an html template file of the view about to be loaded
        })

        .when('/chores/:param', {
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

//TODO change from camelCase
app.constant('items_names', {

    doctor: [
        {creativity: 'Creativity boost'},
        {ingredients: 'Cool ingredients'},
        {pot: 'Magic pot'},
        {knives: 'Awesome knive set'},
        {spices: 'Special spices'},
        {whisk: 'Professional whisks'}
    ],

    chef: [
        {ambulance: 'Speedy ambulance'},
        {everydayTools: 'Everyday tools'},
        {heartTools: 'Heart tool set'},
        {medicine: 'Miracle medicines'},
        {microscope: 'Microscope'},
        {xray: 'Super X-ray machine'}
    ],

    fireman: [
        {ambulance: 'Speedy ambulance'},
        {everydayTools: 'Everyday tools'},
        {heartTools: 'Heart tool set'},
        {medicine: 'Miracle medicines'},
        {microscope: 'Microscope'},
        {xray: 'Super X-ray machine'}
    ]
    
});

app.constant('items_prices', {

    doctor: [
        {creativity: 3},
        {ingredients: 10},
        {pot: 5},
        {knives: 8},
        {spices: 6},
        {whisk: 10}
    ],

    chef: [
        {ambulance: 10},
        {everydayTools: 3},
        {heartTools: 8},
        {medicine: 4},
        {microscope: 8},
        {xray: 10}
    ]

});

app.constant('items', {
    chef: [
        {name: 'creativity', screenName: 'Creativity boost', price: 3},
        {name: 'ingredients', screenName: 'Cool ingredients', price: 10},
        {name: 'pot', screenName: 'Luxurious pot', price: 5},
        {name: 'knives', screenName: 'Awesome knive set', price: 8},
        {name: 'spices', screenName: 'Special spices', price: 6},
        {name: 'whisk', screenName: 'Professional gear', price: 10}
    ],

    doctor: [
        {name: 'ambulance', screenName: 'Fast ambulance', price: 10},
        {name: 'everydayTools', screenName: 'Doctor essentials', price: 3},
        {name: 'heartTools', screenName: 'Heart tools', price: 8},
        {name: 'medicine', screenName: 'Magic medicines', price: 4},
        {name: 'microscope', screenName: 'Microscope', price: 8},
        {name: 'xray', screenName: 'X-ray machine', price: 10}
    ],

    fireman: [
        {name: 'ambulance', screenName: 'Fast ambulance', price: 10},
        {name: 'everydayTools', screenName: 'Doctor essentials', price: 3},
        {name: 'heartTools', screenName: 'Heart tools', price: 8},
        {name: 'medicine', screenName: 'Magic medicines', price: 4},
        {name: 'microscope', screenName: 'Microscope', price: 8},
        {name: 'xray', screenName: 'X-ray machine', price: 10}
    ]
});

app.constant('careerLevels', {
    chef: {
        1: 'Dishboy',
        2: 'Assistant cutter'
    },

    doctor: {
        1: 'Medical Student',
        2: 'Paramedic',
        3: 'Nurse'
    },

    fireman : {
        1: 'Trainee'
    }
});

app.constant('monsters', {
    chef: {
        1: {
            monsterName: 'Cake Monster',
            introText: "I'm the Cake Moster!",
            itemText: 'Ha! You need the whisk to beat me.',
            item: 'whisk'
        }
    },

    doctor: {
        1: {
            monsterName: 'Flu Monster',
            introText: 'Coff coff I am the Flu Monster',
            itemText: 'You must have the right medicines to fight me',
            item: 'medicine'
        },

        2: {
            monsterName: 'Flu Monster',
            introText: 'Coff coff I am the Flu Monster',
            itemText: 'You must have the right medicines to fight me',
            item: 'medicine'
        }

    }
    
    
});







