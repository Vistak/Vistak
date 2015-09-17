$(document).ready(function() {
	var slideStatus = true;
	

	// Menu Bar animation Control
	var menuBarAnimationControl = function() {
		if($(document).scrollTop() > 550 && slideStatus)
		{
			$(".vistak-fixed-header").css({"background":"rgb(57, 86, 163)","opacity":"0"});
			$(".vistak-fixed-header").animate({
		        marginTop: '-50px',
		    });
		    $(".vistak-fixed-header").animate({
		        marginTop: '0px',
		        opacity:'1'
		    });
			slideStatus = false;
		}
		else if($(document).scrollTop() < 550 && !slideStatus)
		{
			$(".vistak-fixed-header").css({"background":"transparent"});
			$(".vistak-fixed-header").animate({
		        marginTop: '-50px',
		    });
		    $(".vistak-fixed-header").animate({
		        marginTop: '0px',
		        opacity:'1'
		    });
			slideStatus = true;
		}
	}

	// Vistak Header Background movement
	var vistakHeaderBackgroundMovement = function () {
		if (window.innerWidth >= 1366)
			$("body").css({"background-position":"0px "+(window.scrollY*(0.15)-100)+"px"});
		else
			$("body").css({"background-position":"0px "+(window.scrollY*(0.15)-100)+"px"});
	}

	//Setting Vistak header background
	var setVistakHeaderBackground = function() {
		height = (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight);
		$(".vistak-header").css({"height": height+"px"});
	}

	//Scroll to Respective elements
	var scrollToRespectiveElements = function() {
		$(".scrollee").click(function(event){
			event.preventDefault();
			scrollPosition = ($(this.hash).offset() !== undefined) ? $(this.hash).offset().top : 0;
	        if (scrollPosition)
	        {	
	        	$('html,body').animate({
			        scrollTop: $(this.hash).offset().top - $(".vistak-fixed-header").outerHeight()
			    }, 800,"swing");
	        }
	    });
	}

	//All Functions
    setVistakHeaderBackground();
    scrollToRespectiveElements();
	vistakHeaderBackgroundMovement();
	menuBarAnimationControl();
    $(window).scroll(function(event) {
		vistakHeaderBackgroundMovement();
		menuBarAnimationControl();
	});
});

console.log(document.defaultView)