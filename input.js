//============================
// Input
//============================

let paused = false;

document.addEventListener("keydown", handleKey);

function handleKey(event) {

    const key = event.key.toLowerCase();

    switch (key) {

        // Lên
        case "arrowup":
        case "w":
            setDirection("UP");
            break;

        // Xuống
        case "arrowdown":
        case "s":
            setDirection("DOWN");
            break;

        // Trái
        case "arrowleft":
        case "a":
            setDirection("LEFT");
            break;

        // Phải
        case "arrowright":
        case "d":
            setDirection("RIGHT");
            break;

        // Tạm dừng
        case " ":
            paused = !paused;
            break;

    }

}