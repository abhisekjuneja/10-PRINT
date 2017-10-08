let sketchHolder = document.getElementById('sketch-holder');
let scaleFactor = 50;
let xPos = 0;
let yPos = 0;
let stochasticFactor = 0.5

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  var params = getURLParams();
  if(params.scaleFactor != null)
    scaleFactor = Number(params.scaleFactor);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeWeight(scaleFactor / 5)
  noFill();
  if(yPos < height)
    drawPattern();
}

function drawPattern() {
  if (random(1) < stochasticFactor) {
    line(xPos, yPos, xPos + scaleFactor, yPos + scaleFactor);
  }
  else {
    line(xPos, yPos + scaleFactor, xPos + scaleFactor, yPos);
  }
  xPos += scaleFactor;
  if (xPos >= width) {
    xPos = 0;
    yPos += scaleFactor;
  }
}