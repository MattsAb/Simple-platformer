import { setMouseInInventory, inventoryMouseDown, itemReleased } from "./inventory.js";
import { isButtonClicked, isButtonReleased } from "./resetButton.js";

const mouse = {
    x: 0,
    y: 0
}

function mouseUp() {
    itemReleased()
    isButtonReleased(mouse.x, mouse.y)
}

function mouseDown() {
    inventoryMouseDown(mouse.x, mouse.y)
    isButtonClicked(mouse.x, mouse.y)
}

function setMouse(e) {
    const rect = canvas.getBoundingClientRect();

    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    setMouseInInventory(mouse.x,mouse.y)
}

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', setMouse);
canvas.addEventListener('mouseup', mouseUp);
