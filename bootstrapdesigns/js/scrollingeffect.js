
var crawlnumber = 1;
var	crawl = document.querySelectorAll('.crawl');

document.querySelector('#back').onclick = function(event) {
	window.scrollTo(0, (crawl[crawlnumber].offsetParent.offsetTop+crawl[crawlnumber].offsetTop));
}
document.querySelector('#next').onclick = function(event) {
	window.scrollTo(0, (crawl[crawlnumber].offsetParent.offsetTop+crawl[crawlnumber].offsetTop));
}

window.onscroll = function (event) {
	for (var i = 0; i < crawl.length; i++) {
		if(window.scrollY > (crawl[i].offsetParent.offsetTop+crawl[i].offsetTop))
		{
			crawlnumber = i+2;
			if(crawlnumber > (crawl.length-1))
				crawlnumber = 0;
			console.log(crawlnumber);
		}
	}
}