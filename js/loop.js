//  Update 
    function updateGame(){
        for (var runCount = 0; runCount < critters.length; runCount++){
            if (critters[runCount].dead == false){
                if (critters[runCount].diet != 'plant'){
                    critterFunctions(runCount);
                }
                mitosis(runCount);
            }
        }
        return false;
    }

//  draw
    function drawGame(){
        for (var runCount = 0; runCount < critters.length; runCount++){
            if (critters[runCount].dead == false){
                draw(runCount);
            }
        }
    }

//  Game Loop
function mainLoop() {
    setInterval( function(){
        updateGame();
        drawGame();
    },1000/40);
}
