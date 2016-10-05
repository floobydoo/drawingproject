var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "light blue";
canvas.fillRect(0, 0, 600, 350);
canvas.fillStyle = "green";
canvas.fillRect(0, 250, 600, 200);
canvas.fillStyle = "gray";
canvas.fillRect(0, 375, 600, 30);
canvas.fillStyle = "purple";
canvas.fillRect(50, 150, 300, 200);
canvas.fillStyle = "yellow";
canvas.fillRect(175, 295, 40, 55);
/*window 1*/
canvas.fillStyle = "yellow";
canvas.fillRect(90, 200, 15, 15);
canvas.fillRect(110, 200, 15, 15);
canvas.fillRect(110, 180, 15, 15);
canvas.fillRect(90, 180, 15, 15);
/*window 2*/
canvas.fillStyle = "yellow";
canvas.fillRect(265, 200, 15, 15);
canvas.fillRect(285, 200, 15, 15);
canvas.fillRect(285, 180, 15, 15);
canvas.fillRect(265, 180, 15, 15);
/* Triangle */
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(0,150);
canvas.lineTo(400,150);
canvas.lineTo(190,50);
canvas.fill();
/*Circle*/
canvas.fillStyle="white";
canvas.beginPath();
canvas.arc(500, 100, 30, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle="black";
canvas.beginPath();
canvas.arc(480, 90, 30, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
/*Tree*/
canvas.fillStyle="green";
canvas.beginPath();
canvas.arc(455, 200, 75, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle="green";
canvas.beginPath();
canvas.arc(390, 190, 30, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle="green";
canvas.beginPath();
canvas.arc(490, 140, 30, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "brown";
canvas.fillRect(450, 200, 15, 140);
