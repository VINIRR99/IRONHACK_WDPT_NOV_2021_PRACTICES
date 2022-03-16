// javascripts/index.js

// create new image object
const fireballImg = new Image();

// "src" has to point as the image is used in HTML file
fireballImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVZ-yDwhzpN3wNn3DTDSRbqXCdsRT0jcWUw&usqp=CAU';

// set the start position of our image
let fireballX = 0;
let fireballY = 0;

function draw(x, y) {
  // use id "example" to get <canvas></canvas> tag
  const theCanvas = document.getElementById('example');

  // capture 2d context where everything happens in canvas
  // context has all the methods for drawing things
  const ctx = theCanvas.getContext('2d');

  // clears whole canvas to simulate animation (==movement) of the rectangle
  ctx.clearRect(0, 0, 300, 300);

  // ctx.drawImage(whichImage, x, y, width, height);
  ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50);

  // // colors rectangle with this color
  // ctx.fillStyle = "green";

  // // creates rectangle => ctx.fillRect(x, y, width, height);
  // ctx.fillRect(x, 0, 50, 50);

  // changes position of X coordinate
  // x += 3;

  fireballX += 3;

  // calls itself every 30ms
  setTimeout(`draw(${x}, ${y})`, 30);
}

