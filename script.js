/*
========================================================

                10 Month Anniversary ❤️

Story Flow

① Anniversary Lock
        ↓
② Fingerprint Scan
        ↓
③ Flower Bloom
        ↓
④ White Fade
        ↓
⑤ Explore Our Home
        ↓
⑥ Door Bell
        ↓
⑦ Front Door
        ↓
⑧ Living Room
        ↓
⑨ Bedroom
        ↓
⑩ Final Surprise

========================================================
*/

// ========================================================
// Story Variables
// ========================================================

let doorBellRang = false;


// ========================================================
// Camera Variables
// ========================================================

let currentX = 0;
let currentY = 0;

let targetX = 0;
let targetY = 0;

let startTouchX = 0;
let startTouchY = 0;

let startCameraX = 0;
let startCameraY = 0;

const maxMoveX = 140;
const maxMoveY = 0;


// ========================================================
// DOM Elements
// ========================================================

// Lock

// ========================================================
// Chapter 1 - Anniversary Lock
// ========================================================

const input = document.getElementById("dateInput");
const buttons = document.querySelectorAll(".num-btn");
const fingerprintBtn = document.getElementById("fingerprintBtn");


// ========================================================
// Chapter 3 - Flower Animation
// ========================================================

const flowerOverlay = document.getElementById("flowerOverlay");
const leftFlowers = document.querySelector(".leftFlowers");
const rightFlowers = document.querySelector(".rightFlowers");
const fadeScreen = document.getElementById("fadeScreen");


// ========================================================
// Chapter 5 - House Exploration
// ========================================================

const lockScreen = document.getElementById("lockScreen");
const houseScene = document.getElementById("houseScene");
const houseMenu = document.getElementById("houseMenu");

const scene = document.getElementById("scene");
const rooms = document.querySelectorAll(".room");


// ========================================================
// Chapter 6 - Door
// ========================================================

const openDoor = document.getElementById("openDoor");


// ========================================================
// Chapter 7 - Scene 1
// ========================================================

const scene1Video = document.getElementById("scene1Video");


// ========================================================
// Chapter 8 - Thank Scene
// ========================================================

const thankScene = document.getElementById("thankScene");
const thankImage = document.getElementById("thankImage");
const thanksButton = document.getElementById("thanksButton");


// ========================================================
// Chapter 9 - Scene 2
// ========================================================

const scene2Video = document.getElementById("scene2Video");


// ========================================================
// Chapter 10 - Scene 3
// ========================================================

const scene3Video = document.getElementById("scene3Video");


// ========================================================
// Chapter 11 - Scene 4
// ========================================================

const cookScene = document.getElementById("cookScene");
const cookButton = document.getElementById("cookButton");

const scene4Video = document.getElementById("scene4Video");
const scene4Hold = document.getElementById("scene4Hold");
const scene4Button = document.getElementById("scene4Button");


// ========================================================
// Chapter 12 - Scene 5
// ========================================================

const scene5Video = document.getElementById("scene5Video");
const scene5Hold = document.getElementById("scene5Hold");
const scene5Button = document.getElementById("scene5Button");


// ========================================================
// Chapter 13 - Scene 6
// ========================================================

const scene6Hold = document.getElementById("scene6Hold");
const readNoteButton = document.getElementById("readNoteButton");
const scene6Video = document.getElementById("scene6Video");

const scene7Video = document.getElementById("scene7Video");
const scene7Hold = document.getElementById("scene7Hold");
const scene8Button = document.getElementById("scene8Button");
const scene8Video = document.getElementById("scene8Video");
const endingScreen = document.getElementById("endingScreen");
const replayButton = document.getElementById("replayButton");
// Audio

const doorBell = new Audio("audio/DoorBell.mp3");
const jazzMusic = new Audio("audio/Jazz.mp3");

jazzMusic.loop = true;

jazzMusic.volume = 0.15;
// Password

const correctDate = "5/7/2026";


// ========================================================
// Initialize Game
// ========================================================

function initializeGame(){

    lockScreen.style.display = "block";

    houseScene.style.display = "none";
    houseMenu.style.display = "none";

    fadeScreen.style.opacity = "0";

    flowerOverlay.style.opacity = "1";

    fingerprintBtn.disabled = true;

    openDoor.classList.remove("show");

    scene1Video.style.display = "none";

    thankScene.style.display = "none";

    scene2Video.style.display = "none";

}

initializeGame();


// ========================================================
// Chapter 1 - Anniversary Lock
// ========================================================

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(input.value.length >= correctDate.length){

            return;

        }

        input.value += button.dataset.value;

        if(input.value.length !== correctDate.length){

            return;

        }

        if(input.value === correctDate){

            fingerprintBtn.disabled = false;

            fingerprintBtn.classList.add("active");

            playScanSound();

        }

        else{

            input.classList.add("shake");

            setTimeout(()=>{

                input.classList.remove("shake");

                input.value = "";

            },500);

        }

    });

});


// ========================================================
// Chapter 2 - Fingerprint
// ========================================================

fingerprintBtn.addEventListener("click",()=>{

    fingerprintBtn.disabled = true;

    playFlowerAnimation();

});


// ========================================================
// Chapter 3 - Flower Animation
// ========================================================

function playFlowerAnimation(){

    leftFlowers.style.animation = "leftBloom 2s forwards";

    rightFlowers.style.animation = "rightBloom 2s forwards";

    setTimeout(()=>{

        fadeScreen.style.opacity = "1";

    },1500);

    setTimeout(()=>{

        flowerOverlay.style.opacity = "0";

    },2500);

    setTimeout(()=>{

        lockScreen.style.display = "none";

        houseScene.style.display = "block";

        houseMenu.style.display = "block";

        startDoorBellTimer();

        
        jazzMusic.pause();

    },2600);

    setTimeout(()=>{

        fadeScreen.style.opacity = "0";

    },3400);

}


// ========================================================
// Chapter 4 - White Transition
// ========================================================

// Ready for future scenes.

// ========================================================
// Chapter 5 - House Exploration
// ========================================================

rooms.forEach(room=>{

    room.addEventListener("click",()=>{

        // -------------------------------
        // Highlight current room
        // -------------------------------

        rooms.forEach(r=>r.classList.remove("active"));

        room.classList.add("active");

        room.classList.remove("bell");

        jazzMusic.play();


        // -------------------------------
        // OPEN button
        // -------------------------------

        if(
            room.dataset.scene === "Cam1_Door.png" &&
            doorBellRang
        ){

            setTimeout(()=>{

                openDoor.classList.add("show");

            },1500);

        }

        else{

            openDoor.classList.remove("show");

        }



        // -------------------------------
        // Fade current room
        // -------------------------------

        scene.style.opacity = "0";



        // -------------------------------
        // Reset camera
        // -------------------------------

        targetX = 0;
        targetY = 0;



        // -------------------------------
        // Change image
        // -------------------------------

        setTimeout(()=>{

            scene.src = "images/" + room.dataset.scene;

        },700);



        // -------------------------------
        // Fade back in
        // -------------------------------

        scene.onload = ()=>{

            scene.style.opacity = "1";

        };

    });

});



// ========================================================
// Chapter 5.1 - Camera Movement
// ========================================================

// ---------- Desktop ----------

houseScene.addEventListener("mousemove",(e)=>{

    const rect = houseScene.getBoundingClientRect();

    const percentX =
        (e.clientX - rect.left) / rect.width;

    const percentY =
        (e.clientY - rect.top) / rect.height;

    targetX =
        (percentX - .5) * maxMoveX * 2;

    targetY =
        (percentY - .5) * maxMoveY * 2;

});



// ---------- Tablet / Phone ----------

houseScene.addEventListener("touchstart",(e)=>{

    startTouchX = e.touches[0].clientX;
    startTouchY = e.touches[0].clientY;

    startCameraX = targetX;
    startCameraY = targetY;

});



houseScene.addEventListener("touchmove",(e)=>{

    e.preventDefault();

    const deltaX =
        e.touches[0].clientX - startTouchX;

    const deltaY =
        e.touches[0].clientY - startTouchY;

    targetX = startCameraX - deltaX;
    targetY = startCameraY - deltaY;

    targetX =
        Math.max(-maxMoveX,
        Math.min(maxMoveX,targetX));

    targetY =
        Math.max(-maxMoveY,
        Math.min(maxMoveY,targetY));

},{passive:false});



// ---------- Smooth Camera ----------

function animateCamera(){

    currentX +=
        (targetX-currentX)*0.08;

    currentY +=
        (targetY-currentY)*0.08;

    scene.style.transform =

    `translate(
        calc(-50% - ${currentX}px),
        calc(-50% - ${currentY}px)
    )`;

    requestAnimationFrame(animateCamera);

}

animateCamera();



// ========================================================
// Chapter 6 - Door Bell
// ========================================================

function startDoorBellTimer(){

    // 2 minutes

    setTimeout(()=>{

        ringDoorBell();

    },22000);

}



function ringDoorBell(){

    doorBellRang = true;



    // Ring twice

    doorBell.currentTime = 0;
    doorBell.play();

    setTimeout(()=>{

        doorBell.currentTime = 0;

        doorBell.play();

    },2000);



    // Glow Door menu

    setTimeout(()=>{

        const doorRoom = document.querySelector(

            '.room[data-scene="Cam1_Door.png"]'

        );

        doorRoom.classList.add("bell");

    },1800);

}



// ========================================================
// Chapter 6.1 - OPEN Door
// ========================================================

openDoor.addEventListener("click",()=>{

    openDoor.classList.remove("show");

    houseMenu.style.display = "none";

    houseScene.style.display = "none";



    scene1Video.style.display = "block";

    scene1Video.currentTime = 0;

    scene1Video.play();

});

// ========================================================
// Chapter 7 - Scene 1
// ========================================================

scene1Video.onended = () => {

    scene1Video.style.display = "none";

    thankScene.style.display = "block";

    thanksButton.classList.remove("show");

    setTimeout(()=>{

        thanksButton.classList.add("show");

    },1000);

};



// ========================================================
// Chapter 7.1 - Thanks Koko
// ========================================================

thanksButton.addEventListener("click",()=>{

    thanksButton.classList.remove("show");

    setTimeout(()=>{

        thankScene.style.display = "none";

        scene2Video.style.display = "block";

        scene2Video.currentTime = 0;

        scene2Video.play();

    },300);

});



// ========================================================
// Chapter 8 - Scene 2
// ========================================================

scene2Video.onended = () => {

    scene2Video.style.display = "none";

    // ==================================================
    // Future:
    // Living Room Story Starts Here
    // ==================================================

};

scene2Video.onended = ()=>{

    fadeScreen.style.opacity = "1";

    setTimeout(()=>{

        scene2Video.style.display = "none";

        scene3Video.style.display = "block";

        scene3Video.play();

    },1000);

    setTimeout(()=>{

        fadeScreen.style.opacity = "0";

    },1600);

};

scene3Video.onended = ()=>{

    scene3Video.style.display = "none";

    cookScene.style.display = "block";

    setTimeout(()=>{

        cookButton.classList.add("show");

    },1000);

};

cookButton.addEventListener("click",()=>{

    cookButton.classList.remove("show");

    cookScene.style.display = "none";

    scene4Video.style.display = "block";

    scene4Video.play();

});

scene4Video.onended = ()=>{

    scene4Video.style.display = "none";

    scene4Hold.style.display = "block";

    setTimeout(()=>{

        scene4Button.classList.add("show");

    },1000);

};

scene4Button.addEventListener("click",()=>{

    scene4Button.classList.remove("show");

    setTimeout(()=>{

        scene4Hold.style.display = "none";

        scene5Video.style.display = "block";

        scene5Video.currentTime = 0;

        scene5Video.play();

    },300);

});

scene5Video.onended = ()=>{

    scene5Video.style.display = "none";

    scene5Hold.style.display = "block";

    setTimeout(()=>{

        scene5Button.classList.add("show");

    },1000);

};
scene5Button.addEventListener("click",()=>{

    scene5Button.classList.remove("show");

    setTimeout(()=>{

        scene5Hold.style.display="none";

        scene6Hold.style.display="block";

        setTimeout(()=>{

            readNoteButton.classList.add("show");

        },1000);

    },300);

});
readNoteButton.addEventListener("click",()=>{

    readNoteButton.classList.remove("show");

    scene6Hold.style.display="none";

    scene6Video.style.display="block";

    scene6Video.currentTime=0;

    scene6Video.play();

});

scene6Video.onended=()=>{

    scene6Video.style.display="none";

    scene6Hold.style.display="block";

    readNoteButton.classList.remove("show");

    setTimeout(()=>{

        scene7Button.classList.add("show");

    },1000);

};

scene7Button.addEventListener("click",()=>{

    scene7Button.classList.remove("show");

    setTimeout(()=>{

        scene6Hold.style.display="none";

        scene7Video.style.display="block";

        scene7Video.currentTime = 0;
        jazzMusic.pause();

        scene7Video.play();

    },300);

});

scene7Video.onended = ()=>{

    scene7Video.style.display="none";

    scene7Hold.style.display="block";
     jazzMusic.play();


    setTimeout(()=>{

        scene8Button.classList.add("show");

    },1000);

};

scene8Button.addEventListener("click",()=>{

    scene8Button.classList.remove("show");

    setTimeout(()=>{

        scene7Hold.style.display="none";

        scene8Video.style.display="block";

        scene8Video.currentTime=0;

        scene8Video.play();

    },300);

});
scene8Video.onended = ()=>{

    fadeScreen.style.opacity="1";

    setTimeout(()=>{

        scene8Video.style.display="none";

    },800);

    setTimeout(()=>{

        fadeScreen.style.opacity="0";

        endingScreen.style.display="flex";

    },1800);

};
replayButton.addEventListener("click",()=>{

    location.reload();

});

// ========================================================
// Audio
// ========================================================

function playScanSound(){

    const scanSound = new Audio("audio/scan.mp3");

    scanSound.volume = 1;

    scanSound.play();

    setTimeout(()=>{

        const fade = setInterval(()=>{

            if(scanSound.volume > 0.05){

                scanSound.volume -= 0.05;

            }

            else{

                clearInterval(fade);

                scanSound.pause();

                scanSound.currentTime = 0;

                scanSound.volume = 1;

            }

        },100);

    },5000);

}



// ========================================================
// Flower Particles
// ========================================================

for(let i=0;i<120;i++){

    const flower = document.createElement("img");

    flower.src = "images/flower.png";

    flower.className = "flower";

    flower.style.left =
        Math.random()*100 + "%";

    flower.style.top =
        Math.random()*100 + "%";

    const size =
        120 + Math.random()*180;

    flower.style.width =
        size + "px";

    flower.style.animationDelay =
        (i*0.03) + "s";

    flowerOverlay.appendChild(flower);

}



// ========================================================
// Utility Functions
// ========================================================

// Future utility functions go here.