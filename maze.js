window.onload = function() {
    
    var boundary = document.querySelectorAll(".boundary");
    var start = document.querySelector("#start");
    var end = document.querySelector("#end");
    let winStatus = true;
    
    for (let i=0; i<boundary.length; i++){
        boundary[i].addEventListener("mouseover", onBoundaryMouseOver);
        
    }

    end.addEventListener("mouseover", onEndMouseOver);

    function onBoundaryMouseOver(){
        this.classList.add('youlose');
        if (winStatus === true){
            winStatus = false;
        }
    }

    function onEndMouseOver(){
        if (winStatus === true){
            alert("You Win.");
        }else{
            alert("You Lose!");
        }
    }

}