"use strict";


/*
   Name: Ezedien kamal
   Filename: script.js
	
*/

/* ===================================================================== */


window.onload = init;
function init() {
    document.getElementById("btn").addEventListener("click", displayDate);
}

function displayDate() {
    document.getElementById("getDate").innerHTML = Date();
}


var para = document.createElement("p");
var node = document.createTextNode("Here below are some more images of these beautiful birds!");
para.appendChild(node);
var element = document.getElementById("jsText");
element.appendChild(para);


function changeColor() {
    var x = document.querySelectorAll(".change");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#5589d6";
    }
}

//sizing images 
function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

//styled titles using js.style
//document.getElementById("title").style.color = "green";
//document.getElementById("title2").style.color = "green";

//mouseover color change
document.getElementById("title1").addEventListener("mouseover", mouseOver);
function mouseOver() {
    document.getElementById("title1").style.color = "Aquamarine";
}

document.getElementById("title1").addEventListener("mouseout", mouseOut);
function mouseOut() {
    document.getElementById("title1").style.color = "#5589d6";
}

document.getElementById("title2").addEventListener("mouseover", mouseOver2);
function mouseOver2() {
    document.getElementById("title2").style.color = "Aquamarine";
}

document.getElementById("title2").addEventListener("mouseout", mouseOut2);
function mouseOut2() {
    document.getElementById("title2").style.color = "#5589d6";
}
//when you come to the website 
var welcome = function () {
    alert("welcome to parrots information center");

}
welcome();


var stylesheet = document.styleSheets[0];
var ruleIndex = 0;

function redRule() {
    stylesheet.cssRules[ruleIndex].style.color = "red";
}

function blueRule() {
    stylesheet.cssRules[ruleIndex].style.color = "blue";
}

function replaceRule() {
    stylesheet.deleteRule(ruleIndex);
    ruleIndex = stylesheet.insertRule("body { color:yellow; }", 0);
}

var style = (function () {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    console.log(style.sheet.cssRules);
    return style;
})();
    document.getElementById("title1").style.color = "Aquamarine";
style.sheet.insertRule('.dent {color:Aquamarine;}', 0);
console.log(style.sheet.cssRules);















