/* Create our canvas and set the 2d context. We will add some captions to know the
exact coordinates our ghost is located, that way we also declare .fillStyle and
.font properties. */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.font = '18px serif';

/* Now we are going to create our ghost object. It should have x and y properties
in order to place it on the canvas. Besides, we will add some functions to move
it according to the user interaction with the keyboard. Each function will add or
subtract from x or y axis. */
class Ghost {
    constructor() {
      this.x = 25;
      this.y = 25;
  
      // Load the image
      const img = new Image();
      img.addEventListener('load', () => {
        // Once image loaded => draw
        this.img = img;
        this.draw();
      });
      img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
    }
    moveUp() {
      this.y -= 25;
    }
    moveDown() {
      this.y += 25;
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    restart() {
        this.x = 25;
        this.y = 25;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }
}
  
const ghost = new Ghost();

/* Ok, our ghost is created, so let’s add the listeners for keys, so we can call
our functions to move the ghost. */
document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 38:
            ghost.moveUp();
            console.log('up', ghost);
            break;
        case 40:
            ghost.moveDown();
            console.log('down', ghost);
            break;
        case 37:
            ghost.moveLeft();
            console.log('left', ghost);
            break;
        case 39:
            ghost.moveRight();
            console.log('right', ghost);
            break;
        case 32:
            ghost.restart();
            break;
    }
    updateCanvas();
});

/* Finally, we will need our updateCanvas() function, where we clear our canvas
and redraw the element. Notice that we are displaying our Ghost position x and y
so we can check how it updates with every arrow key clicked! */
function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.fillText('Ghost_x: ' + ghost.x, 580, 40);
    ctx.fillText('Ghost_y: ' + ghost.y, 580, 60);
  
    ghost.draw();
}