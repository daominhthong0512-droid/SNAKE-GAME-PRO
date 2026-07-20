//============================
// Snake
//============================

const GRID_SIZE = 30;

let snake = [];

let direction = "RIGHT";

let nextDirection = "RIGHT";

function createSnake(){

    snake = [

        {x:5,y:10},

        {x:4,y:10},

        {x:3,y:10}

    ];

}

function setDirection(dir){

    if(dir==="UP" && direction!=="DOWN")
        nextDirection="UP";

    if(dir==="DOWN" && direction!=="UP")
        nextDirection="DOWN";

    if(dir==="LEFT" && direction!=="RIGHT")
        nextDirection="LEFT";

    if(dir==="RIGHT" && direction!=="LEFT")
        nextDirection="RIGHT";

}

function moveSnake(){

    direction = nextDirection;

    const head = {

        x:snake[0].x,

        y:snake[0].y

    };

    switch(direction){

        case "UP":
            head.y--;
            break;

        case "DOWN":
            head.y++;
            break;

        case "LEFT":
            head.x--;
            break;

        case "RIGHT":
            head.x++;
            break;

    }

    snake.unshift(head);

    if(head.x===food.x && head.y===food.y){

        score++;

        updateScore();

        spawnFood();

    }else{

        snake.pop();

    }

}

function drawSnake(){

    snake.forEach((part,index)=>{

        const px = part.x * GRID_SIZE;

        const py = part.y * GRID_SIZE;

        if(index===0){

    // ===== Đầu rắn =====
    ctx.fillStyle="#7CFC00";

    ctx.beginPath();
    ctx.arc(px+15,py+15,13,0,Math.PI*2);
    ctx.fill();

    // Viền
    ctx.lineWidth=2;
    ctx.strokeStyle="#3c8d0d";
    ctx.stroke();

    // Mắt trái
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(px+10,py+11,3,0,Math.PI*2);
    ctx.fill();

    // Mắt phải
    ctx.beginPath();
    ctx.arc(px+20,py+11,3,0,Math.PI*2);
    ctx.fill();

    // Đồng tử
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(px+10,py+11,1.3,0,Math.PI*2);
    ctx.arc(px+20,py+11,1.3,0,Math.PI*2);
    ctx.fill();

    // Mũi
    ctx.fillStyle="#2b5d0a";
    ctx.beginPath();
    ctx.arc(px+15,py+16,1.5,0,Math.PI*2);
    ctx.fill();



}else{

    // Đốt cuối (đuôi)
    if(index === snake.length - 1){

        ctx.fillStyle = "#ff3b30";

        ctx.beginPath();
        ctx.roundRect(px+3, py+3, 24, 24, 7);
        ctx.fill();

    }
    // Thân
    else{

        ctx.fillStyle = "#2ecc71";

        ctx.beginPath();
        ctx.roundRect(px+3, py+3, 24, 24, 7);
        ctx.fill();

    }

}

    });

}

function snakeHitSelf(){

    const head = snake[0];

    for(let i=1;i<snake.length;i++){

        if(head.x===snake[i].x &&
           head.y===snake[i].y){

            return true;

        }

    }

    return false;

}