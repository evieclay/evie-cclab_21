function say(what){
  let elem = document.getElementById('lyrics');
  let newElem = document.createElement('p');
  newElem.innerHTML = what;
  elem.appendChild(newElem);
}

function makeCircle(){
  let elem = document.getElementById('rect');
  elem.style.borderRadius = '50px';
}
function makeRect(){
  let elem = document.getElementById('rect');
  elem.style.borderRadius = '0px';
}
let circleButton = document.getElementById('circleButton');
circleButton.addEventListener('click', makeCircle);

let rectButton = document.getElementById('rectButton');
rectButton.addEventListener('click', makeRect);
