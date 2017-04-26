	$(document).ready(function() {

	    $('.toggle-nav').click(function(e) {
	        $(this).toggleClass('active');
	        $('.navbar-menu ul').toggleClass('active');

	        e.preventDefault();
	    });

	    // $('a[href^="#"]').click(function(e) {
	    //     var target = $(this.getAttribute('href'));
	    //     if (target.length) {
	    //         e.preventDefault();
	    //         $('html, body').stop().animate({
	    //             scrollTop: target.offset().top
	    //         }, 1000);
	    //     }
	    // });

	     $('a[href*=#]:not([href=#])').click(function() {
	            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	                var target = $(this.hash);
	                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	                if (target.length) {
	                    $('html,body').animate({
	                        scrollTop: target.offset().top
	                    }, 1000);
	                    return false;
	                }
	            }
	        });
	    	
	});
