var express = require('express');
var app = express();
var fs = require("fs");

app.use('/', express.static(__dirname + '/'));

/**
 * Calculate in the server sum of two numbers
 */
app.get('/fov', function(req, res) {

    // Recieve parameters from the query
    var focalLength = req.query.focalLength;
    var sensorPitch = req.query.sensorPitch;
    var sensorSizetWidth = req.query.sensorSizetWidth;
    var sensorSizetHeight = req.query.sensorSizetHeight;

    // Calculate HFOV
    hfov = calculateHFOV(parseInt(sensorPitch), parseInt(sensorSizetWidth), parseInt(focalLength))

    // Calculate VFOV
    vfov = calculateVFOV(hfov, parseInt(sensorSizetHeight), parseInt(sensorSizetWidth))

    // Calculate IFOV
    ifov = calculateIFOV(parseInt(sensorPitch), parseInt(focalLength))

    var fovMap = new Map();
    fovMap.set("hfov", hfov);
    fovMap.set("vfov", vfov);
    fovMap.set("ifov", ifov);

    // Return result
    console.log(fovMap);
    res.end(String(fovMap));

})


function calculateHFOV(sensorPitch, sensorSizetWidth, focalLength) {
    hfov = 2 * Math.atan((sensorPitch * sensorSizetWidth) / (2 * 1000 * focalLength)) * 180 / Math.PI;
    return hfov;
}

function calculateVFOV(hfov, sensorSizetHeight, sensorSizetWidth) {
    vfov = hfov * (sensorSizetHeight / sensorSizetWidth);
    return vfov;
}

function calculateIFOV(sensorPitch, focalLength) {
    ifov = sensorPitch / (focalLength * 1000);
    return ifov;
}