import { currentLevel } from "./gameLogic.js";
import { setNextLevel } from "./gameLogic.js";

export const player = {
  width: 35,
  height: 60,
  x: 20,
  y: 200,
  leftX: 0,
  rightX: 0,
  dy: 0,
  speed: 2.5,
  jumpPower: 5,
  gravity: 0.1,
  onFloor: false,
  jumpBuffered: false,
  originalX: 0,
  originalY: 0,
};

function keyDown(e) {
  switch (e.key) {
    case "ArrowRight":
      player.rightX = player.speed;
      break;
    case "ArrowLeft":
      player.leftX = -player.speed;
      break;
    case "ArrowUp":
          player.jumpBuffered = true;
      break;
  }
}

function keyUp(e) {
  switch (e.key) {
    case "ArrowRight":
      player.rightX = 0;
      break;
    case "ArrowLeft":
      player.leftX = 0;
      break;
  }
}

function playerInBounds(canvas) {
    if (player.y + player.height > canvas.height)
    {
        player.y = canvas.height - player.height;
        player.onFloor = true;
        player.dy = 0;
    }
    if (player.x + player.width > canvas.width)
    {
        player.x = canvas.width - player.width 
    }
    if (player.x < 0)
    {
        player.x = 0
    }
}

function playerMovement() {
    player.x += player.rightX
    player.x += player.leftX
    player.y += player.dy
}

function playerFall() {
  if (!player.onFloor) {
    player.dy += player.gravity;
  }
}

function resetPlayer() {
  player.x = player.originalX;
  player.y = player.originalY;
  player.leftX = 0;
  player.rightX = 0;
  player.dy = 0;
  currentLevel.load()
}

function drawPlayer(ctx) {
    ctx.fillStyle = "#3b3ec4";
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.width /2, player.width/ 2, Math.PI, 0);
    ctx.lineTo(player.x +player.width, player.y + player.height)
    ctx.lineTo(player.x, player.y + player.height)
    ctx.lineTo(player.x, player.y + player.width / 2)
    ctx.closePath();
    ctx.fill();
}

export function checkPlayerCollision(objects) {
  player.onFloor = false;

  const prevY = player.y - player.dy;

  for (const obj of objects) {
    if (
      player.x < obj.x + obj.width &&
      player.x + player.width > obj.x &&
      player.y < obj.y + obj.height &&
      player.y + player.height > obj.y
    ) {
      if (obj.type === "flag") {
        setNextLevel();
        return;
      }

      if (obj.type === "hostile") {
        resetPlayer();
        return;
      }

      //  Bottom
      if (prevY + player.height <= obj.y) {
        player.y = obj.y - player.height;
        player.dy = 0;
        player.onFloor = true;

        if (obj.id === '03') {
          player.dy = -8;
        }
      }
      // Top
      else if (prevY >= obj.y + obj.height) {
        player.y = obj.y + obj.height;
        player.dy = 0;
      }
      // Left
      else if (player.x < obj.x) {
        player.x = obj.x - player.width;
      }
      // Right
      else {
        player.x = obj.x + obj.width;
      }
      if (player.jumpBuffered && player.onFloor) {
      player.dy = -player.jumpPower;
      player.onFloor = false;
      }

      player.jumpBuffered = false;

    }
  }
}

export function setSpawn(x,y)
{
  player.originalX = x;
  player.originalY = y;
  player.x = player.originalX;
  player.y = player.originalY;
}

export function updatePlayer(ctx, canvas) {
    playerFall()
    playerMovement()
    playerInBounds(canvas)
    drawPlayer(ctx)
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
