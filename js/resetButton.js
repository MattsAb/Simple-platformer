import { currentLevel } from "./gameLogic.js";

const button = {
    x: 0,
    y: 10,
    width: 100,
    height: 50,
    color: "#a81212"
}

function MouseInBounds(x, y) {
    if (
    x >= button.x &&
    x <= button.x + button.width &&
    y >= button.y &&
    y <= button.y + button.height
    ) 
    {
        return true;
    }
    button.color = "#a81212";
}

export function isButtonReleased (x, y) {
    if (MouseInBounds(x,y))
    {
        currentLevel.load()
        button.color = "#a81212";
    }
}

export function isButtonClicked(x,y) {
    if(MouseInBounds(x,y))
    {
        button.color = "rgba(168, 18, 18,.5)"
    }
}


export function drawButton(ctx, canvas) {

    button.x = canvas.width - 110


  ctx.fillStyle = button.color;
  ctx.fillRect(button.x, button.y, button.width, button.height);


  ctx.fillStyle = "white";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Restart", button.x + button.width / 2, button.y + button.height / 2);
}