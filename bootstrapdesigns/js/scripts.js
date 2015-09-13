$(document).ready(function() {

	//For stoping automatic carousel movements      
	$('.carousel').carousel('pause');
	$(".back").click(function(){
		$(".carousel").carousel("prev");
	});
	$(".next").click(function(){
		$(".carousel").carousel("next");
	});
	$(".vistak-header").css({"height": (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight)+"px"});
});