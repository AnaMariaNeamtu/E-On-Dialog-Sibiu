jQuery(document).ready(function(){

    jQuery(document).ready(function(){
       jQuery(".pop-up-container").css({ "display" : "block"});
    });   

    jQuery(".pop-up button").click(function() {
        jQuery(".pop-up-container").hide();
    });
        
    

    jQuery(".hamburger-icon").click(function(){
        jQuery(".mobile-menu").toggle(1000);
    });


    
    //scroll to button function
    jQuery("#btt-container").click(function(){
        jQuery("html , body").animate({scrollTop: 0}, 800);
    });

    //Make button visible after the user scrolled on page

    var mybutton = document.getElementById("btt-container");

    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.
            documentElement.scrollTop > 50) {

            document.getElementById ("btt-container").
            style.display = "block";
        }     
        else {
           
            document.getElementById ("btt-container").
            style.display = "none";
        }
            
    };
    //Scroll to top of the bottom when the bottom is clicked

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop= 0;
    };
});