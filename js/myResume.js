var bodyWidth = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
var bodyHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
var myPictureLeftSpace = "";

var myResumeGetElementStyle = function(elementName)
{
	return document.getElementById(elementName).style;
}
var myResumeGetElement = function(elementName)
{
	return document.getElementById(elementName);
}

//mi-design
miDesignElement = myResumeGetElement("mi-design");
miDesignStyle=myResumeGetElementStyle("mi-design");

//col-left
colLeftStyle=myResumeGetElementStyle("col-left");

//col-right
colrightStyle=myResumeGetElementStyle("col-right");


//myHeader
myHeaderStyle = myResumeGetElementStyle("myHeader");

//myPicture
myPictureStyle = myResumeGetElementStyle("myPicture");

//myIntroduction
myIntroductionStyle = myResumeGetElementStyle("myIntroduction");

//myInformation
myInformationStyle = myResumeGetElementStyle("myInformation");

//Resume Contents
resumeContents = myResumeGetElement("myResumeContent");


var myResume = function() {
	

	colLeftStyle.width = "10%";
	miDesignStyle.width = "80%";
	myHeaderStyle.width = Math.ceil(miDesignElement.getBoundingClientRect().width)+"px";
	colrightStyle.width = "10%";

	miDesignElement_width = Math.ceil(miDesignElement.getBoundingClientRect().width);
	myPictureStyle.marginLeft = ((miDesignElement_width/2)-200) + "px";
	// myInformationStyle.left = ((miDesignElement_width/2)-150) + "px";
	myPictureLeftSpace = myPictureStyle.marginLeft;
}

myResume();
window.addEventListener("resize", myResume);

var shearStart = [],shearStatusNumber=0;
window.onscroll = function(event){
	

	for (var i = 0; i < resumeContents.children.length; i++) {
		shearStart[i] = parseInt(resumeContents.children[i].dataset.shearstart);
		
		y = window.scrollY + shearStart[i];
		if (y>=resumeContents.children[i].offsetTop && y <= resumeContents.children[i].offsetTop + parseInt(resumeContents.children[i].dataset.resumecontentlength))
		{
			myHeaderStyle.background = "url(images/wall.jpg) no-repeat -256px -217px";
			myHeaderStyle.backgroundSize = "147%";
			difference = parseInt(resumeContents.children[i].dataset.resumecontentlength);
			mid = difference/2;
			currentResumeContentPoint = y - resumeContents.children[i].offsetTop;

			if (currentResumeContentPoint<mid)
			{
				x = (currentResumeContentPoint/mid);
			}
			else
			{
				if(currentResumeContentPoint<mid + 50)
					crt = mid;
				else
				{
					crt = currentResumeContentPoint;
				}
				x = ((2*mid - crt)/mid);
			}
			resumeContents.children[i].style.background = "rgba(254, 170, 170, "+(x)+")";
			resumeContents.children[i].style.transform = "scaleY("+(1.0+(1.1-1.0)*x)+")";
			resumeContents.children[i].style.transform = "scaleX("+(1.0+(1.1-1.0)*x)+")";
			resumeContents.children[i].style.transform = "skewY("+(x)+")";
			resumeContents.children[i].children[0].style.fontSize = (20+(40-20)*x)+"px";
			resumeContents.children[i].children[1].style.transform = "scaleY("+(1.1+(1.1-1.0)*x)+")";
		}
		else if(y <= resumeContents.children[i].offsetTop || y >= resumeContents.children[i].offsetTop + parseInt(resumeContents.children[i].dataset.resumecontentlength))
		{
			resumeContents.children[i].style.background = "rgba(254, 170, 170, 0)";
			resumeContents.children[i].style.transform = "scaleY(1.0)";
			resumeContents.children[i].style.transform = "scaleX(1.0)";
			resumeContents.children[i].children[1].style.transform = "scaleY(1.0)";
		}
	}

	if (window.scrollY <= parseInt(myPictureLeftSpace))
	{
		myHeaderStyle.background = "rgba(255, 255, 255, 0.05)";
		myInformationStyle.opacity = ""+((parseInt(myPictureLeftSpace)-window.scrollY)/(parseInt(myPictureLeftSpace)));

		myPictureStyle.height = 400-window.scrollY + "px";
		myPictureStyle.width = 400-window.scrollY + "px";

		var pictureSizeStatus = true;
		if (parseInt(myPictureStyle.height) < 200 && parseInt(myPictureStyle.width) < 200)
		{
			myPictureStyle.height = 200 + "px";
			myPictureStyle.width = 200 + "px";
			pictureSizeStatus = false;
		}

		

		myPictureLeftAutoLeft = parseInt(myPictureLeftSpace) - window.scrollY;
		if(myPictureLeftAutoLeft > 0 && pictureSizeStatus)
			myPictureStyle.marginLeft = myPictureLeftAutoLeft + "px";
		if(window.scrollY > 150)
			myIntroductionStyle.color = "rgba(195, 219, 82, "+ ((window.scrollY-150)/50) +")";
		else
			myIntroductionStyle.color = "rgba(195, 219, 82, "+ 0 +")";
	}
	else if (window.scrollY > parseInt(myPictureLeftSpace))
	{
		myPictureStyle.height = 200 + "px";
		myPictureStyle.width = 200 + "px";
		myPictureStyle.marginLeft = (parseInt(myPictureStyle.marginLeft)==parseInt(myPictureLeftSpace)) ? ((parseInt(myPictureStyle.marginLeft)-200) + "px") : (parseInt(myPictureStyle.marginLeft) + "px");
		myIntroductionStyle.color = "rgba(195, 219, 82, "+ 1 +")";
		console.log("met");
		myInformationStyle.opacity = 0+"";
	}
}
