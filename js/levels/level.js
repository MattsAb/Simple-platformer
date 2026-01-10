import { objectList } from "../gameLogic.js";
import { setInventory } from "../inventory.js";
import { setSpawn } from "../player.js";

export class Level {
    constructor(levelObjects = [], levelItems = [], playerSpawn) {
        this.levelObjects = levelObjects;
        this.levelItems = levelItems;
        this.playerSpawn = playerSpawn;
    }

    load() {

        objectList.length = 0;

        this.levelObjects.forEach(obj => {
            objectList.push(obj);
        });

        setInventory(this.levelItems);

        setSpawn(this.playerSpawn.x, this.playerSpawn.y);
    }
}
