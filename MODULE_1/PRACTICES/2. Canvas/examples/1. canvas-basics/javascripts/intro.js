/* The canvas is initially blank. To display something, a script first needs to access the rendering context and draw
on it. The <canvas> element has a method called getContext(), used to obtain the rendering context and its drawing
functions. getContext() takes one parameter, the type of context. For 2D graphics, such as those we will cover on this
course, we specify “2d” to get a CanvasRenderingContext2D. */
// Now let’s go into our intro.js file and see how we can manipulate canvas tag:
const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

// Rectangles
/* <canvas> elements only support two primitive shapes: rectangles and paths. All other shapes must be created by
combining one or more paths, lists of points connected by lines.
// Luckily, we have an assortment of path drawing functions which make it possible to compose very complex shapes.
// First let’s look at the rectangle. There are three functions that draw rectangles on the canvas:
fillRect(x, y, width, height); //Draws a filled rectangle.
strokeRect(x, y, width, height); //Draws a rectangular outline.
clearRect(x, y, width, height); //Clears the specified rectangular area, making it fully transparent.
/* Each of these three functions takes the same parameters. x and y specify the position on the canvas (relative to
the origin) of the top-left corner of the rectangle. width and height provide the rectangle’s size.
// Let’s go to our intro.js and make some strokes */
// Draw rectangle:
ctx.fillStyle = 'purple';
ctx.fillRect(260, 260, 30, 30);

// Paths
/* The other primitive shapes are paths. A path is a list of points, connected by segments of lines that can be of
different shapes, curved or not, of different width and of different color.
// A path, or even a subpath, can be closed. To make shapes using paths takes some extra steps:
1. You create the path.
2. Use drawing commands to draw into the path.
3. Close the path.
4. Once the path has been created, you can stroke or fill the path to render it.
beginPath(); // Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
closePath(); // Closes the path so that future drawing commands are once again directed to the context.
stroke(); // Draws the shape by stroking its outline.
fill(); // Draws a solid shape by filling the path's content area.

// Moving the pen
// One very useful function, which doesn’t actually draw anything but becomes part of the path list described above,
is the moveTo() function. You can probably best think of this as lifting a pen or pencil from one spot on a piece of
paper and placing it on the next.
moveTo(x, y); // Moves the pen to the coordinates specified by x and y.
// When the canvas is initialized or beginPath() is called, you typically will want to use the moveTo() function to
place the starting point somewhere else. We could also use moveTo() to draw unconnected paths.

// Lines
// For drawing straight lines, use the lineTo() method.
lineTo(x, y); // Draws a line from the current drawing position to the position specified by x and y.
// Draw Path: */
// start the path
ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);

// .stroke() executes the drawing
ctx.stroke();

// start a new line from these coordinates: x=250, y=50
ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.stroke();

// close the path
ctx.closePath();

/* When you call fill(), any open shapes are closed automatically, so you don’t have to call closePath(). This is not
the case when you call stroke().

// Arcs
// Not everything will be lines and paths, we will need some curves right? So to draw arcs or circles, we use the
arc() or arcTo() methods.
arc(x, y, radius, startAngle, endAngle, anticlockwise);
// Draws an arc which is centered at (x, y) position with
// radius starting at startAngle and ending at endAngle going
// in the given direction indicated by anticlockwise (defaulting to clockwise).
arcTo(x1, y1, x2, y2, radius);
// Draws an arc with the given control points and radius,
// connected to the previous point by a straight line. */
// obs: radians = (Math.PI/180)*degrees.

const degreesToRadians = (degree) => {
    return (Math. PI / 180) * degree;
};

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, 0, degreesToRadians(360));
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !
ctx.stroke();
ctx.closePath();
 
ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red'; // !
// fills the inner circle with red color
ctx.fill();
ctx.closePath();

// color the text
ctx.fillStyle = 'orange';
ctx.font = '30px Arial';
// ctx.fillText("string", x, y); => x, y are coordinates where the text is going to appear
ctx.fillText('Hello there', 20, 40);