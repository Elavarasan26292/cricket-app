"use strict";
require("./node_modules/angular/angular");
require("./node_modules/angular-route/angular-route");
var app = angular.module("myapp", ["ngRoute"]);
var homectrl = require("./controllers/homectrl");
var loginctrl = require("./controllers/loginctrl");
var playerlist = require("./controllers/playerlist");
var addplayer = require("./controllers/addplayer");
var vieweditplayer = require("./controllers/vieweditplayer");
app.controller("homectrl", homectrl);
app.controller("loginctrl", loginctrl);
app.controller("playerlist", playerlist);
app.controller("addplayer", addplayer);
app.controller("vieweditplayer", vieweditplayer);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/title.html",
    })
    .when("/login", {
        templateUrl : "./views/login.html",
        controller: loginctrl.loginctrls
    })
    .when("/list", {
        templateUrl : "./views/playerlist.html",
        controller: playerlist.playerlistctrl
    })
    .when("/addplayer", {
        templateUrl : "./views/addeditplayer.html",
        controller: addplayer.addctrl
    })
    .when("/viewplayer/:id", {
        templateUrl : "./views/addeditplayer.html",
        controller: vieweditplayer.veweditctrlctrl
    })
      $locationProvider.hashPrefix("");
});
