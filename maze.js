window.onload = function() {
    
    var firstBoundary = document.getElementById("boundary1");
    var boundary = document.querySelectorAll(".boundary");
    var start = document.querySelector("#start");
    var end = document.querySelector("#end");
    
    let boundary1 = document.querySelector("#boundary1");
    
    for (let i=0; i<boundary.length; i++){
        boundary[i].addEventListener("mouseover", onBoundaryMouseOver);

    }

    function onBoundaryMouseOver(){
        this.classList.add('youlose');
    }
}