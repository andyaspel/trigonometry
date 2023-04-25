//  canvas draw functions
// example drawPoint({x:1,y:-2}, 2,"magenta")
export function drawPoint(loc, size = 1, color = "black",ctx) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(loc.x, loc.y, size / 2, 0, Math.PI*2,true );
    ctx.stroke();
}
// example drawLine({x:0,y:0}, {x:1, y"-1}, "blue");
export function drawLine(p1, p2, color = "black",ctx) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}
// example drawText("a", {x:0,y:0}, "red")
export function drawText(text, loc, color = "black",ctx) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    // ctx.font = "bold 16px Courier";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeText(text, loc.x, loc.y);
    ctx.fillText(text, loc.x, loc.y);
}
// example drawCoordinateSystem({x:0, y:0}, {xi:50%, yi:50%});

export function drawCoordinateSystem(ctx, offset, color="gray", width=1,dash=[4,3]) {
    ctx.beginPath();
    ctx.moveTo(offset.x, 0);
    ctx.lineTo(-offset.x, 0);
    ctx.moveTo(0, offset.y);
    ctx.lineTo(0, -offset.y);
    ctx.setLineDash(dash);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.setLineDash([]);
}

