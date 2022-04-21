let img
//variables used in copy(), s-source, t-target
let sX1, sY1, tX1, tY1, w1, tW1, tH1, h1
let ratio = 0.25

function preload() {
  img = loadImage('../images/sakura.jpeg')
}

let canvas
function setup() {
  img.resize(1000, 0)
  canvas = createCanvas(1000, img.height);
  canvas.parent('canvasDiv');
  pixelDensity(1)
  img.loadPixels()
  //white rect
  // fill(255)
  // noStroke()
  // rect(width * ratio, height * ratio, width * (1 - 2 * ratio), height * (1 - 2 * ratio))
}

function draw() {
  //upper lines
  sX1 = mouseX
  sY1 = 0
  w1 = 15
  h1 = mouseY
  tX1 = map(mouseX, 0, width, width * ratio, width * (1 - ratio))
  tY1 = height * ratio
  tH1 = h1 * (1 - 2 * ratio)
  copy(img, sX1, sY1, w1, h1, tX1, tY1, w1, tH1)
}
