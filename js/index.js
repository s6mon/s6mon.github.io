

document.getElementById("all").addEventListener("mousemouve", mouseOverHeader());
document.getElementById("header").addEventListener("mouseout", mouseOutHeader());


// function mouseMoveAll(e) {
//     var divHeader = document.getElementById("header");
//     mOver = isMouseOver(divHeader);
//     divHeader.style.display = "none";

//     // if(mOver) {
//     //     divHeader.style.display = "block";
//     // }
//     // else if (!mOver) {
//     //     // console.log("on est pas display");

//     //     divHeader.style.display = "none";
//     //     setTimeout (function() {divHeader.style.display = "none"; }, 2000 );

//     // }
//     // divHeader.style.display = "block";
    
// }

function mouseOverHeader(e) {
    console.log("LAAAAA");
    var divHeader = document.getElementById("header");
    divHeader.style.display = "block";
}

function mouseOutHeader(e) {
    var x = document.getElementById("header");
    x.style.display = "none";
}

function isMouseOver(element) {

    
    // element.style.display = "block";
    // element.onmouseover = function() { element.style.display = "block"; };
    // element.onmouseout = function() {
    //     setTimeout (function() {element.style.display = "none"; }, 2000 );
    // };

}

function mouseClic(element, textID) {
    var para = document.getElementById(textID);
    if (para.style.display === "block") {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
}

