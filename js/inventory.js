
import { objectList } from "./gameLogic.js";
import { Platform, LongPlatform, Spring } from "./objects/placeables.js";

const inventory = {
    itemCount: 0,
    itemList: [{
        x: 0,
        y: 0,
        with: 0,
        height: 0,
        color: 0,
        id: ''}],
    x: 0,
    y: 0,
    mouseX: 0,
    mouseY: 0,
    onItem: null,
    totalWidth: 0,
    height: 80,
    startingItems: [{}]
}

function resetItemPositions(){
    let x = inventory.x + 20

    inventory.itemList.forEach((item) => {
        item.x = x
        x += item.width + 20
    })
    
    inventory.totalWidth = x
}

export function setInventory(items) {
    inventory.onItem = null;
    inventory.startingItems = [...items];
    let x = inventory.x + 20; 
    inventory.itemCount = items.length

    inventory.itemList = items.map(item => {
        const invItem = {
            x,
            y: inventory.height / 2 - item.height / 2,
            width: item.width,
            height: item.height,
            id: item.id,
            color: item.color
        };
        x += item.width + 20;
        return invItem;
    });
    inventory.totalWidth = x
}


export function inventoryMouseDown(x ,y) {
    inventory.itemList.forEach(item => {
        if (
            x >= item.x &&
            x <= item.x + item.width &&
            y >= item.y &&
            y <= item.y + item.height
        ) {
            inventory.onItem = item;
        }
    });
}

export function itemReleased() {
    if (!inventory.onItem) return;

    const index = inventory.itemList.indexOf(inventory.onItem);
    if (index !== -1) {
        inventory.itemList.splice(index, 1);
        inventory.itemCount--;
        resetItemPositions();
    }

    let worldObject;

    if (inventory.onItem.id === '01') {
        worldObject = new Platform(
            inventory.onItem.x,
            inventory.onItem.y
        );
    }
    if (inventory.onItem.id === '02') {
        worldObject = new LongPlatform(
            inventory.onItem.x,
            inventory.onItem.y
        );
    }
    if (inventory.onItem.id === '03') {
        worldObject = new Spring(
            inventory.onItem.x,
            inventory.onItem.y
        );
    }
    objectList.push(worldObject);
    inventory.onItem = null;
}

export function setMouseInInventory(x,y) {
    if (inventory.onItem) {
        inventory.onItem.x = x - inventory.onItem.width / 2;
        inventory.onItem.y = y - inventory.onItem.height / 2;
    }
}
export function drawInventory (ctx) {
    if (inventory.itemCount)
    {
        ctx.fillStyle = 'rgba(0,0,0,.4)'
        ctx.fillRect(inventory.x,inventory.y,inventory.totalWidth, inventory.height)
    }

    inventory.itemList.forEach((item) => {
    item === inventory.onItem ? ctx.fillStyle = 'rgba(0,0,0,.4)' : ctx.fillStyle = item.color
    ctx.fillRect(item.x, item.y, item.width, item.height)
    })

}