function closeloading(){
    document.getElementById("Loading").style.display="none"
}
function rotatewheel(){
    var randomnumber=Math.floor(Math.random()*360);
    document.getElementById("wheel").style.transition="rotate 10s"
    document.getElementById("wheel").style.rotate=randomnumber*10+"deg"
}