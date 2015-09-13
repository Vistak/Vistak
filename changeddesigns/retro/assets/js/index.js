$(document).ready(function(){
	var slideStatus = true;
    // $("#banner").css({"background-position-y":"-100px"});
    // console.log(document.querySelector('#banner').parentNode.children);
    // console.log($("#banner").innerWidth());
    /*$("#banner").mousemove(function(event) {
    	// console.log(event.offsetX);
    	// console.log(this.clientWidth);
    	if(event.offsetX < (this.clientWidth*0.02))
    	{
    		// console.log(event.offsetX);
    		console.log(parseInt(this.clientWidth*0.02));
    		// console.log($("#banner").css("background-position"));
    	}
    	if(event.offsetX > (this.clientWidth*0.08))
    	{
    		// console.log(event.offsetX);
    		console.log(parseInt(this.clientWidth));
    	}
    });*/
    $(window).scroll(function(event) {
    	{
    		/*Banner Background movement*/
    		if (window.innerWidth >= 1366)
    			$("#banner").css({"background-position":"0px "+(window.scrollY*(0.15)-100)+"px"});
    		else
    			$("#banner").css({"background-position":"0px "+(window.scrollY*(0.15)-100)+"px"});
    	}
		if($(document).scrollTop() > 650 && slideStatus)
		{
			$("#header").css({"background":"rgb(57, 86, 163)","opacity":"0"});
			$("#header").animate({
		        marginTop: '-50px',
		    });
		    $("#header").animate({
		        marginTop: '0px',
		        opacity:'1'
		    });
			slideStatus = false;
		}
		else if($(document).scrollTop() < 650 && !slideStatus)
		{
			$("#header").css({"background":"transparent"});
			$("#header").animate({
		        marginTop: '-50px',
		    });
		    $("#header").animate({
		        marginTop: '0px',
		        opacity:'1'
		    });
			slideStatus = true;
		}
	})
});