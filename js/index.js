
var textS_H = ["text1", "text2", "text3"];

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


function init() {
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

// function move() {
//     var elem = document.getElementById("myBar");
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         }
//         else {
//             width++;
//             console.log(width);
//             elem.style.width = width + '%';
//             elem.innerHTML = width * 1 + '%';
//         }
//     }
// }

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
    var faqlink = document.getElementById("faqLink");

    if(width < 576) {
        tenThLuncher.style.fontSize = "large";
        subTenThL.style.fontSize = "smaller";
        faqlink.style.fontSize = "smaller";
    }
    else {
        tenThLuncher.style.fontSize = "40px";
        subTenThL.style.fontSize = "35px";
        faqlink.style.fontSize = "25px";
    }
    console.log(width);
}

function changeSeveralFontSize (name, value) {
    var elem = document.getElementsByClassName(name);
    for (var i=0; i<elem.length; i++) {
        elem[i].style.fontSize = value;
    }
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.direction = "none";
    document.getElementById("myOverlay").style.direction = "none";
}