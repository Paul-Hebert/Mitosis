critters = new Array;
critterTypes = new Array;   

i = 0;

$( function(){
//function createType(i,type,diet,widthVal,heightVal,speed,turnSpeed,sight,mitosisRate){	


/*    createType(i,'peas','plant',15,17,0,0,0,600,40);
    i++;
    createType(i,'bugs','herbivore',rando(20,40),rando(20,40),rando(2,5),.1,1000,rando(140,200),1);*/

    createType(i,'peas','plant',15,17,0,0,0,600,70,false);
	i++;
    createType(i,'bigPeas','plant',34,25,0,0,0,800,70,false);
    i++;
    createType(i,'hotdogs','herbivore',80,30,3.5,01,500,140,16,false);
	i++;
    createType(i,'biscuits','herbivore',40,40,6,1,600,180,16,false);
	i++;
    createType(i,'bugs','herbivore',20,22,4.5,1,600,130,20,false);
	i++;
    createType(i,'carnivore','carnivore',50,50,5,01,1900,220,6,false);
	i++;
    createType(i,'speeders','carnivore',20,100,9,01,2400,250,5,false);
	i++;
    createType(i,'fatties','carnivore',130,130,5,1,3500,300,1,false);


/*createType(i,'peas','plant',15 + rando(0,5),17 + rando(0,5),0,0,0,800 + rando(-200,200),70);
    i++;
    createType(i,'bigPeas','plant',34 + rando(0,5),25 + rando(0,5),0,0,0,900 + rando(-200,200),70);
    i++;
    createType(i,'hotdogs','herbivore',80 + rando(-50,50),30 + rando(-50,50),3 + rando(-2,2),.01,400,160 + rando(-20,100),20);
    i++;
    createType(i,'biscuits','herbivore',40 + rando(-50,50),40 + rando(-50,50),8 + rando(-2,2),.1,600,140 + rando(-0,100),16);
    i++;
    createType(i,'bugs','herbivore',20 + rando(0,50),22 + rando(0,50),2 + rando(-2,2),.1,300,140 + rando(-0,100),30);
    i++;
    createType(i,'carnivore','carnivore',50 + rando(-50,50),50 + rando(-50,50),3.2 + rando(-2,2),.01,700,200 + rando(-20,100),6);
    i++;
    createType(i,'speeders','carnivore',20 + rando(0,50),100 + rando(-50,50),7,.01,1000,200 + rando(-20,100),5);
    i++;
    createType(i,'fatties','carnivore',130 + rando(-90,90),130 + rando(-90,90),4.5 + rando(-2,2),1,2500,250 + rando(-20,100),1);*/

    i = 0;

    createObject(i,3);

    $('#info .bar:first-of-type').css('width', critters[0].mitosisRate + 'px');

    $('#critters0').remove().appendTo($('#screen'));

    //chosen = -1;
    choose(0);
    critters.positionX = 900;
    critters.positionY = 900;


    $('#critters0').css('left',critters[0].positionX - (critters[0].widthVal/2) + 'px');
	$('#critters0').css('top',critters[0].positionY - (critters[0].heightVal/2) + 'px');


    createCritters();

    mainLoop();
});



