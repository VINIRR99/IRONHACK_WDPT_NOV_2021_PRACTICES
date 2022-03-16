function draw() {
    const canvas = document.getElementById('practice-1');
    const ctx = canvas.getContext('2d');

    const degreesToRadians = degree => {
        return (Math. PI / 180) * degree;
    };

    ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.arc(15, 140, 115, 0, degreesToRadians(270), true);
    ctx.lineWidth = 25;
    ctx.strokeStyle = 'white'; // !
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.arc(15, 140, 70, 0, degreesToRadians(270), true);
    ctx.lineWidth = 25;
    ctx.strokeStyle = 'white'; // !
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(30, 125, 15, 0, degreesToRadians(360));
    ctx.fillStyle = 'white'; // !
    // fills the inner circle with red color
    ctx.fill();
};

draw();

/* const degreesToRadians = (degree) => {
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
ctx.closePath(); */