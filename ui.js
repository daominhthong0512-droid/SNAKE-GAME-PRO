//============================
// UI
//============================

let score = 0;

let bestScore = Number(localStorage.getItem("snakeBest")) || 0;

// Các phần tử HTML
const scoreText = document.getElementById("score");
const bestText = document.getElementById("best");

const menu = document.getElementById("menu");
const hud = document.getElementById("hud");
const gameOverBox = document.getElementById("gameOver");

const finalScore = document.getElementById("finalScore");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

// Hiển thị điểm
function updateScore(){

    scoreText.textContent = score;

    if(score > bestScore){

        bestScore = score;

        localStorage.setItem("snakeBest",bestScore);

    }

    bestText.textContent = bestScore;

}

// Bắt đầu game
function startGame(){

    menu.style.display = "none";

    gameOverBox.style.display = "none";

    hud.style.display = "flex";

    canvas.style.display = "block";
    gameRunning = true;

}

// Game Over
function showGameOver(){

    gameRunning = false;

    finalScore.innerHTML =
        "Điểm của bạn : <b>" + score + "</b>";

    gameOverBox.style.display = "block";

}

// Chơi lại
function restartGame(){

    score = 0;

    updateScore();

    createSnake();

    spawnFood();

    direction = "RIGHT";

    nextDirection = "RIGHT";

    gameRunning = true;

    gameOverBox.style.display = "none";

}

// Gán sự kiện
startBtn.onclick = () => {

    startGame();

};

restartBtn.onclick = () => {

    restartGame();

};