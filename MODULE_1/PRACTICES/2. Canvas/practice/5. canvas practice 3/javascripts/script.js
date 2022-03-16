const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

const img = new Image();

img.onload = function() {
    ctx.drawImage(img, 0, 0, 600, 300);
};

img.src = 'https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_972642d95160aa12f745e3095bd7b4d6.png';