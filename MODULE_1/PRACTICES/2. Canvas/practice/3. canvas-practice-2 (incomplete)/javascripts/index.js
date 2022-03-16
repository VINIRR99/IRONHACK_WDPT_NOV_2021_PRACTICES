const canvas = document.getElementById('practice-2');
const ctx = canvas.getContext('2d');

const degreesToRadians = degree => {
    return (Math. PI / 180) * degree;
};

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(640, 250, 65, 0, degreesToRadians(360));
ctx.fillStyle = '#D37E0C'; // !
ctx.fill();

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(640, 250, 65, 0, degreesToRadians(360));
ctx.lineWidth = 4;
ctx.strokeStyle = 'white'; // !
ctx.stroke();
ctx.closePath();

ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(640, 0);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(640, 500);
ctx.strokeStyle = 'white';
// .stroke() executes the drawing
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 59);
ctx.lineTo(80, 59)
ctx.arc(80, 250, 191, degreesToRadians(270), degreesToRadians(90));
ctx.lineTo(0, 441);
ctx.lineWidth = 4;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
// strokeRect(x, y, width, height);
ctx.strokeRect(0, 160, 175, 180);
ctx.strokeStyle = 'white';
ctx.closePath;