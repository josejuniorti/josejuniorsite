function launchPro() {
    document.getElementById("pro").style.display = "block";
    document.getElementById("vid").style.display = "none";
    document.getElementById("probtn").style.backgroundColor = "rgb(3, 56, 156)";
    document.getElementById("vidbtn").style.backgroundColor = "rgb(0, 89, 255)";
    document.getElementById("againl").style.display = "inline";
}
function launchVid() {
    document.getElementById("vid").style.display = "block";
    document.getElementById("pro").style.display = "none";
    document.getElementById("vidbtn").style.backgroundColor = "rgb(3, 56, 156)";
    document.getElementById("probtn").style.backgroundColor = "rgb(0, 89, 255)";
    document.getElementById("againl").style.display = "inline"; 
}
function playvidone() {
    document.getElementById("vidone").style.display = "inline";
}
function playvidtwo() {
    document.getElementById("vidtwo").style.display = "inline";
}