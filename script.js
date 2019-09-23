var tabButtons = $(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

var calculateHFOV = document.querySelectorAll(".tabContainer .tabPanel button");;

var lastPanel;
var lastButton;



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

showPanel(tabButtons[0], 0);