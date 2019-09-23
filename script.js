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


//showPanel(tabButtons[0], 0);

/////////////


function setCookie(cname, cvalue, exdays) {
    /*
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    */

    document.cookie = "target=666";
}

function getCookie(cname) {

    //Take the cookiename as parameter (cname).
    //Create a variable (name) with the text to search for (cname + "=")..
    var name = cname + "=";

    //Decode the cookie string, to handle cookies with special characters, e.g. '$'
    var decodedCookie = decodeURIComponent(document.cookie);

    //Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).
    var ca = decodedCookie.split(';');

    //Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        //If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    //If the cookie is not found, return "".
    return "";
}


function checkCookie() {
    var username = getCookie("target");

    //If the cookie is set it will display a greeting.
    if (username != "") {
        alert("Welcome again " + username);
    }

    //If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:
    else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }


    //document.getElementById("ref_settings").textContent = "shir";
}

//checkCookie();

function changeData() {

    $('#data').empty();

    $('#data').text("shir");

    $('#data').text("shir");

    document.getElementById("data").textContent = "shir";

}

changeData()