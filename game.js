//============================
// GAME
//============================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const COLS = 20;
const ROWS = 20;

let gameRunning = false;

let lastTime = 0;

// Tốc độ game (ms)
let speed = 180;

//============================
// Khởi tạo
//============================

createSnake();
spawnFood();
updateScore();

//============================
// Vẽ nền
//============================

function drawBackground(){

    ctx.fillStyle="#111";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="#222";

    for(let i=0;i<=20;i++){

        ctx.beginPath();
        ctx.moveTo(i*30,0);
        ctx.lineTo(i*30,600);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,i*30);
        ctx.lineTo(600,i*30);
        ctx.stroke();

    }

}

//============================
// Va chạm tường
//============================

function wallCollision(){

    const head = snake[0];

    if(head.x<0) return true;

    if(head.y<0) return true;

    if(head.x>=20) return true;

    if(head.y>=20) return true;

    return false;

}

//============================
// Cập nhật game
//============================

function update(){

    if(!gameRunning) return;

    if(paused) return;

    moveSnake();

    if(wallCollision()){

        showGameOver();

        return;

    }

    if(snakeHitSelf()){

        showGameOver();

        return;

    }

    // Tăng tốc theo chiều dài rắn
speed = 180 - (snake.length - 3) * 5;

// Giới hạn tốc độ nhanh nhất
if (speed < 50) {
    speed = 50;
}

}

//============================
// Vẽ
//============================

function draw(){

    drawBackground();

    drawFood();

    drawSnake();

}

//============================
// Game Loop
//============================

function gameLoop(timestamp){

    if(timestamp-lastTime>speed){

        update();

        draw();

        lastTime=timestamp;

    }

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);