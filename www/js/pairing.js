/* global console, jQuery, $, TrackGA */
// Quiz logic - question types and scoring
// Mullen - Wilkinson 2015

//todo:
// share http://share.humankinda.com/1.html, 2.html, 3.html  - > 10.html
// api: score

'use strict';

var QUIZ = (function($) {
    //vars
    var questionNumber = 8,
        completed = false,
        var init = function() {
            $.ajax({
                url: "https://dweet.io/dweet/for/" + makeId + ".json",
                method: 'GET'
            }).done(function(data) {
                    console.log(data['card_number']);
                    if (data['card_number'] == cardNo) {
                        $("#kiosk").carousel(3);
                        $('.errors').append("<p class=\"text-danger\">Your card has already been registered.</p>");
                        console.log("repeat card");
                    } else {
                        console.log("new card")
                    }
                }

            },
            var makeID = function() {
                return Math.floor(Math.random() * 9999);
            };
        }
    return {
        init: init
    };
}(jQuery));