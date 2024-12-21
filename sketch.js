let canvas;
let currentTool = 'pencil';
let currentColor = '#000000'; // Default pencil color
let currentThickness = 5;

function setup() {
    // Create the canvas inside the container
    const canvasContainer = document.querySelector('.can');
    const canvasWidth = canvasContainer.offsetWidth;
    const canvasHeight = canvasContainer.offsetHeight;

    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(canvasContainer);
    background(255); // Set initial background to white
}

function windowResized() {
    const canvasContainer = document.querySelector('.can');
    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    background(255); // Reset background to white when resizing
}

// Event listeners for controls
document.getElementById('color-picker').addEventListener('input', (event) => {
    currentColor = event.target.value;
    currentTool = 'pencil'; // Switch back to pencil when color changes
});

document.getElementById('thickness-slider').addEventListener('input', (event) => {
    currentThickness = event.target.value;
});

// Pencil tool
document.getElementById('pencil-tool').addEventListener('click', () => {
    currentTool = 'pencil';
});

// Eraser tool
document.getElementById('eraser-tool').addEventListener('click', () => {
    currentTool = 'eraser';
});

// Clear canvas
document.getElementById('clear-canvas').addEventListener('click', () => {
    clear();
    background(255); // Reset the canvas to white
});

// Drawing function
function draw() {
    if (mouseIsPressed) {
        strokeWeight(currentThickness);

        if (currentTool === 'pencil') {
            stroke(currentColor); // Use the current color for pencil
        } else if (currentTool === 'eraser') {
            stroke(255); // Use white color to erase
        }

        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            line(pmouseX, pmouseY, mouseX, mouseY); // Draw a line between previous and current mouse positions
        }
    }
}
