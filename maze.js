window.onload = function() {
    
    let boundary = document.querySelectorAll(".boundary");
    let start = document.querySelector("#start");
    let end = document.querySelector("#end");
    let status = document.getElementById("status");
    let maze = document.getElementById("maze");
    let winStatus = true;
    let gameStart = true;
    
    for (let i=0; i<boundary.length; i++){
        boundary[i].addEventListener("mouseover", onBoundaryMouseOver);
    }

    start.addEventListener("click", onStartClick);
    end.addEventListener("mouseover", onEndMouseOver);
    maze.addEventListener("mouseleave", onMazeLeave);
    
    function onBoundaryMouseOver(){
        this.classList.add('youlose');
        if (winStatus === true){
            winStatus = false;
        }
    }

    function onEndMouseOver(){
        if (winStatus === true){
            status.innerHTML = "You Win!";
            gameStart = false;
        }else{
            status.innerHTML = "You Lose!";
        }
    }

    function onStartClick(){
        status.innerHTML = 'Move your mouse over the "S" to begin.';
        gameStart = true;
        for (let i=0; i<boundary.length; i++){
            if (boundary[i].classList.contains('youlose')){
                boundary[i].classList.remove('youlose');
                winStatus = true;
            }
        }
    }

    function onMazeLeave(){
        if (gameStart){
            boundary.forEach(element => {
                element.classList.add("youlose");
            })
            status.innerHTML = "You Lose!";
        }
    }

}