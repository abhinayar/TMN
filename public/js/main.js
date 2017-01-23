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
			$(".nav-list .nav-item").removeClass("mobile");
		} else {
			$(".nav-list").hide();
			$(".mobile-nav-wrapper").removeClass("active");
			$(".nav-list .nav-item").addClass("mobile");
		}
	});	
	$(".nav-list .nav-item.mobile a").on("click",function(){
		console.log("aa");
		alert("ddd");	
		if($(".mobile-nav-wrapper").hasClass("active")) {
			$('.nav-list').slideToggle("150");
			$(".mobile-nav-wrapper").removeClass("active");
		} else {
			return false;
		}
	});
	
	/* BS Carousel */
	$('#header-carousel').carousel({
		interval: 10000,
		pause: "hover"
	});
	
	/* Rellax */
	//var rellax = new Rellax('.par');
	
	/* Fade Carousel Content On Scroll */
	function fadeHeader() {
		var curr_scroll = $(window).scrollTop();
		if (curr_scroll > 20) {
			$("#header-carousel .item .container").css("opacity", 1 - (curr_scroll/100 * 0.4));
			$(".subpage .subpage-title").css("opacity", 1 - (curr_scroll/100 * 0.));
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
		$('a[href*="#"]:not([href="#"]):not([href="#header-carousel"])').click(function() {
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
	
	$(".solution-content, .subpage-prod-content").click(function(){
		var tget = $(this).attr("data-target");
		if (tget === "Consumers") {
			window.location.href= "http://www.jumpnet.com";
		} else {
			var subFolder = "";
			
			if ($(this).hasClass("solution-content")) {
				subFolder = "Solutions/"
			} else if ($(this).hasClass("tech")) {
				subFolder = "/Technology";
				tget = "";
			} else {
				subFolder = "Products/"
			}
			
			var curr_url = window.location.href.toString();
			var new_url = curr_url.substring(0, curr_url.indexOf("MN/") + 3) + subFolder + tget + ".html";
			console.log(new_url);
			window.location.href = new_url;
		}
	});
});	