//function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 5; //ширина линии
    ctx.strokeStyle = "#ede6b6"; //цвет линии
    ctx.fillStyle = "#eabff5"; //цвет круга

    //circle.moveTo(125, 35);
    ctx.arc(150, 85, 75, 0, 2 * Math.PI, false); 
    //ctx.arc(x , y , radius , start_angle , end_angle , anticlockwise) ; angle - radian
    ctx.stroke();
    ctx.fill();

 //   }
