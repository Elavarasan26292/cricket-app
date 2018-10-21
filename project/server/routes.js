"use strict";
const ctrl = require('./controllers/authentication.js');
const playerctrl = require('./controllers/playerprofile.js');
module.exports = function(app) {
    app.post('/newuser', ctrl.userRegister); //Create a newUser
    app.post('/login', ctrl.userLogin); //Verify the login

    app.get('/playerlist', playerctrl.getplayerlist); //Get all players
    app.post('/newplayer', playerctrl.createplayer); //Create new player
    app.get('/getplayer/:id', playerctrl.getplayer); //Get player data
    app.post('/updtplayer', playerctrl.updateplayer); //update player datas
    app.post('/deleteplayer/:id', playerctrl.deleteplayer); //Delete player data
};
