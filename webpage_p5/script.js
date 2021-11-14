console.log("script works lmao!");
let circlePosSlider = document.getElementById('circlePositionSlider');

function setup(){
  let canvas = createCanvas(200, 200);
  canvas.parent("canvasContainer");
}

function draw(){
  background(0);
  fill("pink");
  noStroke();

    let sliderVal = circlePosSlider.value;
    console.log(sliderVal);
    let x = map(sliderVal, 0, 100, 0, width);

    //let sizeSliderVal = circleSizeSlider.value;
    //let size = map(sizeSliderVal, 0, 100, 0, width*2);

      circle(x, height/2, 50);
}
