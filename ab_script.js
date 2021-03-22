"use strict"

window.onload
//mouseover AT
document.getElementById("colorchange1").addEventListener("mouseover", mouseOverAT);
function mouseOverAT() {
    document.getElementById("colorchange1").style.color = "Aquamarine";
}

document.getElementById("colorchange1").addEventListener("mouseout", mouseOutAT);
function mouseOutAT() {
    document.getElementById("colorchange1").style.color = "#5589d6";
}
//mouseover AST
document.getElementById("colorchange2").addEventListener("mouseover", mouseOverAST);
function mouseOverAST() {
    document.getElementById("colorchange2").style.color = "Aquamarine";
}

document.getElementById("colorchange2").addEventListener("mouseout", mouseOutAST);
function mouseOutAST() {
    document.getElementById("colorchange2").style.color = "#5589d6";
}

