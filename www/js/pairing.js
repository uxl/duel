'use strict';

var GUTS = (function($) {
    //vars
    var gameID = null,
        currentPlayer = null,
        player1score,
        player2score,
        player1name,
        player2name,
        makeID = function(callback) {
            console.log('makeID');
            var ID = Math.floor(Math.random() * 9999);
            checkIfGame(ID);

        },
        setPlayer1 = function(name) {
            player1name = name;
            currentPlayer = name;
        },
        setPlayer2 = function(name) {
            player2name = name;
            currentPlayer = name;
        },
        checkIfGame = function(ID) {
            console.log('checkIfGame');


            $.ajax({

                url: "https://dweet.io/get/dweets/for/" + ID + ".json",

                // The name of the callback parameter, as specified by the YQL service
                jsonp: "callback",

                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                method: 'GET',

                // Work with the response
                success: function(response) {
                    if (response.with == 404) {
                        //show the button to move to 
                        buildGame(ID);
                    } else {
                        buildGame();
                    }
                },
                fail: function(errorThrown) {
                    console.log("error: " + error)
                }
            });
        },
        buildGame = function(ID) {
            console.log('buildGame');
            if (!ID) {
                makeID();
                return;
            };
            console.log('buildGame: ' + ID)
            gameID = ID;
            createThing({
                startedGame: true
            });

        },
        getGame = function(myID) {

            $.ajax({
                url: "https://dweet.io/get/latest/dweet/for/" + myID + ".json",

                // The name of the callback parameter, as specified by the YQL service
                jsonp: "callback",

                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                method: 'GET',

                // Work with the response
                success: function(response) {
                    console.log(response); // server response
                    $('body').append("return: " + JSON.stringify(response));
                },
                fail: function(errorThrown) {
                    console.log("error: " + error);
                }
            });
        },
        startGame = function() {
            //getscore
            fight(function(score) {
                createThing({
                    score: score,
                    player: currentPlayer
                });
            });
        },
        createThing = function(ID) {
            console.log('creatThing');
            $.ajax({
                url: "https://dweet.io/dweet/for/" + ID + ".json",

                // The name of the callback parameter, as specified by the YQL service
                jsonp: "callback",

                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                method: 'POST',

                // Work with the response
                success: function(response) {
                    console.log(response); // server response
                    $('body').append("return: " + JSON.stringify(response));
                },
                fail: function(errorThrown) {
                    console.log("error: " + error);
                }
            });
        };
            //fight with callback send string
    return {
        buildGame: buildGame,
        getGame: getGame
    };
}(jQuery));