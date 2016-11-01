$(document).ready(function() {

$('.navbar-toggle').click(function() {
    $('.navbar-collapse').slideToggle();
});


var imageHeight, textOverlayHeight, imageTop;

function centerText() {
	imageHeight = $(".showcase").height();
	textOverlayHeight = $(".text-overlay").height();
	imageTop = (imageHeight - textOverlayHeight)/2;
	$(".text-overlay").css({
		"top" : imageTop 
	}); //css
} // center text

$(".showcase img").load(function() {
	centerText();
});
	centerText();

$(".project").hover(function() {
	$(this).find("img").css({
		"opacity" : .1
	});
	$(this).find("h3").css({
		"display" : "block"
	});
}, function() {
	$(this).find("img").css({
		"opacity" : 1
	});
	$(this).find("h3").css({
		"display" : "none"
	});

});

var h3Height, portfolioImageHeight, h3Top;

function centerh3() {
	h3Height = $(".project-box h3").height();
	portfolioImageHeight = $(".project img").height();
	h3Top = (portfolioImageHeight - h3Height)/2
	$(".project h3").css({
		"top" : h3Top 
	}); //css
} //centerh3

centerh3();



$(window).resize(function () {
	centerText();
	centerh3();
	}); //resize

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a, .contact-button').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




}); //ready