let bubbles = [];
let color = [234, 242, 248, 60];
function setup(){
  let canvas = createCanvas(0.75 * windowWidth, 0.75 * windowHeight);
  canvas.parent("canvasContainer");
}

function draw() {
  background(0);

  bubbles.push(new Bubble(width/2, height/2));

  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].update();
    bubbles[i].checkPosition();
    bubbles[i].display();
  }

  let surplus = bubbles.length - 500;
    for(let i = 0; i < surplus; i++){
      bubbles.splice(0,1);
  }

  for(let i = bubbles.length -1; i >= 0; i--){
    if(bubbles[i].alive == false){
      bubbles.splice(i, 1);
    }

  }

  let lineOfText = "number of bubbles:" + bubbles.length
    fill("white");
      text(lineOfText, 10, 20);
}

function mousePressed(){
  for(let i = 0; i < bubbles.length; i++){
      bubbles[i].explode();
   }
}

class Bubble{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.diameter = 30;
    this.xSpeed = random(-0.1, 0.1);
    this.ySpeed = random(-0.1, 0.1);
  }

  update(){
    this.x += this.xSpeed;
    this.xSpeed *= 1.025;
    this.y += this.ySpeed;
    this.ySpeed *= 1.025;
    this.alive = true;

  }
  explode(){
    this.xSpeed = random(-10, 10);
    this.ySpeed = random(-10, 10);
  }
  display(){
    push();
      fill(color[0], color[1], color[2], color[3]);
      noStroke();
        translate(this.x, this.y);
          circle(0, 0, this.diameter);
    pop();
  }

  checkPosition(){
    let distance = dist(this.x, this.y, width/2, height/2);
    let distanceDelete = 150;
      if(distance >= distanceDelete){
        this.alive = false;
    }
  }
}

function say(col) {
console.log(col)
  if(col == 'blue'){
    color = [173, 216, 230, 60];
  }
  else if (col == 'pink'){
    color = [255, 192, 203, 60];
  }
  else if (col == 'purple') {
    color = [221, 160, 221, 60];
  }
  else {
    color = [234, 242, 248, 60]
  }
}
