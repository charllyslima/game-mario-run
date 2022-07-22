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
const marioDie = document.querySelector("#mario-die");
const piranhaBean = document.querySelector("#piranha-bean");
const goomba = document.querySelector("#goomba");
const bowser = document.querySelector("#bowser");
const princess = document.querySelector("#princess");
const carnivorousPlant = document.querySelector("#carnivorous-plant");

const controls = document.querySelector(".controls");
const game = document.querySelector(".game");
const score = document.querySelectorAll(".score span");

let hitboxDiv = null;
let atackSpeed = 4000;
let isStarted = false;

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
            hitbox();
            floorPt1.classList.add("floor-move-pt1");
            floorPt2.classList.add("floor-move-pt2");
            setTimeout(() => {
                game.classList.remove("start");
                activateEnemies();
                isStarted = true;
            }, 2000);
        }, 2000);
    }, 4000);
};

const activateEnemies = () => {
    let enemies = [carnivorousPlant, piranhaBean, goomba];
    let enemie = null;
    let especialAtack = null;
    const loop = setInterval(() => {
        if (especialAtack) {
            enemies[enemie].classList.remove("jump");
            clearInterval(especialAtack);
        }
        if (!isStarted) {
            clearInterval(loop);
        } else {
            if (enemie != null) {
                if (enemie === 2) {
                    enemies[enemie].classList.remove("special-attack-jump");
                } else if (enemie === 1) {
                    enemies[enemie].classList.remove("special-attack-forward");
                } else {
                    enemies[enemie].classList.remove("attack");
                }

                point();
            }

            enemie = getRndInteger(0, 2);

            if (enemie === 2) {
                enemies[enemie].classList.add("special-attack-jump");
            } else if (enemie === 1) {
                enemies[enemie].classList.add("special-attack-forward");
            } else {
                enemies[enemie].classList.add("attack");
            }
        }
    }, atackSpeed);
};

const hitbox = () => {
    hitboxDiv = document.createElement("div");
    hitboxDiv.id = "hitbox";
    hitboxDiv.style.position = "absolute";
    hitboxDiv.style.bottom = `${mario.clientWidth / 4}px`;
    hitboxDiv.style.width = `${mario.clientWidth / 2}px`;
    hitboxDiv.style.height = `${(mario.clientHeight * 2) / 3}px`;
    //hitboxDiv.style.backgroundColor = "red";
    hitboxDiv.style.borderRadius = "50px";
    hitboxDiv.style.left = "10.5%";

    game.appendChild(hitboxDiv);
};

const isLive = setInterval(() => {
    if (isStarted) {
        if (elementsOverlap(hitboxDiv, carnivorousPlant)) {
            gameOver(carnivorousPlant);
        } else if (elementsOverlap(hitboxDiv, piranhaBean)) {
            gameOver(piranhaBean);
        } else if (elementsOverlap(hitboxDiv, goomba)) {
            gameOver(goomba);
        }
    }
}, 1);

const gameOver = (enemy) => {
    audioMarioDie.play();
    mario.src = marioDie.src;
    enemy.style.right = window.getComputedStyle(enemy).right;
    enemy.style.bottom = window.getComputedStyle(enemy).bottom;
    if (enemy.classList.contains("special-attack-jump")) {
        enemy.classList.remove("special-attack-jump");
    } else {
        enemy.classList.remove("attack");
    }

    floorPt1.classList.remove("floor-move-pt1");
    floorPt2.classList.remove("floor-move-pt2");
    isStarted = false;
    clearInterval(isLive);
};

const point = () => {
    const onlyNumbers = /\d+/g;
    const onlyLetters = /[A-Za-z: ]/g;

    let scoreNumber = +score[1].innerHTML.match(onlyNumbers).join("") + 1;
    let highScoreNumber = +score[0].innerHTML.match(onlyNumbers).join("");

    if (scoreNumber > highScoreNumber) {
        score[0].innerHTML = `${score[0].innerHTML.match(onlyLetters).join("")}${scoreNumber}`;
        localStorage.setItem("high-score", score[0].innerHTML);
    }

    score[1].innerHTML = `${score[1].innerHTML.match(onlyLetters).join("")}${scoreNumber}`;
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
    if (!mario.classList.contains("jump") && isStarted) {
        mario.classList.add("jump");

        hitboxDiv.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
            hitboxDiv.classList.remove("jump");
        }, 500);
    }
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}
