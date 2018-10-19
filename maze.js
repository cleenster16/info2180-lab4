window.onload = function() {
    
    let boundary = document.querySelectorAll(".boundary");
    let start = document.querySelector("#start");
    let end = document.querySelector("#end");
    let status = document.getElementById("status");
    let winStatus = true;
    
    for (let i=0; i<boundary.length; i++){
        boundary[i].addEventListener("mouseover", onBoundaryMouseOver);
    }

    start.addEventListener("click", onStartClick);

    end.addEventListener("mouseover", onEndMouseOver);

    function onBoundaryMouseOver(){
        this.classList.add('youlose');
        if (winStatus === true){
            winStatus = false;
        }
    }

    function onEndMouseOver(){
        if (winStatus === true){
            status.innerHTML = "You Win!";
        }else{
            status.innerHTML = "You Lose!";
        }
    }

    function onStartClick(){
        
        for (let i=0; i<boundary.length; i++){
            if (boundary[i].classList.contains('youlose')){
                boundary[i].classList.remove('youlose');
                status.innerHTML = 'Move your mouse over the "S" to begin.'; 
                winStatus = true;
            }
        }
    }

}