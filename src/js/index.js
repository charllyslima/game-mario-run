import "../css/style.scss";
import "../css/interactions.scss";

const floorPt1 = document.querySelector("#floor-pt1");
const floorPt2 = document.querySelector("#floor-pt2");

const buttonStart = document.querySelector("#start");
const buttonSound = document.querySelector("#sound");

const audioTheme = document.querySelector("#theme-song");
const audioPipe = document.querySelector("#pipe");
const audioJump = document.querySelector("#jump");
const audioMarioDie = document.querySelector("#mario-die");

const mario = document.querySelector("#mario");

window.addEventListener("load", function () {
    buttonStart.addEventListener("click", start);
    buttonSound.addEventListener("click", soundOnOff);
    document.addEventListener("keydown", jump);
});

const start = () => {
    floorPt1.classList.add("floor-move-pt1");
    floorPt2.classList.add("floor-move-pt2");
};

const soundOnOff = () => {
    if (buttonSound.classList.contains("fa-volume-high")) {
        buttonSound.classList.remove("fa-volume-high");
        buttonSound.classList.add("fa-volume-xmark");
        audioTheme.pause();
    } else {
        buttonSound.classList.add("fa-volume-high");
        buttonSound.classList.remove("fa-volume-xmark");
        audioTheme.play();
    }
};

const jump = () => {
    if (!mario.classList.contains("jump")) {
        mario.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
        }, 500);
    }
};
