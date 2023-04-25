// import { toDeg, toRad, average } from "./general.js";
import { hyp } from "./pythag.js";
import { drawPoint, drawCoordinateSystem } from "./draw.js";
import { PX2MM } from "./CONSTANTS.js";
const myCanvas = document.getElementById("myCanvas-1");
const chartCanvas = document.getElementById("chartCanvas-1");

const ctx = myCanvas.getContext("2d");
const chartCtx = chartCanvas.getContext("2d");
console.log(hyp("sin", 60, 10));
console.log(hyp("cos", 60, 5.7734));

// position on canvas
const offset = {
    x: myCanvas.width / 2,
    y: myCanvas.height / 2
};
const chartOffset = {
    x: chartCanvas.width / 2,
    y: chartCanvas.height / 2
};

const scolor = "gray";
const sdash = [4, 2];
const swidth = 1;
ctx.translate(offset.x, offset.y);
chartCtx.translate(chartOffset.x, chartOffset.y);
drawCoordinateSystem(ctx, offset, scolor, swidth, sdash);
drawCoordinateSystem(chartCtx, chartOffset);
const pointSize = 2 * PX2MM;
const pointColor = "red";
drawPoint({ x: 0, y: 0 }, pointSize, pointColor, chartCtx);
drawPoint({ x: 0, y: 0 }, pointSize, pointColor, ctx);
