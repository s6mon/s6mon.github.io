
var textS_H = ["text1", "text2", "text3", "text4", "text1Faq", "text2Faq", "text3Faq", "text4Faq"];


function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close(clic) {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function circleMeals() {
    var cM = document.getElementById("rond");
    cM.style.border = "2px solid black";
    var circleS = window.innerWidth / 2.5;
    var text2 = '"' + circleS + 'px"';
    cM.style.width = circleS + "px";
    cM.style.height = circleS + "px";

    var diskMeal = document.getElementById("taux");
    diskMeal.style.width = circleS + "px";
    diskMeal.style.height = "50%";
}

/*
function which show/hide text
event : mouse clic
param1 : element (event acion)
param2 : textID the of text show/hide
*/
function scrollingText(element, textID) {
    hideText(textID, textS_H);
    var para = document.getElementById(textID);
    if (para.style.display === "block") {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
}

function hideText(current, textTab) {
    var i = 0;
    while (i < textTab.length) {
        if(textTab[i] != current) {
            document.getElementById(textS_H[i]).style.display = "none";
        }
        i++;
    }
}

window.addEventListener("resize", 
    function() {
        circleMeals();
        windowResizing();
        
    });

window.onload = function() {
    windowResizing();
    circleMeals();
}

function windowResizing() {
    var width;
    var height;

    width = window.innerWidth;
    height = window.innerHeight;

    var tenThLuncher = document.getElementById("tenThLuncher");
    var subTenThL = document.getElementById("sub-10000luncher");

    if(width < 576) {

    }
    else {
        tenThLuncher.style.fontSize = "40px";
        subTenThL.style.fontSize = "35px";
    }
}


function loadJson() {
    adaptLang();
    var jsonFile = '../translate/'.concat(lang.concat('.json'));
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open('GET', jsonFile, true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var myObjText = xmlhttp.responseText;
            var myObj = JSON.parse(myObjText);
            overallElem = myObj.page;
            for (x in overallElem) {
                var currentElem = overallElem[x];
                if (currentElem.tag === "") {
                    document.getElementById(currentElem.id).innerHTML = currentElem.content;
                }
                else if (currentElem.tag === "a"){
                    var linkDiv = document.getElementById(currentElem.id);
                    var newLink = document.createElement('a');
                    newLink.innerHTML = currentElem.content;
                    newLink.setAttribute('href', currentElem.url);
                    linkDiv.appendChild(newLink);
                }
            }
        } 
    }
    xmlhttp.send();
}

var lang;

function adaptLang() {
    var usrLang = navigator.language || navigator.userLanguage; 
    lang = usrLang;
    document.documentElement.lang = usrLang;
}

























