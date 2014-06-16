critters = new Array;
critterCount = 0;
 i = 0;

$( function(){
//function createType(i,type,diet,widthVal,heightVal,speed,turnSpeed,sight,mitosisRate){	

    createType(i,'peas','plant',15,17,0,0,0,1500);
	i++;
    createType(i,'hotdogs','herbivore',80,30,3,.01,400,3000);
	i++;
    createType(i,'biscuits','herbivore',40,40,5,.1,600,2500);
	i++;
    createType(i,'bugs','herbivore',20,22,2,.1,300,2000);
	i++;
    createType(i,'carnivore','carnivore',50,50,3.2,.01,700,10000);
	i++;
    createType(i,'speeders','carnivore',20,100,6,.01,1000,10000);
	i++;
    createType(i,'fatties','carnivore',130,130,2,.01,1500,40000);

    i = 0;

    createObject(i,6);

    $('#critters0').remove().appendTo($('body'));

    critters[0].positionX = 500;
    critters[0].positionY = 500;

    $('#critters0').css('left',critters[0].positionX - (critters[0].widthVal/2) + 'px');
	$('#critters0').css('top',critters[0].positionY - (critters[0].heightVal/2) + 'px');

    for (z=0; z<100; z++){
        i++;
        createObject(i,0);
    }

    for (z=0; z<15; z++){
        i++;
        createObject(i,1);
    }

    for (z=0; z<16; z++){
        i++;
		createObject(i,2);
    }

    for (z=0; z<30; z++){
        i++;
		createObject(i,3);
    }

    for (z=0; z<6; z++){
        i++;
		createObject(i,4);
    }

    for (z=0; z<5; z++){
        i++;
		createObject(i,5);
    }

    /*for (z=0; z<2; z++){
        i++;
		createObject(i,6);
    }*/

    mainLoop();
});

critterTypes = new Array;	

