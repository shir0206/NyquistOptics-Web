/**
 * Clear current result, reset data
 */
function resetData() {

    // Get the parameter id and empty it out
    $('#outputHFOV').empty();
    $('#outputVFOV').empty();
    $('#outputIFOV').empty();
}


/**
 * Show fov result data from local server
 */
function getFovResultFromLocal() {
    //resetData();

    // Get the input-data from the client
    var focalLength = $("#inputFocalLength").val();
    var sensorPitch = $("#inputSensorPitch").val();
    var sensorSizetWidth = $("#inputSensorSizeW").val();
    var sensorSizetHeight = $("#inputSensorSizeH").val();

    // Connect to internal server and get data from it
    $.ajax({

        // Get from the server the function 'listUsers' result.
        url: "http://localhost:8080/fov?focalLength=" + focalLength + "&sensorPitch=" + sensorPitch +
            "&sensorSizetWidth=" + sensorSizetWidth + "&sensorSizetHeight=" + sensorSizetHeight,
        type: "GET",

        // If the call to the function "get" from the URl is succeful, put the data from the local server
        success: function(server_response) {

            // If there is response from the server, put the server response into the parameter id 'data'
            if (server_response != "") {
                //--------RETURN MAP--------
                $("#outputHFOV").append(server_response);
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OK');
            }
        }
    });
}