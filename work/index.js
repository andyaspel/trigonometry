import { toDeg, toRad, average } from "./js/general.js";
import { drawPoint, drawLine, drawText, drawCoordinateSystem } from "./js/draw.js";
const myCanvas = document.getElementById("myCanvas");
const chartCanvas = document.getElementById("chartCanvas");

const ctx = myCanvas.getContext("2d");
const chartCtx = chartCanvas.getContext("2d");
// position on canvas
const offset = {
    x: myCanvas.width / 2,
    y: myCanvas.height / 2
};
const chartOffset = {
    x: chartCanvas.width / 2,
    y: chartCanvas.height / 2
};
// set theta angle
let theta = Math.PI / 4;
// set radius
const c = 100;

const A = { x: 0, y: 0 };
const B = {
    x: Math.cos(theta) * c,
    y: Math.sin(theta) * c
};
const C = { x: B, y: 0 };

ctx.translate(offset.x, offset.y);
chartCtx.translate(chartOffset.x, chartOffset.y);

drawCoordinateSystem(chartCtx, chartOffset);

update(ctx);
document.onwheel = (event) => {
    theta += toRad(Math.sign(event.deltaY));

    B.x = Math.cos(theta) * c;
    B.y = Math.sin(theta) * c;

    C.x = B.x;

    update(ctx);
}
// updates canvas


function update(ctx) {
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);
    const tan = Math.tan(theta);

    const T = {
        x: Math.sign(cos) * Math.sqrt(1 * 1 + tan * tan) * c,
        y: 0
    };

    ctx.clearRect(-offset.x, -offset.y,
        myCanvas.width, myCanvas.height);

    drawCoordinateSystem(ctx, offset);

    drawText(
        "sinθ = " + sin.toFixed(4),
        { x: -offset.x / 2, y: offset.y * 0.7 },
        "red", ctx
    );

    drawText(
        "cosθ = " + cos.toFixed(4),
        { x: -offset.x / 2, y: offset.y * 0.8 },
        "blue", ctx
    );

    drawText(
        "tanθ = " + tan.toFixed(4),
        { x: -offset.x / 2, y: offset.y * 0.9 },
        "magenta", ctx
    );

    drawText(
        "θ = " + theta.toFixed(4) + " (" +
        toDeg(theta).toFixed(3).
            toString().padStart(2, " ") + "°)",
        { x: offset.x / 2, y: offset.y * 0.6 }, "black", ctx
    );
    drawText(
        "c = " + c.toFixed(4),
        { x: offset.x / 2, y: offset.y * 0.7 },
        "green", ctx
    );
    drawText(
        "a = " + B.x.toFixed(4),
        { x: offset.x / 2, y: offset.y * 0.8 },
        "green", ctx
    );

    drawText(
        "b = " + B.y.toFixed(4),
        { x: offset.x / 2, y: offset.y * 0.9 },
        "green", ctx
    );


    drawLine(A, B, "black", ctx);
    drawText("h", average(A, B), "black", ctx);
    drawLine(A, C, "blue", ctx);
    drawText("a", average(A, C), "blue", ctx);
    drawLine(B, C, "red", ctx);
    drawText("o", average(B, C), "red", ctx);
    drawLine(B, T, "magenta", ctx);
    drawText("t", average(B, T), "magenta", ctx);

    // drawText("0,0", A, "black", ctx);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.arc(0, 0, c, 0, theta);
    ctx.stroke();

    const chartScaler = chartOffset.y * 0.2;
    drawPoint({
        x: theta * chartScaler,
        y: sin * chartScaler
    }, 1, "red", chartCtx);
    drawPoint({
        x: theta * chartScaler,
        y: cos * chartScaler
    }, 1, "blue", chartCtx);
    drawPoint({
        x: theta * chartScaler,
        y: tan * chartScaler
    }, 1, "magenta", chartCtx);
}
