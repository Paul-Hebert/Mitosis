//  Update 
    function updateGame(){
        for (var runCount = 0; runCount < critterCount; runCount++){
            if (critters[runCount].dead == false){
                critterFunctions(runCount);
            }
        }
        return false;
    }

//  draw
    function drawGame(){
        for (var runCount = 0; runCount < critterCount; runCount++){
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
