const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let paths = []; // stores drawn lines
let undonePaths = []; // stores undone lines

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    paths.push([]);
    addPoint(e);
    undonePaths = []; // clear redo history after new draw
});

canvas.addEventListener("mousemove", addPoint);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);

function addPoint(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    paths[paths.length - 1].push({ x, y });
    redraw();
}

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#333";

    for (let path of paths) {
        ctx.beginPath();
        for (let i = 0; i < path.length; i++) {
            const p = path[i];
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
    }

    ctx.restore();
}

function undo() {
    if (paths.length > 0) {
        undonePaths.push(paths.pop());
        redraw();
    }
}

function redo() {
    if (undonePaths.length > 0) {
        paths.push(undonePaths.pop());
        redraw();
    }
}

function clearCanvas() {
    paths = [];
    undonePaths = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
