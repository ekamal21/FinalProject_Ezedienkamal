"use strict"

window.onload


//mouseover title
document.getElementById("par").addEventListener("mouseover", mouseOverT);
function mouseOverT() {
    document.getElementById("par").style.color = "Aquamarine";
}

document.getElementById("par").addEventListener("mouseout", mouseOutT);
function mouseOutT() {
    document.getElementById("par").style.color = "#5589d6";
}
//mouseover st
document.getElementById("weather").addEventListener("mouseover", mouseOverST);
function mouseOverST() {
    document.getElementById("weather").style.color = "Aquamarine";
}

document.getElementById("weather").addEventListener("mouseout", mouseOutST);
function mouseOutST() {
    document.getElementById("weather").style.color = "#5589d6";
}
//mouseover f
document.getElementById("f").addEventListener("mouseover", mouseOver);
function mouseOver() {
    document.getElementById("f").style.color = "Aquamarine";
}

document.getElementById("f").addEventListener("mouseout", mouseOut);
function mouseOut() {
    document.getElementById("f").style.color = "#5589d6";
}
//mouseover c
document.getElementById("c").addEventListener("mouseover", mouseOver2);
function mouseOver2() {
    document.getElementById("c").style.color = "Aquamarine";
}

document.getElementById("c").addEventListener("mouseout", mouseOut2);
function mouseOut2() {
    document.getElementById("c").style.color = "#5589d6";
}
document.getElementById("top").addEventListener("mouseover", mouseOver3);
function mouseOver3() {
    document.getElementById("top").style.color = "Aquamarine";
}
document.getElementById("top").addEventListener("mouseout", mouseOut3);
function mouseOut3() {
    document.getElementById("top").style.color = "#5589d6";
}

//weather calculator
function convertFToC() {
    var fTempVal = parseFloat(document.getElementById('fTemp').value);
    var cTempVal = (fTempVal - 32) * (5 / 9);
    document.getElementById('cTemp').value = cTempVal;
    return false;
}


function convertCToF() {
    var cTempVal = parseFloat(document.getElementById('cTemp').value);
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    console.log(fTempVal);
    document.getElementById('fTemp').value = fTempVal;
    return false;
}
function myFunction() {
    document.getElementById("parrots").classList.remove("mystyle");
}
//keypress color change 
document.getElementById("fTemp").addEventListener("keydown", colorChange1);
function colorChange1() {
    document.getElementById("fTemp").style.background = "Aquamarine";
}

document.getElementById("cTemp").addEventListener("keyup", colorChange2);
function colorChange2() {
    document.getElementById("cTemp").style.background = "Aquamarine";
}
document.getElementById("fname").addEventListener("keyup", colorChange3);
function colorChange3() {
    document.getElementById("fname").style.background = "Aquamarine";
}

document.getElementById("fname1").addEventListener("keyup", colorChange4);
function colorChange4() {
    document.getElementById("fname1").style.background = "Aquamarine";
}
document.getElementById("email").addEventListener("keyup", colorChange5);
function colorChange5() {
    document.getElementById("email").style.background = "Aquamarine";
}
document.getElementById("comment").addEventListener("keyup", colorChange6);
function colorChange6() {
    document.getElementById("comment").style.background = "Aquamarine";
}




