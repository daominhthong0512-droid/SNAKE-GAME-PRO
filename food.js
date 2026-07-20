//============================
// Food
//============================

let food = {
    x: 10,
    y: 10
};

function spawnFood() {

    let valid = false;

    while (!valid) {

        food.x = Math.floor(Math.random() * 20);
        food.y = Math.floor(Math.random() * 20);

        valid = true;

        for (let part of snake) {

            if (part.x === food.x &&
                part.y === food.y) {

                valid = false;
                break;
            }

        }

    }

}

function drawFood(){

    const px = food.x * GRID_SIZE;
    const py = food.y * GRID_SIZE;

    // Bóng
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.beginPath();
    ctx.ellipse(px+16, py+23, 8, 3, 0, 0, Math.PI*2);
    ctx.fill();

    // Thân quả trứng
    ctx.fillStyle = "#FFF8DC";
    ctx.beginPath();
    ctx.ellipse(px+15, py+15, 10, 13, 0, 0, Math.PI*2);
    ctx.fill();

    // Viền
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#D8D0B0";
    ctx.stroke();

    // Điểm sáng
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    ctx.arc(px+11, py+10, 2, 0, Math.PI*2);
    ctx.fill();

}