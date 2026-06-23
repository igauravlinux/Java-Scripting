

let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

context.fillStyle = 'rgba(255,0,0,0.5)';
context.fillRect(300,300, 100, 100);

// Line

context.beginPath();
context.moveTo(100,300);
context.lineTo(300,100);
context.lineTo(400,300);
context.strokeStyle = "#fff"
context.stroke();

