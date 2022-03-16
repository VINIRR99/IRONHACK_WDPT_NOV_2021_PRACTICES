const myObstacles = [];

/*We will create a myGameArea object, and store in properties everything related to it. This way we have a much
cleaner code! */
const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function () {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext('2d');
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      // call updateGameArea() every 20 milliseconds
      this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    },

    score: function () {
        const points = Math.floor(this.frames / 5);
        this.context.font = '18px serif';
        this.context.fillStyle = 'black';
        this.context.fillText(`Score: ${points}`, 350, 50);
    },
};

/* We will create components, for our player element, and for the obstacles, so we are going to need a Component
Class. For creating a component we will need some parameters such as width, height, color and the x and y position
to print it on the canvas */
class Component {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      // new speed properties
      this.speedX = 0;
      this.speedY = 0;
    }
  
    update() {
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }
     
    crashWith(obstacle) {
        return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }
}
  
/* We are ready to create our player element. In a variable name player we are going to call the Component class
to create it. Remember we need to send the width, height, color and x,y coordinates for the element. */
const player = new Component(30, 30, 'red', 0, 110);

/* We know that for updating our game area we will need to schedule updates, and in this case, we will do it using
setInterval() function that calls a new function named updateGameArea. So into our myGameArea.start() let´s add an
interval property. Add this to our myGameArea.start() function:
// call updateGameArea() every 20 milliseconds
this.interval = setInterval(updateGameArea, 20);

/* When updating a canvas, we can not forget to clear it before starting the new draw. Let´s add a clear() function
into our myGameArea object. add this to myGameArea:
clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
},

/* Let’s not forget to add that new updateGameArea function. All it needs to do right now is call the game area’s
clear() method and the player object’s update() method. */
function updateGameArea() {
    myGameArea.clear();
    // update the player's position before drawing
    player.newPos();
    player.update();
    // update the obstacles array
    updateObstacles();
    // check if the game should stop
    checkGameOver();
    // update and draw the score
    myGameArea.score();
}

// Now to see our immobile red player on the screen, we have to call the game area’s start() method to kick things off.
myGameArea.start();

/* Our player is created, but now we need to move it. For that purpose, we will add into our Component Class
speedX and speedY properties. Add this to the constructor of the class Component:
// new speed properties
this.speedX = 0;
this.speedY = 0;

/* We will also need a newPos() method that will use the speed properties to change the position. Add this method
on the class Component
newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
}

/* Our player will be able to move up, down, right and left. We want our player to move according to keyboard arrows
so we need to add a keydown function attached to the document and add to or subtract from our x or y positions. */
document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
        player.speedY -= 1;
        break;
      case 40: // down arrow
        player.speedY += 1;
        break;
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
});

/* We will also need a keyup function so we stop adding speed to our player, otherwise, this won´t stop until
another key is pressed. Let´s add it as well. */
document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
});

/* Now to put this all into play, we need to change our updateGameArea function so that it updates the player’s
position before we draw them. Add this to the updateGameArea() function befor player.update():
// update the player's position before drawing
player.newPos();

/* First we are going to call a new function named updateObstacles from the updateGameArea function. Add this to the
updateGameArea() function:
// update the obstacles array
updateObstacles();

/* Next we add some variables that we will need to store important data: a myObstacle array to store all of our
obstacles and a frames property on the game area object. This will help us to count how many times we call the
updateGameArea function. This way, we can push new obstacles every certain amount of updates. Add this to the top
of the code:
const myObstacles = [];
// and this do myGameArea:
frames: 0,

/* Next we create the updateObstacles function with the following code. We will explain every line below: */
function updateObstacles() {
    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    };

    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
      let x = myGameArea.canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new Component(10, height, 'green', x, 0));
      myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));
    }
}

/* myGameArea.frames +=1 Every time we call updateGameArea() we will add 1 to our frames variable.
/* if (myGameArea.frames % 120 === 0){...} This condition will determine every how many update we create new obstacles.
We set every 120 updates, that means 2.4 seconds, because we call the updateGameArea() function every 20 milliseconds.
/* x = myGameArea.canvas.width We set the x coordinate of the new obstacle according to our canvas width
/* height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight) We set the minHeight to 20 and the
maxHeight to 200. So in this line we are getting a random value for our obstacle height,
and it will always 20 < height < 200.
/* gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap) The same as the obstacles, we want to add some gaps
between them where our player can go through. Our gap will always be 50 < gap < 200.
/* myObstacles.push(new component(10, height, "green", x, 0)) Finally we will add our obstacles. We will add 2 of
them, this line adds one obstacle in the top of our canvas setting the random height.
/* myObstacles.push(new component(10, x - height - gap, "green", x, height + gap)). The second one will be
at the bottom of our canvas, separate from the one on the top thanks to our gap variable.

/* After creating them, we need to move the obstacles, just adding something to the x axis. We add 1, but if
you want to make it more difficult, go ahead and add more. Add this the the start of the function updateObstacle():
for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
}

/* The obstacles are created, but if we hit them nothing happens. The game is supposed to end when we crash.
So let´s create our final function to detect this crashes. First we will add a stop function to myGameArea()
object. This function will stop our setInterval() and therefore the movement of all the objects.
Add this to myGameArea:
stop: function () {
    clearInterval(this.interval);
},

/* Then we need to create a function that checks if the position of the player is not the same as the obstacle´s
one. So let´s add this function into our Component Class.
left() {
    return this.x;
}
right() {
    return this.x + this.width;
}
top() {
    return this.y;
}
bottom() {
    return this.y + this.height;
}
 
crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
}

/* This is almost done, we just need to check our crashWith() function every time we update our game, and call
the myGameArea.stop() if this happens. */
function checkGameOver() {
    const crashed = myObstacles.some(function (obstacle) {
      return player.crashWith(obstacle);
    });
  
    if (crashed) {
      myGameArea.stop();
    }
}

/* Let’s call our new checkGameOver function from inside of updateObstacles. Add to updateGameArea():
// check if the game should stop
checkGameOver();

/* In this example, I think we can use our myGameArea.frame variable to set a score. Remember this variable
increases every time we update the canvas. In our example, we are going to divide it by 5, but you can set
it the way you prefer. Let´s add a score function to the myGameArea object.

score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 350, 50);
},

/* And of course we have to call this method from inside the updateGameArea() function:
// update and draw the score
myGameArea.score(); */