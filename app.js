
let system = [];
let user = [];

let start = false;
let level = 0;
let score = 1;

let btns = ["red","blue","green","yellow"];

let h2 = document.querySelector("h2");

//h2.innerText = `level ${level}`;

document.addEventListener("keydown", () => {
    if(start == false){
        console.log("game is started");
        start = true;
        levelUp();

    }
});

function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },350); 
}

function userFlash(btn) {
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash")
   },350); 
}

function levelUp(){
    user = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.dir(randbtn);
    system.push(randColor);
    console.log(system);

    gameFlash(randbtn);
}

function btnPress() {
    let btn = this;
    console.dir(this);
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    user.push(userColor);

    checkColor(user.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkColor(idx){
    if(user[idx] === system[idx]){
        if(user.length == system.length){
            setTimeout(levelUp, 1000);
        }
        console.log("same value");
    }else{
        fibonacci();
        h2.innerHTML = `game Over! Your score was <b>${score}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

function fibonacci(){
    let n1 = 0;
    let n2 = 1;
    for(let i=1; i<= level; i++){
        score = n1+n2;
        n1 = n2;
        n2 = score;
    }
}

function reset(){
    start = false;
    level = 0;
    user = [];
    system = [];
}


