var vistak = function()
{
	//Get Body Element Height and width
	var bodyWidth = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var bodyHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	var vistakGetElementStyle = function(elementName)
	{
		return document.getElementById(elementName).style;
	}
	var vistakGetElement = function(elementName)
	{
		return document.getElementById(elementName);
	}

	

	//mainPart
	mainPartElement=vistakGetElement("mainPart");
	mainPartStyle=vistakGetElementStyle("mainPart");

	//Getting header, footer, left, middle, and right side Elements
	headerElement = vistakGetElement("header");
	footerElement = vistakGetElement("footer");
	leftSideElement = vistakGetElement("leftSide");
	middleSideElement = vistakGetElement("middleSide");
	rightSideElement = vistakGetElement("rightSide");


	//Getting header, footer, left, middle, and right side Elements
	headerStyle = vistakGetElementStyle("header");
	footerStyle = vistakGetElementStyle("footer");
	leftSideStyle = vistakGetElementStyle("leftSide");
	middleSideStyle = vistakGetElementStyle("middleSide");
	rightSideStyle = vistakGetElementStyle("rightSide");

	//Setting left,middle,right Width
	leftSideStyle.width = "20%";
	middleSideStyle.width = "60%";
	rightSideStyle.width = "20%";
	leftSideStyle.float = "left";
	middleSideStyle.float = "left";
	rightSideStyle.float = "left";

	

	/*var middleSideElementPolygon = document.createElementNS('http://www.w3.org/2000/svg','polygon');
	middleSideElementPolygon.setAttribute("points", "0,0 250,190 160,210");
	middleSideElement.appendChild(middleSideElementPolygon);
	middleSideElementPolygonStyle = middleSideElementPolygon.style;
	middleSideElementPolygonStyle.fill = "lime";
	middleSideElementPolygonStyle.stroke = "purple";
	middleSideElementPolygonStyle.strokeWidth = "1";
	middleSideElementPolygonStyle.zIndex = "-100";
	console.log(middleSideElementPolygonStyle);*/

	//Calculating main PartHeight
	mainPartHeight = (bodyHeight-(headerElement.clientHeight+footerElement.clientHeight));
	mainPartHeight = (mainPartHeight < 0)? 0 : mainPartHeight;
	mainPartStyle.height = leftSideStyle.height = middleSideStyle.height = rightSideStyle.height = mainPartHeight+"px";
	// mainPartStyle.backgroundColor = "rgba(59, 49, 138, 0.91)";


	//Left Side Polygon
	var leftSideElementPolygon = leftSideElement.getElementsByTagName("polygon")[0];

	leftSideElementPolygon_height = Math.ceil(leftSideElement.getBoundingClientRect().height);
	leftSideElementPolygon_width = Math.ceil(leftSideElement.getBoundingClientRect().width);


	leftSideElementPolygon.setAttribute("points", "0,0 "+(0.3*leftSideElementPolygon_width)+",0 "+leftSideElementPolygon_width+",30 "+leftSideElementPolygon_width+","+(leftSideElementPolygon_height)+" 0,"+(leftSideElementPolygon_height-40));
	leftSideElementPolygonStyle = leftSideElementPolygon.style;
	leftSideElementPolygonStyle.fill = "url(#leftSideGrad)";
	leftSideElementPolygonStyle.stroke = "blue";
	console.log(leftSideElementPolygon.style);
	console.log(leftSideElementPolygon.attributes['points'].value);

	//Middle Side Polygon
	var middleSideElementPolygon = middleSideElement.getElementsByTagName("polygon")[0];
	
	middleSideElementPolygon_height = Math.ceil(middleSideElement.getBoundingClientRect().height);
	middleSideElementPolygon_width = Math.ceil(middleSideElement.getBoundingClientRect().width);


	middleSideElementPolygon.setAttribute("points", "0,30 "+middleSideElementPolygon_width+",10 "+middleSideElementPolygon_width+","+(middleSideElementPolygon_height-10)+" 0,"+middleSideElementPolygon_height);
	middleSideElementPolygonStyle = middleSideElementPolygon.style;
	middleSideElementPolygonStyle.fill = "url(#midSideGrad)";
	middleSideElementPolygonStyle.stroke = "blue";
	console.log(middleSideElementPolygon.style);
	console.log(middleSideElementPolygon.attributes['points'].value);

	//Left Side Polygon
	var rightSideElementPolygon = rightSideElement.getElementsByTagName("polygon")[0];
	
	rightSideElementPolygon_height = Math.ceil(rightSideElement.getBoundingClientRect().height);
	rightSideElementPolygon_width = Math.ceil(rightSideElement.getBoundingClientRect().width);


	rightSideElementPolygon.setAttribute("points", "0,10 "+rightSideElementPolygon_width+",0 "+rightSideElementPolygon_width+","+(rightSideElementPolygon_height)+" 0,"+(rightSideElementPolygon_height-10));
	rightSideElementPolygonStyle = rightSideElementPolygon.style;
	rightSideElementPolygonStyle.fill = "url(#midSideGrad)";
	rightSideElementPolygonStyle.stroke = "blue";
	console.log(rightSideElementPolygon.style);
	console.log(rightSideElementPolygon.attributes['points'].value);



	
}

vistak();
window.addEventListener("resize", vistak);