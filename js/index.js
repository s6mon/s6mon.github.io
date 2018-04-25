
var textS_H = ["p1_s1_1_2", "p1_s1_2_2", "p1_s1_3_2", "p1_s1_4_2", "p6_s1_2", "p6_s2_2", "p6_s3_2", "p6_s4_2"];
var lang;
var isDetected;
var langSupport = {en:'', sv:''};
var nbDayToElection;
const mealsGoal = 10000;
var nbLunchesGlobal;

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


function setCircleMeals() {
    getNbLUnches();
}

function circleMeals(nb) {
    var nbLunches = nb;
    var cM = document.getElementById("rond");
    cM.style.border = "4px solid black";
    var circleS = window.innerWidth / 2;
    cM.style.width = circleS + "px";
    cM.style.height = circleS + "px";

    var diskMeal = document.getElementById("taux");
    diskMeal.style.width = circleS + "px";
    diskMeal.style.height = (nbLunches / mealsGoal) * 100 + "%";

    var nbMealsAte = document.getElementById("nbMealsAte");
    var mealsText = document.getElementById("p3_fig1_2");
    var mealsNbPos = document.getElementById("mealsNbPos");

    nbMealsAte.innerHTML = nbLunches;
    // nbMealsAte.style.marginLeft = ((circleS/2) - (nbMealsAte.offsetWidth/2)) + "px"; //((nbMealsAte.parentNode.parentNode.offsetWidth / 2) - (nbMealsAte.offsetWidth/2)) + "px";
    // // mealsText.style.marginLeft = "50px";
    // mealsText.style.marginLeft = ((circleS/2) - (mealsText.offsetWidth/2)) + "px";

    if(nbLunches < 100) {
        mealsNbPos.style.marginLeft = "30%";    
    } else if(nbLunches < 1000) {
        mealsNbPos.style.marginLeft = "27%";
        
    } else if (nbLunches < 10000) {
        mealsNbPos.style.marginLeft = "20%";
        
    } else if(nbLunches >= 10000) {
        mealsNbPos.style.marginLeft = "12%";
    }

    if(nbLunches < 5000){
        mealsNbPos.style.bottom = "40%";
    } else if (nbLunches >= 7000){
        mealsNbPos.style.bottom = "15%";
        mealsNbPos.style.color = "#ffdc00";
    }
    else {
        mealsNbPos.style.bottom = "-5%";
        mealsNbPos.style.color = "#ffdc00";
    }
}

function calculateDayToElection() {
    var electionD = new Date(2018, 8, 9, 23, 0, 0, 0);
    var today = new Date();
    today = today.getTime();
    var diff = electionD - today;
    diff = diff / (1000 * 60 * 60 * 24);
    nbDayToElection = Math.floor(diff);
    return nbDayToElection;
}

function printDaysToElection() {
    var nbDayToPrint = calculateDayToElection();
    document.getElementById("nbDayToElection").innerHTML = nbDayToPrint;
}

function printMealByDay(nb) {
    var nbDayBeforeElection = calculateDayToElection();
    var nbLunches = nb;
    var mealsByDay = Math.round((mealsGoal - nbLunches) / nbDayToElection);
    document.getElementById("nbMealsByDay").innerHTML = mealsByDay;
}

/*
function which show/hide text
event : mouse clic
param1 : element (event acion)
param2 : textID the of text show/hide
*/
function scrollingText(element, textID) {
    var arrowId = textID + "Arrow";
    var para = document.getElementById(textID);

    hideText(textID, textS_H);
    if (para.style.display === "block") {
        para.style.display = "none";
        document.getElementById(arrowId).className = "fa fa-angle-down";
    } else {
        para.style.display = "block";
        document.getElementById(arrowId).className = "fa fa-angle-up";
    }
}

function hideText(current, textTab) {
    var i = 0;
    var arrowId;
    while (i < textTab.length) {
        if(textTab[i] != current) {
            document.getElementById(textS_H[i]).style.display = "none";
            arrowId = textS_H[i] + "Arrow";
            document.getElementById(arrowId).className = "fa fa-angle-down";
        }
        i++;
    }
}

window.addEventListener("resize", 
    function() {
        // circleMeals();
        windowResizing();
        
    });

window.onload = function() {
    windowResizing();
    // circleMeals();
}

function windowResizing() {
    var width;
    var height;

    width = window.innerWidth;
    height = window.innerHeight;

    var p1_Title = document.getElementById("p1_Title");
    var subTenThL = document.getElementById("p1_SubTitle");

    if(width < 576) {

    }
    else {
        p1_Title.style.fontSize = "40px";
        subTenThL.style.fontSize = "35px";
    }
}


function loadJson(strPage, isFirstCall) {

    var adaptLangue = adaptLang();
    var adaptLangue2 = adaptLangue.slice(0, 2).toLowerCase();
    if (adaptLangue2 in langSupport){
        if(adaptLangue2 === "ar"){ //arabic case

        }
        lang = adaptLangue2;
    }
    else {
        lang = 'en';
    }
    if(strPage == 'index'){
        dir1 = "";
    }else {
        dir1 = "../"
    }
    var jsonFile = dir1+'translate/'+strPage+'_'+lang+'.json';
    //console.log('Which json are selected : ' + jsonFile);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open('GET', jsonFile, true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var myObjText = xmlhttp.responseText;
            var myObj = JSON.parse(myObjText);
            var overallElem = myObj.page;
            for (x in overallElem) {
                var currentElem = overallElem[x];
                //console.log(currentElem);
                if (currentElem.tag === "") {
                    document.getElementById(currentElem.id).innerHTML = currentElem.content;
                }
                else if (currentElem.tag === "a"){
                    var linkDiv = document.getElementById(currentElem.id);
                    var newLink = document.createElement('a');
                    newLink.text = currentElem.content;
                    newLink.href =  currentElem.url;
                    newLink.style.textDecoration = "underline";
                    linkDiv.appendChild(newLink);
                }
                else if (currentElem.tag === "p"){
                    var div = document.getElementById(currentElem.id);
                    var newNode = document.createElement("p");
                    var textNode = document.createTextNode(currentElem.content);
                    newNode.appendChild(textNode);
                    div.appendChild(newNode);
                }
            }
        }
        else if (this.readyState == 4 && this.status == 0){
            loadJson(strPage, false);
        }
    }
    xmlhttp.send();
}

function adaptLang() {
    var usrLang = navigator.language || navigator.userLanguage; 
    document.documentElement.lang = usrLang;
    return usrLang;
}

function getNbLUnches (){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("").innerHTML = xhttp.responseText;
        circleMeals(xhttp.responseText);
        printMealByDay(xhttp.responseText);
    }
};
    xhttp.open("GET", "https://api.welcomeapp.se/eatAndTalk/count", true);
    xhttp.send();
}




















