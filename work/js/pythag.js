export function hyp(type = "sin", angle, length) {
    if (type === "sin") {
        return length / Math.sin(angle * Math.PI / 180);
    }
    if (type === "cos") {
        return length / Math.cos(angle * Math.PI / 180);
    } else {
        return console.log("please enter valid type. sin or cos");
    }
}
export function opp(type = "sin", angle, length) {
    if (type === "sin") {
        return length * Math.sin(angle * Math.PI / 180);
    }
    if (type === "tan") {
        return length / Math.tan(angle * Math.PI / 180);
    } else {
        return console.log("please enter valid type. sin or tan");
    }
}
export function adj(type = "cos", angle, length) {
    if (type === "cos") {
        return length * Math.cos(angle * Math.PI / 180);
    }
    if (type === "tan") {
        return length * Math.tan(angle * Math.PI / 180);
    } else {
        return console.log("please enter valid type. cos or tan");
    }
}
export function length(hyp, opp, adj) {
    if (hyp === 0) {
        return Math.sqrt(opp * opp + adj * adj);
    }
    if (opp === 0) {
        return Math.sqrt(hyp * hyp - adj * adj);
    }
    if (adj === 0) {
        return Math.sqrt(hyp * hyp - opp * opp);
    } else {
        return console.log("please enter valid data. unknown = 0");
    }
}
export function angle(type = "sin", side_1, side_2) {
    if (type === "sin") {
        return Math.asin(side_1 / side_2) * 180 / Math.PI;
    }
    if (type === "cos") {
        return Math.acos(side_1 / side_2) * 180 / Math.PI;
    }
    if (type === "tan") {
        return Math.atan(side_1 / side_2) * 180 / Math.PI;
    } else {
        return console.log("please enter valid data. type = sin,cos or tan");
    }
}