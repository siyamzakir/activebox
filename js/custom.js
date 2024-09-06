

//Sticky.js Activate    
   $(document).ready(function(){
        $(".header-top").sticky({topSpacing:0});
    });
//End Sticky.js Activate 




//Smooth Scroll   
    $('li.smooth-menu a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -55
            }, 1200, 'easeOutSine');
            return false;
            }
        }
    });
    
//End Smooth Scroll



 //Navbar Toggle JS 
    $(".navbar-toggle").click(function(){
        $("body").addClass("mobile-menu-activated");
    });
    //End Navbar Toggle JS
    
    //Navbar Toggle remove in class for non-sticky menu for mobile view JS 
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass("in");
    });
    //Navbar Toggle out in class for nosticky menu for mobile view JS 
    
     //Toggle Animation Click Remove Class JS 
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-toggle").addClass("navbar-toggle collapsed");
    });
    //Navbar Toggle out in class for nosticky menu for mobile view JS 





// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});