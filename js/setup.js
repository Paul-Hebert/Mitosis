critters = new Array;
critterCount = 0;
 i = 0;
$( function(){
	// ident, xVal, yVal, widthVal, heightVal, speed, sight


    createObject(i,50,50,50,50, 5, 600);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);
    i++;
    createObject(i,Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 600) + 1, Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 5) + 1, 300);


    mainLoop();
});

var config = {
	writable: true,
	enumerable: true,
	configurable: true
};
 
//	Platform creation functions

function defineProperty(obj, name, value){
	config.value = value;
	Object.defineProperty(obj, name, config);
}