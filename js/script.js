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
	});
