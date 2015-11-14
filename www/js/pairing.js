'use strict';

var PAIRING = (function($) {
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
        setPlayer1= function(name){
            player1name = name;
            currentPlayer = name;
        },
        setPlayer2 = function(name){
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
                success: function( response ) {
                     if (data.with == 404) {
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
            updateThing({startedGame:true});

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
                success: function( response ) {
                    console.log( response ); // server response
                    $('body').append("return: " + JSON.stringify(response));
                },
                fail: function(errorThrown) {
                    console.log("error: " + error);
                }
            });
        },
        startGame = function() {
            //getscore
            fight(function(score){
                updateThing({score:score, player: currentPlayer});
            });
        },
        getGameID = function(){
            return gameID;
        },
        updateThing = function(content){
            $.ajax({
                url: "https://dweet.io/get/latest/dweet/for/" + gameID + ".json",
             
                // The name of the callback parameter, as specified by the YQL service
                jsonp: "callback",
             
                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                method: 'POST',
             
                // Tell YQL what we want and that we want JSON
                data: {content:content},
             
                // Work with the response
                success: function( response ) {
                    console.log( response ); // server response
                    $('body').append("return: " + JSON.stringify(response));
                },
                fail: function(errorThrown) {
                    console.log("error: " + error);
                }
            });
            //fight with callback send string
        }
    return {
        buildGame: buildGame,
        getGame: getGame,
        updateThing: updateThing,
        getGameID: getGameID
    };
}(jQuery));