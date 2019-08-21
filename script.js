var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

var calculateHFOV = document.querySelectorAll(".tabContainer .tabPanel button");;

var lastPanel;
var lastButton;

let focalLength;
let SensorPitch;
let SensorSizeW;
let SensorSizeH;
let HFOV;
let VFOV;
let IFOV;
let natoDet;
let natoRec;
let natoIdent;
let humanDet;
let humanRec;
let humanIdent;
let objectDet;
let objectRec;
let LPDet = 2;
let LPRec = 6;
let LPIdent = 10;
let LPDetObject = 1.2;
let natoTargetW = 2.3;
let natoTargetH = 2.3;
let humanTargetW = 0.5;
let humanTargetH = 1.7;
let objectTargetW = 0.5;
let objectTargetH = 0.5;

function showPanel(currentButton, panelIndex) {
    if (lastButton) {
        lastButton.style.backgroundColor = "";
        lastButton.style.color = "";
    }

    lastButton = currentButton;
    lastButton.style.color = "black";
    lastButton.style.backgroundColor = "#dce6f2";

    if (lastPanel) {
        lastPanel.style.display = "none";
    }
    lastPanel = tabPanels[panelIndex];
    lastPanel.style.display = "block";

    navigator.vibrate(100);
}

function calcHFOVTab() {

    focalLength = document.forms["myFcalculateHFOVFormorm"]["valueFocalLength"].value;

    if (focalLength == "") {
        alert("Name must be filled out");
        return false;
    } else {
        alert("Name is filled out");
        return true;

    }

    //navigator.vibrate(100);

}

function calcFocalLengthTab() {

    navigator.vibrate(100);

}

function saveSettings() {

    navigator.vibrate(100);

}


/** Utils **/
function calculateIFOV() {

}

function calculateHFOV() {

}

function calculateVFOV() {

}

function calculateNatoDet() {

}

function calculateNatoRec() {

}

function calculateNatoIdent() {

}

function calculateHumanDet() {

}

function calculateHumanRec() {

}

function calculateHumanIdent() {

}

function calculateIdentDet() {

}

function calculateIdentRec() {

}

showPanel(tabButtons[0], 0);