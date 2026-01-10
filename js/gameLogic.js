import { updatePlayer, checkPlayerCollision} from "./player.js";
import { drawInventory } from "./inventory.js";
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
    clear();

    checkPlayerCollision(objectList);
    updatePlayer(ctx, canvas);

    objectList.forEach((item) => {item.draw(ctx)});
    drawInventory(ctx);


    requestAnimationFrame(update);
}

update();

export function setNextLevel(){
    currentLevel = LevelList[levelIndex++];
    currentLevel.load()
}
