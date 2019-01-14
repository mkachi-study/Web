var keycode = document.getElementById("keycode");
var mousecode = document.getElementById("mousecode");
var mousePosition = document.getElementById("mouse-position");
var mouseWheelDelta = document.getElementById("mouse-wheel");

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

document.addEventListener("mousedown", mouseDown, false);
document.addEventListener("mouseup", mouseUp, false);
document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("mousewheel", mouseWheel, false);

// Firefox
document.addEventListener("DOMMouseScroll", mouseWheel, false);

function keyDown(event) {
    keycode.innerText = "KeyDown : " + event.keyCode.toString();
}

function keyUp(event) {
    keycode.innerText = "KeyUp : " + event.keyCode.toString();
}

function mouseDown(event) {
    switch (event.which) {
        case 1:
            mousecode.innerText = "Left mouse button down";
            break;
        case 2:
            mousecode.innerText = "Middle mouse button down";
            break;
        case 3:
            mousecode.innerText = "Right mouse button down";
            break;
        default:
            mousecode.innerText = "WTF!";
            break;
    }
}
d
function mouseUp(event) {
    switch (event.which) {
        case 1:
            mousecode.innerText = "Left mouse button up";
            break;
        case 2:
            mousecode.innerText = "Middle mouse button up";
            break;
        case 3:
            mousecode.innerText = "Right mouse button up";
            break;
        default:
            mousecode.innerText = "WTF!";
            break;
    }
}

function mouseMove(event) {
    mousePosition.innerText = "X : " + event.clientX.toString() + " Y : " + event.clientY.toString();
}

function mouseWheel(event) {
    if (!event) {
        event = window.event;
    }

    var delta = 0;
    if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
    } else if (event.detail) {
        delta = -event.detail / 3;
    }
    mouseWheelDelta.innerText = "Mouse wheel delta : " + delta.toString();
}