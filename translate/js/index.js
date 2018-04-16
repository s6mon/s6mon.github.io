
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


// document.addEventListener("mousemove", function(event) {
//     myFunction(event);
// });

// function myFunction(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     console.log(x + ", " + y);
// }


window.addEventListener("resize", windowResizing);
window.onload = function() {
    windowResizing();

    //change bg
    // document.getElementById("p1").style.backgroundImage = "url('../img/workers_sweden_sm.jpg')";
    // document.getElementById("p1").style.backgroundSize = "100% auto";
    // document.getElementById("p1").style.backgroundRepeat = "no-repeat";
}
function windowResizing() {
    var width;
    var height;

    width = window.innerWidth;
    height = window.innerHeight;

    var tenThLuncher = document.getElementById("tenThLuncher");
    var subTenThL = document.getElementById("sub-10000luncher");

    if(width < 576) {
        // tenThLuncher.style.fontSize = "40px";
        // subTenThL.style.fontSize = "30px";
    }
    else {
        tenThLuncher.style.fontSize = "40px";
        subTenThL.style.fontSize = "35px";
    }
}

function helloW () {
    console.log("coucou");
}

function scroll(e, id) {
    consolo.log("coucou");

    document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth' 
      });
      consolo.log("coucou");
}

function loadJson() {
    adaptLang();
    var jsonFile = '../translate/'.concat(lang.concat('.json'));
    console.log(jsonFile)
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open('GET', jsonFile, true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var myObjText = xmlhttp.responseText;
            var myObj = JSON.parse(myObjText);
            console.log(myObj);
            overallElem = myObj.page;
            for (x in overallElem) {
                var currentElem = overallElem[x];
                console.log("ID :" + currentElem.id);
                console.log("content : " + currentElem.content);
                if (currentElem.tag === "") {
                    console.log(currentElem.id);
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



























