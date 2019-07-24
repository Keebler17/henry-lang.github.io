var size = Number(prompt("How big do you want each grid square?"));
var grid = [];
var w;
var h;
var c;

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function setup() {
    w = Number(prompt("How wide is your image?"));
    h = Number(prompt("How tall is your image?"));
    c = new Color(255, 255, 255);
    createCanvas(w * size, h * size);
    for(var x = 0; x < w; x++) {
        grid.push([]);
        for(var y = 0; y < h; y++) {
            grid[x].push(new Color(255, 255, 255));
        }
    }
}

function draw() {
    background(0);
    stroke(0);
    for(var x = 0; x < grid.length; x++) {
        for(var y = 0; y < grid[x].length; y++) {
            var r = grid[x][y].r;
            var g = grid[x][y].g;
            var b = grid[x][y].b;
            if(dist(mouseX, mouseY, x * size + size / 2, y * size + size / 2) <= size / 2) {
                if(mouseX >= x * size && mouseX <= x * size + size && mouseY >= y * size && mouseY <= y * size + size) {
                    if(r >= 20) {
                        r -= 20;
                    } else {
                        r = 0;
                    }
                    if(g >= 20) {
                        g -= 20;
                    } else {
                        g = 0;
                    }
                    if(b >= 20) {
                        b -= 20;
                    } else {
                        b = 0;
                    }
                    if(mouseIsPressed) {
                        grid[x][y] = new Color(c.r, c.g, c.b);
                    }
                }
            }
            fill(r, g, b);
            rect(x * size, y * size, x * size + size, y * size + size);
        }
    }
}

var sliderR = document.getElementById("r");
var sliderG = document.getElementById("g");
var sliderB = document.getElementById("b");
var spanR = document.getElementById("r-disp");
var spanG = document.getElementById("g-disp");
var spanB = document.getElementById("b-disp");
var sample = document.getElementById("sample");

sliderR.oninput = function() {
    spanR.innerHTML = this.value;
    sample.style.backgroundColor = "rgb(" + spanR.innerHTML + ", " + spanG.innerHTML + ", " + spanB.innerHTML + ")";
    c = new Color(spanR.innerHTML, spanG.innerHTML, spanB.innerHTML);
}

sliderG.oninput = function() {
    spanG.innerHTML = this.value;
    sample.style.backgroundColor = "rgb(" + spanR.innerHTML + ", " + spanG.innerHTML + ", " + spanB.innerHTML + ")";
    c = new Color(spanR.innerHTML, spanG.innerHTML, spanB.innerHTML);
}

sliderB.oninput = function() {
    spanB.innerHTML = this.value;
    sample.style.backgroundColor = "rgb(" + spanR.innerHTML + ", " + spanG.innerHTML + ", " + spanB.innerHTML + ")";
    c = new Color(spanR.innerHTML, spanG.innerHTML, spanB.innerHTML);
}