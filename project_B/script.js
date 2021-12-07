let col = "white";
let col1 = "white";
let col2 = "white";
let col3 = "white";
let back = "lightGrey";

function setup(){
  let canvas = createCanvas(windowWidth/2, windowHeight/2);
  canvas.parent("canvasContainer");
}

function draw() {
  background(back);
  bottomPetalButtons();
  middlePetalButtons();
  upperPetalButtons();
  centerPetalButtons();
  flower();
  push();
    fill("white");
    stroke(0);
    strokeWeight(1.75);
    textSize(20);
    textFont("copperplate");
      text('lower petal', 10, 70);
      text('middle petal', 10, 150);
      text('upper petal', 10, 230);
      text('center petal', 10, 310);
  pop();
}

function flower(){
  push();
    translate(windowWidth/4, windowHeight/4);
    fill(col);
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 50, 300);
      rotate(PI/5);
  }
  fill(col1)
   for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 50, 290);
    rotate(PI/4);
  }
  fill(col2)
   for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 50, 270);
    rotate(PI/5);
  }
  fill(col3);
    circle(0, 0, 80);
  pop();
}


function bottomPetalButtons(){
  button = createButton('grey');
  button.position(100, 480);
  button.size(50, 50);
  button.style('background-color', "grey");
  button.style('font-family', 'copperplate');
  button.mousePressed(bottomPetal);

  button1 = createButton('black');
  button1.position(180, 480);
  button1.size(50, 50);
  button1.style('background-color', "black");
  button1.style('color: white');
  button1.style('font-family', 'copperplate');
  button1.mousePressed(bottomPetal1);

  button2 = createButton('white');
  button2.position(260, 480);
  button2.size(50, 50);
  button2.style('background-color', "white");
  button2.style('font-family', 'copperplate');
  button2.mousePressed(bottomPetal2);
}

function bottomPetal() {
    col = "grey";
}

function bottomPetal1() {
    col = "black";
}

function bottomPetal2(){
    col = "white";
}



function middlePetalButtons(){

  button = createButton('grey');
  button.position(100, 560);
  button.size(50, 50);
  button.style('background-color', "grey");
  button.style('font-family', 'copperplate');
  button.mousePressed(middlePetal);

  button1 = createButton('black');
  button1.position(180, 560);
  button1.size(50, 50);
  button1.style('background-color', "black");
  button1.style('color: white');
  button1.style('font-family', 'copperplate');
  button1.mousePressed(middlePetal1);

  button2 = createButton('white');
  button2.position(260, 560);
  button2.size(50, 50);
  button2.style('background-color', "white");
  button2.style('font-family', 'copperplate');
  button2.mousePressed(middlePetal2);
}

function middlePetal() {
    col1 = "grey";
}

function middlePetal1() {
    col1 = "black";
}

function middlePetal2(){
    col1 = "white";
}


function upperPetalButtons(){

  button = createButton('grey');
  button.position(100, 640);
  button.size(50, 50);
  button.style('background-color', "grey");
  button.style('font-family', 'copperplate');
  button.mousePressed(upperPetal);

  button1 = createButton('black');
  button1.position(180, 640);
  button1.size(50, 50);
  button1.style('background-color', "black");
  button1.style('color: white');
  button1.style('font-family', 'copperplate');
  button1.mousePressed(upperPetal1);

  button2 = createButton('white');
  button2.position(260, 640);
  button2.size(50, 50);
  button2.style('background-color', "white");
  button2.style('font-family', 'copperplate');
  button2.mousePressed(upperPetal2);
}

function upperPetal() {
    col2 = "grey";
}

function upperPetal1() {
    col2 = "black";
}

function upperPetal2(){
    col2 = "white";
}


function centerPetalButtons(){
  
  button = createButton('grey');
  button.position(100, 720);
  button.size(50, 50);
  button.style('background-color', "grey");
  button.style('font-family', 'copperplate');
  button.mousePressed(centerPetal);

  button1 = createButton('black');
  button1.position(180, 720);
  button1.size(50, 50);
  button1.style('background-color', "black");
  button1.style('color: white');
  button1.style('font-family', 'copperplate');
  button1.mousePressed(centerPetal1);

  button2 = createButton('white');
  button2.position(260, 720);
  button2.size(50, 50);
  button2.style('background-color', "white");
  button2.style('font-family', 'copperplate');
  button2.mousePressed(centerPetal2);

}

function centerPetal() {
    col3 = "grey";
}

function centerPetal1() {
    col3 = "black";
}

function centerPetal2() {
    col3 = "white";
}

function say(col) {
console.log(col)
  if(col == 'shade1'){
    back = "antiqueWhite";
  }
  else if (col == 'shade2'){
    back = "bisque";
  }
  else if (col == 'shade3') {
    back = "navajoWhite";
  }
  else if (col == 'shade4') {
    back = "burlyWood";
  }
  else if (col == 'shade5') {
    back = "saddleBrown";
  }
  else if (col == 'shade6') {
    back = "#5C4033";
  }
  else if (col == 'shade7') {
    back = "#40251d";
  }
  else {
    back = "lightGrey"
  }
}
