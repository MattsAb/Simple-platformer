
import { objectList } from "./gameLogic.js";
import { Platform, LongPlatform, Spring } from "./placeables.js";

const inventory = {
    itemCount: 0,
    itemList: [{
        x: 0,
        y: 0,
        with: 0,
        height: 0,
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

export function setInventory(items) {
    inventory.startingItems = [...items];
    let x = inventory.x + 20; 
    inventory.itemCount = items.length

    inventory.itemList = items.map(item => {
        const invItem = {
            x,
            y: inventory.height / 2 - item.height / 2,
            width: item.width,
            height: item.height,
            id: item.id
        };
        x += item.width + 20;
        return invItem;
    });
    inventory.totalWidth = x
}

export function resetInventory(){
    setInventory(inventory.startingItems)
}



function mouseDown(e) {
    inventory.itemList.forEach(item => {
        if (
            inventory.mouseX >= item.x &&
            inventory.mouseX <= item.x + item.width &&
            inventory.mouseY >= item.y &&
            inventory.mouseY <= item.y + item.height
        ) {
            inventory.onItem = item;
        }
    });
}



function mouseUp() {
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


function setMouse(e) {
    const rect = canvas.getBoundingClientRect();

    inventory.mouseX = e.clientX - rect.left;
    inventory.mouseY = e.clientY - rect.top;

    if (inventory.onItem) {
        inventory.onItem.x = inventory.mouseX - inventory.onItem.width / 2;
        inventory.onItem.y = inventory.mouseY - inventory.onItem.height / 2;
    }
}

function resetItemPositions(){
    let x = inventory.x + 20

    inventory.itemList.forEach((item) => {
        item.x = x
        x += item.width + 20
    })
    
    inventory.totalWidth = x
}

export function drawInventory (ctx) {
    ctx.fillStyle = 'rgba(0,0,0,.4)'
    inventory.itemCount ? ctx.fillRect(inventory.x,inventory.y,inventory.totalWidth, inventory.height) : 0



    inventory.itemList.forEach((item) => {
    item === inventory.onItem ? ctx.fillStyle = 'rgba(0,0,0,.4)' : ctx.fillStyle = 'black'
    ctx.fillRect(item.x, item.y, item.width, item.height)
    })

}

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', setMouse);
canvas.addEventListener('mouseup', mouseUp);
