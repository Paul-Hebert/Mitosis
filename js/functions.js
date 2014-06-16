/***********************************************************************************************/
//Setup
/***********************************************************************************************/

function createType(i,type,diet,widthVal,heightVal,speed,turnSpeed,sight,mitosisRate){	
	critterTypes[i]= Object.create(null);
		defineProperty(critterTypes[i], 'type', i); 
		defineProperty(critterTypes[i], 'diet', diet); 

	    defineProperty(critterTypes[i], 'widthVal',widthVal);
	    defineProperty(critterTypes[i], 'heightVal',heightVal);
		defineProperty(critterTypes[i], 'speed', speed); 
		defineProperty(critterTypes[i], 'turnSpeed', turnSpeed); 
		defineProperty(critterTypes[i], 'sight', sight); 

		defineProperty(critterTypes[i], 'mitosisRate', mitosisRate); 

} 	

function createObject(ident,type,spawner){
	critters[ident]= Object.create(null);
	    defineProperty(critters[ident], 'type',type);
	    defineProperty(critters[ident], 'positionX',rando(0,2200));
	    defineProperty(critters[ident], 'positionY',rando(0,2200));
	    defineProperty(critters[ident], 'destX', rando(0,2200));
		defineProperty(critters[ident], 'destY', rando(0,2200)); 
		defineProperty(critters[ident], 'angle', rando(0,360)); 

		/*if (spawner != null){
	    	defineProperty(critters[ident], 'positionX',critters[spawner].positionX + critters[spawner].widthVal/2);
	    	defineProperty(critters[ident], 'positionY',critters[spawner].positionY + critters[spawner].heightVal/2);			
		}*/

	    defineProperty(critters[ident], 'widthVal',critterTypes[type].widthVal);
	    defineProperty(critters[ident], 'heightVal',critterTypes[type].heightVal);
		defineProperty(critters[ident], 'speed', critterTypes[type].speed); 
		defineProperty(critters[ident], 'sight', critterTypes[type].sight); 

		
		defineProperty(critters[ident], 'turnSpeed', critterTypes[type].turnSpeed); 

		defineProperty(critters[ident], 'dead', false); 
		defineProperty(critters[ident], 'type', critterTypes[type].type); 
		defineProperty(critters[ident], 'diet', critterTypes[type].diet); 


		defineProperty(critters[ident], 'horizontalM', rando(0,critterTypes[type].speed/10)); 
		defineProperty(critters[ident], 'verticalM', rando(0,critterTypes[type].speed/10)); 

		defineProperty(critters[ident], 'mitosisLevel', rando(0,critterTypes[type].mitosisRate - 1)); 
		defineProperty(critters[ident], 'mitosisRate', critterTypes[type].mitosisRate); 

	newObject = document.createElement('div');
		newObject.style.left = critters[ident].xVal + 'px';
  		newObject.style.top = critters[ident].yVal + 'px';
  		newObject.style.width = critters[ident].widthVal + 'px';
  		newObject.style.height = critters[ident].heightVal + 'px';	
    	newObject.setAttribute('id','critters' + ident);
    	newObject.setAttribute('class','critter');
	
    	if (critterTypes[type].diet == 'plant'){
    		newObject.style.background="green";
    	}

       	if (critterTypes[type].diet == 'herbivore'){
    		newObject.style.background="orange";
    	}

       	if (critterTypes[type].diet == 'carnivore'){
    		newObject.style.background="red";
    	}

    	document.getElementById('screen').appendChild(newObject);

    	if (type == 6){
			newObject = document.createElement('div');
    		newObject.setAttribute('class','eye');

	    	document.getElementById('critters' + ident).appendChild(newObject);
    	}

	critterCount++;

}

var config = {
	writable: true,
	enumerable: true,
	configurable: true
};
 
function defineProperty(obj, name, value){
	config.value = value;
	Object.defineProperty(obj, name, config);
}

function rando(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/***********************************************************************************************/
//Update
/***********************************************************************************************/

function critterFunctions(ident){
	sight(ident);
    critters[ident].angle = getAngle(ident);
    move(ident);  
	inertia(ident);
	mitosis(ident);

    return false;
}

document.onmousemove=function(e) {
    var e=e||window.event;
    critters[0].destX=e.pageX||e.clientX+document.body.scrollLeft;
    critters[0].destY=e.pageY||e.clientY+document.body.scrollTop;
    return false;
}

function mitosis(ident){
	if (ident != 0){
		critters[ident].mitosisLevel++;
		if (critters[ident].mitosisLevel == critters[ident].mitosisRate){
			createObject(critterCount, critters[ident].type,ident);
			critters[ident].mitosisLevel = 0;
		}

	}
}

function sight(ident){
	var sight = critters[ident].sight;
	var positionX = critters[ident].positionX;
	var positionY = critters[ident].positionY;
	var closestPrey = 1000;
	var closestPredator = 1000;

	        for (var runCount = 0; runCount < critterCount; runCount++){
	        	if (runCount != ident){
    				var xDiff = positionX - critters[runCount].positionX;
    				var yDiff = positionY - critters[runCount].positionY;
    				var inverseX = false;
					var inverseY = false;

    				if (xDiff < 0){
    					xDiff * -1;
    					inverseX = true;
    				}
    				if (yDiff < 0){
    					yDiff * -1;
    					inverseY = true;
    				}
    				var distance = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2));
    				if (distance < sight && critters[runCount].dead == false){
	    				if ((critters[ident].diet == 'herbivore' && critters[runCount].diet == 'plant') || (critters[ident].diet == 'carnivore' && critters[runCount].diet == 'herbivore')){
	    					if (distance < (critters[ident].widthVal + critters[runCount].widthVal)/2 && $('#critters' + runCount).length){
	    						$('#critters' + runCount).remove();
	    						critters[runCount].dead = true;
	    						}    						
    						if (distance < closestPrey && closestPredator == 1000 && ident != 0){
	    						critters[ident].destX = critters[runCount].positionX;
	    						critters[ident].destY = critters[runCount].positionY;
	    						closestPrey = distance;
	    					}
    					} else if (distance < closestPredator && ident != 0 && critters[runCount].diet == 'carnivore' && critters[ident].diet != 'carnivore'){
    						if (inverseX == false){
	    						critters[ident].destX = critters[ident].positionX - xDiff;
	    					} else{
	    						critters[ident].destX = critters[ident].positionX - xDiff;
	    					}
    						if (inverseY == false){
	    					critters[ident].destY = critters[ident].positionY + yDiff;
	    					} else{
	    					critters[ident].destY = critters[ident].positionY + yDiff;
	    					}
	    					closestPredator = distance;
    					}
    				}
	        	}
	        
	        /*if (closestPrey == 1000 && closestPredator == 1000 && ident != 0){
	        	critters[ident].destY = (critters[ident].positionY + Math.sin(critters[ident].angle)) * 50;
	        	critters[ident].destX = (critters[ident].positionX + Math.cos(critters[ident].angle)) * 50;
	        }*/
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

    if (xDiff != 0 && yDiff != 0){	
		var desiredAngle = Math.atan2(yDiff,xDiff)*180/Math.PI;
	}

	if (desiredAngle - angle < 180){
		if(angle < desiredAngle + 10 || angle > desiredAngle - 10){
			angle = desiredAngle;
		}else if(angle < desiredAngle){
			angle += critters[ident].turnSpeed/10000;
		} else if(angle > desiredAngle){
			angle -= critters[ident].turnSpeed/10000;
		}
	} else{
		if(angle < desiredAngle + 10 || angle > desiredAngle - 10){
			angle = desiredAngle;
		}else if(angle < desiredAngle){
			angle -= critters[ident].turnSpeed/10000;
		} else if(angle > desiredAngle){
			angle += critters[ident].turnSpeed/10000;
		}		
	}

	/*if ((desiredAngle - angle <= 180 && desiredAngle - angle >= 0)||(desiredAngle - angle >= -360 && desiredAngle - angle <= -180)){
		angle += critters[ident].turnSpeed;
	} else if ((desiredAngle - angle >= -180 && desiredAngle - angle <= 0)||(desiredAngle - angle <= 360 && desiredAngle - angle >= 180)){
		angle -= critters[ident].turnSpeed;
	}*/
	//angle += 180;
	if (angle > 360){
		angle -= 360;
	} else if (angle < 0){
		angle += 360;
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

	critters[ident].horizontalM -= xChange/10;
	critters[ident].verticalM -= yChange/10;

	return false;
}

function inertia(ident){
	if (critters[ident].horizontalM > 0){
		critters[ident].horizontalM -= critters[ident].speed/20;
	}
	if (critters[ident].verticalM > 0){
		critters[ident].verticalM -= critters[ident].speed/20;
	}

	if (critters[ident].horizontalM < 0){
		critters[ident].horizontalM += critters[ident].speed/20;
	}
	if (critters[ident].verticalM < 0){
		critters[ident].verticalM += critters[ident].speed/20;
	}

	critters[ident].positionX -= critters[ident].horizontalM;
	critters[ident].positionY -= critters[ident].verticalM;

	return false;
}

/***********************************************************************************************/
//Draw
/***********************************************************************************************/


function draw(ident){
	if ($('#critters' + ident).length){
		/*if (ident == 0){
			$('#screen').css('left',-critters[ident].positionX - (critters[ident].widthVal/2) + 'px');
		    $('#screen').css('top',-critters[ident].positionY - (critters[ident].heightVal/2) + 'px');			
		} else{*/
			$('#critters' + ident).css('left',critters[ident].positionX - (critters[ident].widthVal/2) + 'px');
		    $('#critters' + ident).css('top',critters[ident].positionY - (critters[ident].heightVal/2) + 'px');
		//}
	    document.getElementById("critters" + ident).style.MozTransform= "rotate(" + (critters[ident].angle + 45) + "deg)";
	}
    return false;
}

// Testing:
xyz=0;
document.onclick=function(e){
  console.log(critters[xyz].positionX + ", " + critters[xyz].positionY + ": " + critters[xyz].destX + ", " + critters[xyz].destY + ": " + critters[xyz].angle + ", " + critters[xyz].desiredAngle);
}
