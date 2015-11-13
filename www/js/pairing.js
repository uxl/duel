/* global console, jQuery, $, TrackGA */
// Quiz logic - question types and scoring
// Mullen - Wilkinson 2015

//todo:
// share http://share.humankinda.com/1.html, 2.html, 3.html  - > 10.html
// api: score


    //vars
    var gameID = null,
        currentPlayer = null,
        player1score, 
        player2score,        
        player1name, 
        player2name

         function makeID(callback) {
            console.log('makeID');
            var ID = Math.floor(Math.random() * 9999);
            checkIfGame(ID);
            
        };
        function setPlayer1f(name){
            player1name = name;
            currentPlayer = name;
        };

         function setPlayer2(name){
            player2name = name;
            currentPlayer = name;
        };
        function checkIfGame(ID) {
            console.log('checkIfGame');

                url: "https://dweet.io/get/dweets/for/" + ID + ".json",
             
                // The name of the callback parameter, as specified by the YQL service
                jsonp: "callback",
             
                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                method: 'GET',
             
                // Tell YQL what we want and that we want JSON
                data: {content:content},
             
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
        };
        function buildGame(ID) {
            console.log('buildGame');
            if (!ID) {
                makeID();
                return;
            };
            console.log('buildGame: ' + ID)
            gameID = ID;
            updateThing({startedGame:true});

        };
        function getGameID(){
            return gameID;
        };
        function getGame(myID) {

           $.ajax({
                url: "https://dweet.io/get/latest/dweet/for/" + myID + ".json",
             
                // The name of the callback parameter, as specified by the YQL service
                jsonp: "callback",
             
                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                method: 'GET',
             
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
        };
        function startGame() {
            //getscore
            fight(function(score){
                updateThing({score:score, player: currentPlayer});
            });
        };
        function updateThing(content){
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
        };