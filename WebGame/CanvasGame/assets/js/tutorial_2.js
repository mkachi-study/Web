var canvas = document.getElementById("world");
var context = canvas.getContext("2d");

var x = 0;
var y = -30;

function update() {
    x += 2;
    y += 2;
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = "#FFFFFF";
    context.fill();
    context.closePath();
}

function loop() {
    update();
    render();
}

setInterval(loop, 10);