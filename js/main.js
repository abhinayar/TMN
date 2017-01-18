$(document).ready(function(){
	/* Shorten Nav Function */
	function shortenNav() {
		if ($(window).scrollTop() > 23) {
			$("nav").removeClass("full");
		} else {
			$("nav").addClass("full");
		}
	} $(window).scroll(function(){
		shortenNav();
	});
	
	/* Show/Hide Mobile Nav */
	$(function(){
		$(".nav-list").hide();
		$(".mobile-nav-wrapper").click(function() {
			$('.nav-list').slideToggle("150");
			$(".mobile-nav-wrapper").toggleClass("active");
		});
	});
	$(window).on('load resize', function(){
		if ($(window).width() >= 768) {
			$(".nav-list").show();
		} else {
			$(".nav-list").hide();
		}
	})
	
	/* BS Carousel */
	$('#header-carousel').carousel({
		interval: 5000,
		pause: "hover"
	});
	
	/* Rellax */
	//var rellax = new Rellax('.par');
	
	/* Fade Carousel Content On Scroll */
	function fadeHeader() {
		var curr_scroll = $(window).scrollTop();
		if (curr_scroll > 20) {
			$("#header-carousel .item .container").css("opacity", 1 - (curr_scroll/100 * 0.4));
			$(".subpage .subpage-title").css("opacity", 1 - (curr_scroll/100 * 0.7));
		} else {
			$("#header-carousel .item .container").css("opacity", 1);
			$(".subpage .subpage-title").css("opacity", 1);
		}
	}
	fadeHeader();
	$(window).scroll(function(){
		fadeHeader();
	});
	
	/* Smooth Scroll */
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top - 80
			}, 600);
			return false;
		  }
		}
	  });
	});

});
