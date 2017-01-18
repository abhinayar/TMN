/* 
Trinity Mobile Networks Javascript File
Author: Abhi Nayar for SemiErect
Copyright 2017, All Rights Reserved
Please contact author for use permissions.
anayar2[at]gmail[dot]com
*/

/* 
Dependencies:
jQuery (CDN loaded)
*/

$(document).ready(function(){

	function scrollBody() {
		var currScroll = $(window).scrollTop();
		if (currScroll > 10 && currScroll < 360) {
			//$(".page-body-wrapper").css("top", 615 - currScroll);
			$("#header-carousel .item .container").css("opacity", 1 - (currScroll * 0.003));
			//$(".body-wrapper").removeClass("top");
		} else if (currScroll < 10) {
			//$(".page-body-wrapper").css("top", 615);
			$("#header-carousel .item .container").css("opacity", 1);
		} else {
			//$(".body-wrapper").addClass("top");
		}
	}
	scrollBody();

	$(window).scroll(function(){
		scrollBody();
	});

	
	$(".product").click(function(){
		$(".product").removeClass("active");
		$(this).addClass("active");
		
		$(".product-sections .section").fadeOut("fast");
		$(".product-sections .section." + $(this).attr("data-target")).removeClass("hidden").fadeIn("slow");
	});
	
	/* Mobile Navigation */
	$(".mob-nav-open").click(function() {
		$(".nav-right-wrapper").addClass("open");
		$(".mobile-hamburger i").addClass("hidden");
		$(".mob-nav-close").removeClass("hidden");
	});
	
	$(".mob-nav-close").click(function(){
		$(".nav-right-wrapper").removeClass("open");
		$(".mobile-hamburger i").addClass("hidden");
		$(".mob-nav-open").removeClass("hidden");
	});
	
	$('.carousel').carousel({
	  interval: 2000
	})
	
	/* Nav Dropdown */
	$(".dropdown").hover(function(){
		$(this).prev("a").addClass("active");
	}, function(){
		$(this).prev("a").removeClass("active");
	});
	
	/*
	function productIconFloat() {
		var prodIconTop = $(".product-icon-list").offset().top;
		var platformSectionBottom = $(".platform").offset().bottom;
		var currScroll = $(window).scrollTop() + 80;
		var bottomScroll = $("#our-partners").offset().top - $(".product-icon-list").height();
		var endScroll = $(".product-sections").offset().top;
		
		
		if (currScroll >= prodIconTop && currScroll < bottomScroll) {
			$(".product-icon-list").addClass("fixed");
		} else if (currScroll >= prodIconTop) {
			$(".product-icon-list").removeClass("fixed").addClass("bottom");
		} else if (currScroll < endScroll) {
			$(".product-icon-list").removeClass("fixed").removeClass("bottom");
		}
	}
	$(window).scroll(function(){
		productIconFloat();
	});
	*/
	
	/* Module Expansion */
	$(function(){
		$(".module-expand").click(function(){
			var target = $(this).attr("data-target");
			
			$(".modules ." + target + " .module-content-row").removeClass("hide").addClass("shown");		
		});
		$(".module-close").click(function(){
			var target = $(this).attr("data-target");
			
			$(".modules ." + target + " .module-content-row").removeClass("shown").addClass("hide");
		});
	});
});