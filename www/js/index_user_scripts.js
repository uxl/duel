/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    


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
