//  Update 
    function updateGame(){
        for (var runCount = 0; runCount < critterCount; runCount++){
            critterFunctions(runCount);
        }
        return false;
    }

//  draw
    function drawGame(){
        for (var runCount = 0; runCount < critterCount; runCount++){
            draw(runCount);

            $('#center').css('left',critters[0].positionX - 5 + 'px');
            $('#center').css('top',critters[0].positionY - 5 + 'px');
        }
    }

//  Game Loop
function mainLoop() {
    setInterval( function(){
        updateGame();
        drawGame();
    },1000/60);
}
