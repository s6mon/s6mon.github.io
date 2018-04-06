
var textS_H = ["text1", "text2", "text3"];

/*
function which show/hide text
event : mouse clic
param1 : element (event acion)
param2 : textID the of text show/hide
*/
function scrollingText(element, textID) {
    hideText(textID);
    var para = document.getElementById(textID);
    if (para.style.display === "block") {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
}

function hideText (current) {
    var i = 0;
    while (i < textS_H.length) {
        console.log(i);
        if(textS_H[i] != current) {
            document.getElementById(textS_H[i]).style.display = "none";
        }
        i++;
    }
}


function myFunction() {
    i = 0;
    var image = document.getElementById("pngFilling");
    var elementTextHere = document.getElementById("textHere");
    elementTextHere.innerHTML = "Salut";
    Loadgo.init(image, {
        'direction': 'bt'
      });
     var ok = Loadgo.options(image);
    console.log(ok);

}
var i = 0;
function start() {
    var image = document.getElementById("pngFilling");
    var elementTextHere = document.getElementById("textHere");
    elementTextHere.innerHTML = "Salut";
    i = i + 10;
    Loadgo.setprogress(image, i);
    var ok = Loadgo.options(image);
    console.log(ok);
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        }
        else {
            width++;
            console.log(width);
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

window.addEventListener("resize", windowResizing);
window.onload = function() {
    windowResizing();
}


function windowResizing() {
    var width;
    var height;

    width = window.innerWidth;
    height = window.innerHeight;

    var tenThLuncher = document.getElementById("10000luncher");
    var subTenThL = document.getElementById("sub-10000luncher");
    var h4b =  document.getElementById("h4b");

    console.log(h4b);

    if(width < 576) {
        
        tenThLuncher.style.fontSize = "medium";
        subTenThL.style.fontSize = "smaller";
        h4b.style.fontSize = "smaller";
    }
    else {
        tenThLuncher.style.fontSize = "40px";
        subTenThL.style.fontSize = "35px";
        h4b.style.fontSize = "x-large";
    }
}


function helloW () {
    console.log("helllo");
}