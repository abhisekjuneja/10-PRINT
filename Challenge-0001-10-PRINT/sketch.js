let sketchHolder = document.getElementById('sketch-holder');
let scaleFactor = 50;
let xPos = 0;
let yPos = 0;
let lineColor = '#ffffff';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  var params = getURLParams();
  console.log(params);
  if(params.scaleFactor != null)
    scaleFactor = Number(params.scaleFactor);
  if(params.lineColor != null)
    lineColor = params.lineColor;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(lineColor);
  strokeWeight(scaleFactor / 5)
  noFill();
  drawPattern();
  console.log();
}

function drawPattern() {
  if (random(1) < 0.5) {
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