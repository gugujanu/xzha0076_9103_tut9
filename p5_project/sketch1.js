
let img;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/500px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (img) {
    image(img, 0, 0);
  } else {
    text("Image not loaded", 10, 10);
  }
}

