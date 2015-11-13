/* global console, jQuery, $, TrackGA */
// Quiz logic - question types and scoring
// Mullen - Wilkinson 2015

//todo:
// share http://share.humankinda.com/1.html, 2.html, 3.html  - > 10.html
// api: score

'use strict';

var PAIRING = (function($) {
    //vars
    var questionNumber = 8,
        completed = false,
        makeID = function(callback) {
            console.log('makeID');
            var ID = Math.floor(Math.random() * 9999);
            checkIfGame(ID);
            
        },
        checkIfGame = function(ID) {
            console.log('checkIfGame');
            $.ajax({
                url: "https://dweet.io/get/dweets/for/" + ID + ".json",
                method: 'GET'
            }).done(function(data) {
                if (data.with == 404) {
                    //show the button to move to 
                    buildGame(ID);
                } else {
                    buildGame();
                }
            }).fail(function(data, textStatus, errorThrown) {
                console.log("error: " + error)
            });
        },
        buildGame = function(ID) {
            console.log('buildGame');
            if (!ID) {
                makeID();
                return;
            };
            console.log('buildGame: ' + ID)
            $.ajax({
                url: "https://dweet.io/dweet/for/" + ID + ".json",
                method: 'POST'
            }).done(function(data) {
                $('body').append("me: " + JSON.stringify(data));

            }).fail(function(data, textStatus, errorThrown) {
                console.log("error: " + error)
            });

        },
        getGame = function(myID) {
            $.ajax({
                url: "https://dweet.io/get/latest/dweet/for/" + myID + ".json",
                method: 'GET'
            }).done(function(data) {
                $('body').append("return: " + JSON.stringify(data));
            }).fail(function(data, textStatus, errorThrown) {
                console.log("error: " + error)
            });
        },
        winner = function(player1, player2) {

        }
    return {
        buildGame: buildGame,
        getGame: getGame
    };
}(jQuery));
$(function() {
    PAIRING.buildGame();
    //PAIRING.getGame(9866);
});