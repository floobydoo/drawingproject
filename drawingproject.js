var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "purple";
canvas.fillRect(25, 75, 150, 100);
/* Triangle */
canvas.beginPath();
canvas.moveTo(0,75);
canvas.lineTo(200,75);
canvas.lineTo(100,25);
canvas.fill();
/*Circle*/
arc(x, y, radius, startAngle, endAngle)
canvas.beginPath();
canvas.arc(100, 75, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
