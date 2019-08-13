var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

var lastPanel, lastButton;

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

    navigator.vibrate(50);
}

showPanel(tabButtons[0], 0);