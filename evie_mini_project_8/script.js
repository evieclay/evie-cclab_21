let img;

function preload(){
  img = loadImage('happy.jpg');
}

function setup(){
  createCanvas(1200, 800);
}

function draw(){
  background("black");

  img.loadPixels();

  for(let y = 0; y < 800; y++){
    for(let x = 0; x < 1200; x++){
      let index = (y * width + x) * 4;

      let distance = dist(mouseX, mouseY, x, y);
      let red = 0;
      let green = map(distance, 0, img.width / 5, 0, 50 , 0);
      //let blue = map(distance, 0, img.width / 2, 0, 0, 250);

      //let red = img.pixels[index + 0];
      //let green = img.pixels[index + 1];
      let blue = img.pixels[index + 2];
      let alpha = img.pixels[index + 3];

        img.pixels[index + 0] = red;
        img.pixels[index + 1] = green;
        img.pixels[index + 2] = blue;
        img.pixels[index + 3] = 255;
      }
    }
  img.updatePixels();
  image(img, 0, 0);
}
