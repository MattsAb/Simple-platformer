import { updatePlayer, checkPlayerCollision} from "./player.js";
import { drawInventory } from "./inventory.js";
import { drawButton } from "./resetButton.js";
import { LevelList } from "./levels/levelList.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export const objectList = [];
export let currentLevel = LevelList[0];

currentLevel.load()
let levelIndex = 1;

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    if (currentLevel)
    {
        clear();

        checkPlayerCollision(objectList);
        updatePlayer(ctx, canvas);

        objectList.forEach((item) => {item.draw(ctx)});
        drawInventory(ctx);
        drawButton(ctx, canvas)

        requestAnimationFrame(update);

    }
}

update();

export function setNextLevel(){
    currentLevel = LevelList[levelIndex++];
    if (!currentLevel)
    {
        ctx.fillStyle = "black";
        ctx.font = "32px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
            "You Win",
            canvas.width/2,
            canvas.height/2
  );
    }
    else{
        currentLevel.load()
    }

}
