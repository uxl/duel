/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
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
