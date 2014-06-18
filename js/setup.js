critters = new Array;
critterTypes = new Array;   

i = 0;

$( function(){
//function createType(i,type,diet,widthVal,heightVal,speed,turnSpeed,sight,mitosisRate){	

    createType(i,'peas','plant',15,17,0,0,0,800,70);
	i++;
    createType(i,'bigPeas','plant',34,25,0,0,0,900,70);
    i++;
    createType(i,'hotdogs','herbivore',80,30,3,.01,400,160,20);
	i++;
    createType(i,'biscuits','herbivore',40,40,8,.1,600,140,16);
	i++;
    createType(i,'bugs','herbivore',20,22,2,.1,300,140,30);
	i++;
    createType(i,'carnivore','carnivore',50,50,3.2,.01,700,200,6);
	i++;
    createType(i,'speeders','carnivore',20,100,7,.01,1000,200,5);
	i++;
    createType(i,'fatties','carnivore',130,130,4.5,1,2500,250,1);

    i = 0;

    createObject(i,3);

    $('#critters0').remove().appendTo($('body'));

    critters[0].positionX = 900;
    critters[0].positionY = 900;

    $('#critters0').css('left',critters[0].positionX - (critters[0].widthVal/2) + 'px');
	$('#critters0').css('top',critters[0].positionY - (critters[0].heightVal/2) + 'px');


    createCritters();

    mainLoop();
});


