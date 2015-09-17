var getRandomNumber = function(a,b) {
	if(b === undefined){ b = a; a = 0; }
	r = Math.floor((Math.random() * b) + 1) + a;
	return r;
}

var setElementObjects = function(objLeft,objRight) {
	for(var key in objRight) {
	    objLeft[key] = objRight[key];
	}
}
x=0;
var timee = {
	startime : 0,
	percenttime : 0,
	previoustime : 0,
	actualtime : function() {
		return Date.now();
	},
	currenttime : function() {
		return this.actualtime()-this.startime;
	},
	spendtime : function(differenceValue,totalDuration,calledfunction,calledfunctioncomplete) {
		if(calledfunction === undefined){ calledfunction = totalDuration; totalDuration = differenceValue; }
		if(totalDuration === undefined){ totalDuration = differenceValue; differenceValue = 0; }

		
		if (!this.startime){
			this.startime = this.actualtime();
		}

		var timer = setInterval(function(){
			timee.percenttime = timee.currenttime()/(totalDuration*1000);
			if(timee.currenttime() > (totalDuration*1000)){
				calledfunctioncomplete();
				clearInterval(timer);
				timee.startime = 0;timee.percenttime = 0;
			}
			else{
				calledfunction();
			}
		},1);
	}
}
/*var a = function () {
	console.log(timee.percenttime);
}
timee.spendtime(0,5,a);
console.log(timee.startime);
console.log(timee.actualtime());*/
/*
console.log(getRandomNumber(100));
console.log(getRandomNumber(700,2000));
*/
var celestialBody = {
	star:{
		style:{
			background:"white",
			height: "5px",
			width: "5px",
			borderRadius:"10px",
			position:"absolute"
		}
	},
	planet:{
		style:{
			background:"yellow",
			height:"200px",
			width:"200px",
			borderRadius:"0px",
			position:"absolute",
			backgroundSize: "cover"
		}
	}
};

noOfStarsInitial = 100;
noOfStarsFinal = 200;

var putCelestialBodyInSpace = function(param) {

	/** Generating Space **/
	var celestialSpace = document.querySelector(".celestialbodies");

	/** Space Attributes*/
	celestialSpaceStyle = celestialSpace.style;
	celestialSpaceStyle.height = screen.availHeight+"px";
	celestialSpaceStyle.width = screen.availWidth+"px";

	noOfStars = getRandomNumber(noOfStarsInitial,noOfStarsFinal);	
	var celestialElement = [];

	for (var i = 0; i < noOfStars; i++) {
		/** Space Components **/
		celestialElement[i] = document.createElement("div");

		/** Component Attributes*/
		if(i%30!=0)
			setElementObjects(celestialElement[i].style,celestialBody.star.style);
		else{
			celestialBody.planet.style.background = "rgb("+getRandomNumber(0,255)+","+getRandomNumber(0,255)+","+getRandomNumber(0,255)+")";
			celestialBody.planet.style.background = "url(images/overlay.png), url(images/planet_00"+getRandomNumber(0,4)+".png)";
			size = getRandomNumber(200,400);
			celestialBody.planet.style.height = size+"px";
			celestialBody.planet.style.width = size+"px";
			console.log(parseInt(celestialBody.planet.style.height));
			setElementObjects(celestialElement[i].style,celestialBody.planet.style);
		}

		celestialElement[i].spaceTranslateX = getRandomNumber(0,screen.availWidth);
		celestialElement[i].spaceTranslateY = getRandomNumber(0,screen.availHeight);
		celestialElement[i].spaceScale = 0.1;
		celestialElement[i].style.transform = "translate("+celestialElement[i].spaceTranslateX+"px"+","+celestialElement[i].spaceTranslateY+"px"+")  scale("+celestialElement[i].spaceScale+")";
		celestialSpace.appendChild(celestialElement[i]);
	}

	celestialSpaceAnimateChildrenIndices = [];
	var spaceRandomElementSelection = function () {
		x=0;
		for (var i = 0; i < celestialSpace.children.length; i++) {
			if(true){//(getRandomNumber(0,50)%2==0)){
				celestialSpaceAnimateChildrenIndices[x] = i;
				x++;
			}
		}
	}
	var	midPointX = screen.availWidth/2;
	var spaceTranslateX = 0,spaceScale=0;
	var spaceAnimate = function () {
		for (var i = 0; i < celestialSpaceAnimateChildrenIndices.length; i++) {
			randomIndic = celestialSpaceAnimateChildrenIndices[i];
			spaceTranslateX = celestialSpace.children[randomIndic].spaceTranslateX;
			size = parseInt(celestialSpace.children[randomIndic].style.height);
			if(spaceTranslateX <= midPointX){
				spaceTranslateX = spaceTranslateX - timee.percenttime*((midPointX-spaceTranslateX)*0.1)-(size/150);
				spaceScale = (celestialSpace.children[randomIndic].spaceScale+0.5)*((midPointX-spaceTranslateX)/midPointX);
			}
			else{
				spaceTranslateX = spaceTranslateX + timee.percenttime*((spaceTranslateX-midPointX)*0.1);
				spaceScale = (celestialSpace.children[randomIndic].spaceScale+0.5)*((spaceTranslateX-midPointX)/spaceTranslateX);
			}
			if(size >= 200 && spaceTranslateX <= midPointX)
				spaceTranslateX -= 200*timee.percenttime;
			else if(size >= 200 && spaceTranslateX > midPointX)
				spaceTranslateX += 200*timee.percenttime;

			spaceScale = spaceScale * timee.percenttime;
			celestialSpace.children[randomIndic].style.transform = "translate("+spaceTranslateX+"px"+","+celestialSpace.children[randomIndic].spaceTranslateY+"px"+")  scale("+spaceScale+")";
		}
	}
	var spaceAnimateFinish = function () {
		while(celestialSpace.children.length>50){
			celestialSpace.children[celestialSpace.children.length-1].remove();
		}
		setTimeout(function(){	putCelestialBodyInSpace();	},1);
	}
	spaceRandomElementSelection();
	timee.spendtime(0,8,spaceAnimate,spaceAnimateFinish);
    /*var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);*/
}
putCelestialBodyInSpace();