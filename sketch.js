let canvas;
let current_tool = 'pencil';
let current_color = '#000000';
let current_thickness = 5;

function setup() {
    const canvas_width = min(710, windowWidth * 0.9);
    canvas = createCanvas(canvas_width, 400);
    canvas.parent('paper');
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        strokeWeight(current_thickness);

        if (current_tool === 'pencil') {
            stroke(current_color);
        } else if (current_tool === 'eraser') {
            stroke(255);
        }

        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }
}

function windowResized() {
    const canvas_width = min(710, windowWidth * 0.9);
    resizeCanvas(canvas_width, 400);
}


document.getElementById('color-picker').addEventListener('input', (event) => {
    current_color = event.target.value;
    current_tool = 'pencil';
    document.getElementById('color-circle').style.backgroundColor = current_color;
});

document.getElementById('thickness-slider').addEventListener('input', (event) => {
    current_thickness = parseInt(event.target.value, 10);
    document.getElementById('thickness-slider').style.height = current_thickness;    
});

document.getElementById('pencil-tool').addEventListener('click', () => {
    current_tool = 'pencil';
});

document.getElementById('eraser-tool').addEventListener('click', () => {
    current_tool = 'eraser';
});

document.getElementById('clear-canvas').addEventListener('click', () => {
    background(255);
});

function touchMoved() {
    return false;
}
