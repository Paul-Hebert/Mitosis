/***********************************************************************************************/
//Setup
/***********************************************************************************************/

function createObject(ident,xVal,yVal,widthVal,heightVal,speed, sight){

	critters[ident]= Object.create(null);
	    defineProperty(critters[ident], 'positionX',xVal);
	    defineProperty(critters[ident], 'positionY',yVal);
	    defineProperty(critters[ident], 'widthVal',widthVal);
	    defineProperty(critters[ident], 'heightVal',widthVal);
	    defineProperty(critters[ident], 'destX', xVal);
		defineProperty(critters[ident], 'destY', yVal); 
		defineProperty(critters[ident], 'speed', speed); 
		defineProperty(critters[ident], 'sight', sight); 


	newObject = document.createElement('div');
		newObject.style.left = xVal + 'px';
  		newObject.style.top = yVal + 'px';
  		newObject.style.width = widthVal + 'px';
  		newObject.style.height = heightVal + 'px';	
    	newObject.setAttribute('id','critters' + ident);
    	newObject.setAttribute('class','critter');
    	document.getElementById('screen').appendChild(newObject);
	
	critterCount++;

}

/***********************************************************************************************/
//Update
/***********************************************************************************************/

function critterFunctions(ident){
	sight(ident);
    critters[ident].angle = getAngle(ident);
    move(ident);   
    return false;
}

document.onmousemove=function(e) {
    var e=e||window.event;
    critters[0].destX=e.pageX||e.clientX+document.body.scrollLeft;
    critters[0].destY=e.pageY||e.clientY+document.body.scrollTop;
    return false;
}

function sight(ident){
	var sight = critters[ident].sight;
	var positionX = critters[ident].positionX;
	var positionY = critters[ident].positionY;
	var closest = 1000;
		if (ident != 0){
	        for (var runCount = 0; runCount < critterCount; runCount++){
	        	if (runCount != ident){
    				var xDiff = positionX - critters[runCount].positionX;
    				var yDiff = positionY - critters[runCount].positionY;
    				var distance = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2));
    				if (distance < sight && distance < closest){
    					if (critters[runCount].widthVal * critters[runCount].heightVal < critters[ident].widthVal * critters[ident].heightVal){
    						if (distance < closest){
	    						critters[ident].destX = critters[runCount].positionX;
	    						critters[ident].destY = critters[runCount].positionY;
	    						closest = distance;
	    					}
    					} else{
    						critters[ident].destX = critters[ident].positionX - xDiff;
    						critters[ident].destY = critters[ident].positionY - yDiff;
    						closest = 0;
    					}
    				}
	        	}
	        }
	    }

}

function getAngle(ident){
	var positionX = critters[ident].positionX;
	var positionY = critters[ident].positionY;

	var destX = critters[ident].destX;
	var destY = critters[ident].destY;

    var xDiff = positionX - destX;
    var yDiff = positionY - destY;

    var angle = critters[ident].angle;

    if ((critters[ident].positionX != critters[ident].destX && critters[ident].positionY != critters[ident].destY)){	
		angle = Math.atan2(yDiff,xDiff)*180/Math.PI;
	}
	return angle;
}

function move(ident){
	var xChange = 0;
	var xChange = 0;
    var speed = critters[ident].speed;
    var angle = critters[ident].angle;

    if (angle != 0 && angle != 90 && angle != 180 && angle != 270 && angle != 360){
    	yChange = Math.sin(angle) * speed;
    	xChange = Math.cos(angle) * speed;
    } else if (angle == 0 || angle == 180){
    	xChange = speed;
    } else{
    	yChange = speed;
    }

    if (ident != 0 || critters[ident].positionX != critters[ident].destX){
		critters[ident].positionX -=  xChange;
	}
    if (ident != 0 || critters[ident].positionY != critters[ident].destY){
		critters[ident].positionY -= yChange;
	}
	return false;
}



/***********************************************************************************************/
//Draw
/***********************************************************************************************/


function draw(ident){
	$('#critters' + ident).css('left',critters[ident].positionX - (critters[ident].widthVal/2) + 'px');
    $('#critters' + ident).css('top',critters[ident].positionY - (critters[ident].heightVal/2) + 'px');
    document.getElementById("critters" + ident).style.MozTransform= "rotate(" + (critters[ident].angle + 45) + "deg)";
    return false;
}

