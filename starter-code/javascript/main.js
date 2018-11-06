var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
setInterval(console.log(printTime(),1000))

function printTime() {
    console.log(printMinutes(), printSeconds())
}

function printMinutes() {
    minUni = chronometer.setMinutes[0]
    minDec = chronometer.setMinutes[1]
}

function printSeconds() {
    chronometer.setSeconds
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    chronometer.startClick()
    var cambia = document.getElementById("btnLeft")
    if (cambia.innerText === 'START') {
        cambia.innerText = 'STOP'
    }
    else if (cambia.innerText === 'STOP') {
        cambia.innerText = 'START'

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
