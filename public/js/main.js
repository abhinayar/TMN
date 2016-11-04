/* Trinity Mobile Networks JS */
/* Designed and developed by Abhi Nayar @ SemiErect Inc. Copyright Trinity Mobile Netwroks 2016 */
/* All code is property of Trinity Mobile Networks and may not be used or copied without permission of company */
/* Any unauthorized use is subject to legal action */

$(document).ready(function(){
    function changeNavBG() {
        var top = $(window).scrollTop();
        var solution_top = $("#our-solutions").scrollTop();
        var product_top = $("#our-products").offset().top;
        var about_top = $("#about-us").offset().top;
        var contact_top = $("#contact-us").offset().top;
        var footer_top = $("#footer").offset().top;
        console.log(solution_top, product_top, about_top, contact_top, footer_top);
        console.log("top" + top); 
        
        if (top < solution_top) {
            $(".navigation").removeClass("dark").addClass("light");
        }
        
        else if (top > solution_top && top < product_top) {
            $(".navigation").removeClass("light").addClass("dark");
        }
        
        else if (top > product_top && top < about_top) {
            $(".navigation").removeClass("dark").addClass("light");
        }
        
        else if (top > about_top && top < contact_top) {
            $(".navigation").removeClass("light").addClass("dark");
        }
        
        else if (top > contact_top && top < footer_top) {
            $(".navigation").removeClass("dark").addClass("light");
        }
        
        else if (top > footer_top) {
            $(".navigation").removeClass("dark").addClass("light");
        }
        
        else {
            //nothing
        }
    }
    changeNavBG();
    
    $(window).scroll(function(){
       changeNavBG(); 
    });
    
    $(".navbar-toggle").click(function(){
        var top = $(window).scrollTop();
        if (top == 0) {
            $(".navigation").addClass("dark");   
        }
    });
});