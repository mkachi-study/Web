var bgm = new Audio("../assets/audio/bgm.mp3");
bgm.loop = true;
bgm.play();

var effect = new Audio("../assets/audio/se.mp3");
effect.currentTime = 0;

document.addEventListener("keydown", keyDown, false);

function keyDown(event) {
	if (event.keyCode == 32) {
		effect.currentTime = 0;
		effect.play();
	}
}
