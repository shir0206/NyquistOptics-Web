var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

var lastPanel, lastButton;

function showPanel(currentButton, colorCode, panelIndex) {
    if (lastButton) {
        lastButton.style.backgroundColor = "";
        lastButton.style.color = "";
    }

    lastButton = currentButton;
    lastButton.style.backgroundColor = colorCode;
    lastButton.style.color = "white";

    if (lastPanel) {
        lastPanel.style.display = "none";
    }
    lastPanel = tabPanels[panelIndex];
    lastPanel.style.display = "block";
    lastPanel.style.backgroundColor = colorCode;
}

showPanel(tabButtons[0], 'red', 0);