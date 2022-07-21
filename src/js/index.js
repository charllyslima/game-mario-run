import "../css/style.scss";
import "../css/interactions.scss";

const root = document.querySelector(":root");

const floorPt1 = document.querySelector("#floor-pt1");
const floorPt2 = document.querySelector("#floor-pt2");

const buttonStart = document.querySelector("#start");
const buttonSound = document.querySelector("#sound");

const audioTheme = document.querySelector("#theme-song");
const audioPipe = document.querySelector("#pipe-audio");
const audioJump = document.querySelector("#jump-audio");
const audioMarioDie = document.querySelector("#mario-die-audio");

const mario = document.querySelector("#mario");
const piranhaBean = document.querySelector("#piranha-bean");
const goomba = document.querySelector("#goomba");
const bowser = document.querySelector("#bowser");
const princess = document.querySelector("#princess");
const carnivorousPlant = document.querySelector("#carnivorous-plant");

const controls = document.querySelector(".controls");
const game = document.querySelector(".game");
const score = document.querySelectorAll(".score span");


let atackSpeed = 4000;

window.addEventListener("load", function () {
    buttonStart.addEventListener("click", start);
    buttonSound.addEventListener("click", soundOnOff);
    document.addEventListener("keydown", jump);
});

if (localStorage.getItem("high-score")) {
    score[0].innerHTML = localStorage.getItem("high-score");
}

const start = () => {
    controls.classList.add("hidden");
    game.classList.remove("hidden");

    floorPt1.classList.add("floor-move-pt1");
    floorPt2.classList.add("floor-move-pt2");

    // animation princess running
    princess.classList.remove("hidden");
    bowser.classList.remove("hidden");
    princess.classList.add("running-away");
    bowser.classList.add("chasing");
    game.classList.add("start");

    setTimeout(() => {
        floorPt1.classList.remove("floor-move-pt1");
        floorPt2.classList.remove("floor-move-pt2");

        setTimeout(() => {
            audioPipe.play();
        }, 1500);

        setTimeout(() => {
            mario.style.left = "10%";
            floorPt1.classList.add("floor-move-pt1");
            floorPt2.classList.add("floor-move-pt2");
            setTimeout(() => {
                game.classList.remove("start");
                activateEnemies();
            }, 2000);
        }, 2000);
    }, 4000);
};

const activateEnemies = () => {
    let enemies = [carnivorousPlant, piranhaBean, goomba];
    let enemie = null;
    const loop = setInterval(() => {
        if (enemie != null) {
            enemies[enemie].classList.remove("attack");
        }
        console.log(enemie);
        enemie = getRndInteger(0, 2);
        enemies[enemie].classList.add("attack");

    }, atackSpeed);
};

const point = () => {
    const onlyNumbers = /\d+/g;
    const onlyLetters = /[A-Za-z: ]/g;

    let scoreNumber = +score[1].innerHTML.match(onlyNumbers).join("") + 1;
    let highScoreNumber = +score[0].innerHTML.match(onlyNumbers).join("");

    if (scoreNumber > highScoreNumber) {
        highScore.innerHTML = `${highScore.innerHTML.match(onlyLetters).join("")}${scoreNumber}`;
        localStorage.setItem("high-score", highScore.innerHTML);
    }

    score.innerHTML = `${score.innerHTML.match(onlyLetters).join("")}${scoreNumber}`;
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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
