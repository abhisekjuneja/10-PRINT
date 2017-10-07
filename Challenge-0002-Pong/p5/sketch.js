function setup() {
    createCanvas(windowWidth * 0.99, windowHeight * 0.99);
}

function windowResized() {
    resizeCanvas(windowWidth * 0.99, windowHeight * 0.99);
}

// Create A Constructor Function for the GamePlay Object
function GamePlay() {
    this.playStatus = false;
    this.togglePlayStatus = function() {
        this.playStatus = !this.playStatus;
    }
}

// Create the Constructor Function For the Pong Sprite  
function Pong(x, y, speed) {
    this.x = x;
    this.y = y;
    this.xSpeed = speed;
    this.ySpeed = speed;
    this.draw = function() {
        fill(255);
        ellipse(this.x, this.y, 15, 15);
    }
    this.animate = function() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        if(this.y > height - 5 || this.y < 0 + 5) {
            this.ySpeed = this.ySpeed * -1;
        }
        if(this.x > width - 5 || this.x < 0 + 5) {
            this.xSpeed = this.xSpeed * -1;
        }
    } 
}

// Create the Constructor Function For the Sticks
function stick(x, y, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.render = function() {
        fill(255);
        rectMode(CENTER);
        t
    }
}

// Checking for Key Presses
function keyPressed() {
    if(keyCode == 32) {
        game.togglePlayStatus();
    }
    console.log(keyCode)
}

// Create a Pong Sprite
var pong = new Pong(200, 200, 3);

// Create a GamePlay Object
var game = new GamePlay(); 

function draw() {
    background(0, 0, 0);
    noStroke();
    // Draw the Play-area Boundaries 
    fill(255, 255, 255, 200);
    rect(0, 0, width, 5);
    rect(0, 0, 5, height);
    rect(0, height - 5, width, 5);
    rect(width - 5, 0, 5, height);
    // Create Divider
    fill(255, 255, 255, 155);
    rect(width/2 , 0, 5, height);
    pong.draw();
    if(game.playStatus) {
        pong.animate();
    }
}