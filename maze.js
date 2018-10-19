window.onload = function() {
    
    var firstBoundary = document.getElementById("boundary1");
    var boundary = document.getElementsByClassName("boundary");
    var start = document.querySelector("#start");
    var end = document.querySelector("#end");
    
    let boundary1 = document.querySelector("#boundary1");
    boundary1.addEventListener("mouseover", onBoundaryMouseOver);

    function onBoundaryMouseOver(){
        this.classList.add('youlose');
    }
}