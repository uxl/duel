/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    
    
    function countdown3(){
         
      $("#countdown3").hide();
      $("#countdown2").show();
      setTimeout(countdown2, 1000);
        
    }


    function countdown2(){
         
      $("#countdown2").hide();
      $("#countdown1").show();
      setTimeout(countdown1, 1000);
    }


    function countdown1(){
         
      $("#countdown1").hide();
        $("#go").show();
        //call fight function
        fight(function(score){ 
            console.log("Score:", score);
        
        $("#go").hide();
            $("#page1").show();
            
            
            //score dweets
        });

        
    }

function vectorLength(x, y, z) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}

var score = 0;
var watchID = null;
var stopID = null;
function fight(callback) {
    watchID = navigator.accelerometer.watchAcceleration(
        function accel(acceleration) 
        {
            var reading = vectorLength(acceleration.x, acceleration.y, acceleration.z);
            score += reading;
            if(reading > 20 && !stopID) {
                console.log("FIGHT STARTS NOW!!!!");
                score = 0;
                stopID = setTimeout(function() {
                    console.log("Timeout called", score);
                    navigator.accelerometer.clearWatch(watchID);
                    navigator.vibrate(2000);
                    callback(score.toFixed());
                }, 10000);
            }
        },
        function(data) { 
            console.log("FAIL!" + data);
        },
        {frequency: 50, adjustForRotation: true });
}
 function register_event_handlers()
 {
    
  $('#fight').on('click', function () {
    var $btn = $(this).hide();
      $("#page1").hide();
      $("#page2").show();
  })
    
  $('#join').on('click', function () {
    var $btn = $(this).hide();
      $("#page1").hide();
      $("#page3").show();
  })
    
  $('#player1continue').on('click', function () {
    var $btn = $(this).hide();
      $("#page2").hide();
      $("#pageplayer1").show();
  })
    
  $('#player2continue').on('click', function () {
    var $btn = $(this).hide();
      $("#page3").hide();
      $("#pageplayer2").show();
  })
  $('#readytofight').on('click', function () {
    var $btn = $(this).hide();
      $("#pageplayer1").hide();
      $("#countdown3").show();
      setTimeout(countdown3, 1000);
  })
   
    
     /* button  FIGHT */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#code"); 
    });
    
        /* button  JOIN */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#code_enter"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
