


function mouseClic(element, textID) {
    var para = document.getElementById(textID);
    if (para.style.display === "block") {
        para.style.display = "none";
    } else {
        para.style.display = "block";
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

function resizeIcon() {
    var width;
    var height;

    width = screen.availWidth;
    height = screen.availHeight;

    console.log("Lar : " + width + " Hau : " + height);
}