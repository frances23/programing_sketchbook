// Brightness to fill arcs with
let b = 0;

// Setting angle and angle speed
let angle = 0;
let angleSpeed = 0.05;

// Arrays to hold the drawing data
let xValues = [];
let yValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
  cursor(CROSS)
  rectMode(CENTER)
}

function draw() {
  background(255);

  // Colour will change over time
  b = b + 1; 
  if (b >= 100 ){
    b = 0;
  }

  // Setting the arc to just be a line and the weight 
  noFill()
  strokeWeight(25)
  stroke(120, 50, b)

  if (mouseIsPressed){
    // Store the x and y postion in the arrays
    xValues.push(mouseX);
    yValues.push(mouseY);
  }

  // Draw over the line data and draw to screen
  for (let i = 0; i < xValues.length; i++){
    let x = xValues[i];
    let y = yValues[i];
    
    push()
    translate (mouseX, mouseY);
    rotate(radians(angle));
    circle(x, y, 20)
    angle += angleSpeed;
    pop()
  }

}
