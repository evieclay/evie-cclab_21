let img;
let imageArray=[];
let horseIndex=0;

let horseX=100;

function preload(){
  for(let i=1; i<18; i++){
    let path="assets/images/horse"+i+".jpg";
    console.log("loading",path);
    let img=loadImage(path);
    imageArray.push(img);
  }
}

function setup(){
  createCanvas(800,300);
}

function draw(){
  background(0);

  image(imageArray[horseIndex], horseX, 0, 300,250);
  horseIndex++;
  if(horseIndex>16){
    horseIndex=0
  }

  horseX+=10;
  if (horseX>width){
    horseX=-200
  }
}
