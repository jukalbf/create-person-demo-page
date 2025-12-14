const canvas = document.querySelector(".digital-signature-canvas");
const canvasContainer = document.querySelector(".digital-signature-container");
const ctx = canvas.getContext("2d");
const buttonClear = document.querySelector(".button-clear-signature");

let mouseInitPosition = null;
let stopMouseTracking = false;
let mousePosX = null;
let mousePosY = null;
let isDrawing = false;
canvas.width = canvasContainer.getBoundingClientRect().width;
const pencilSize = 2;

buttonClear.addEventListener("click", clearCanvas);

canvas.addEventListener("mousemove", handleDrawTrackMouse);

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

function handleDrawTrackMouse(event) {
  if (isDrawing) {
    const canvasRect = canvas.getBoundingClientRect();
    mousePosX = event.clientX - canvasRect.left;
    mousePosY = event.clientY - canvasRect.top;
    let strokeColor = "#00000000";

    if (!mouseInitPosition && !stopMouseTracking) {
      mouseInitPosition = {
        xInitPosition: event.clientX,
        yInitPosition: event.clientY,
      };
    }

    stopMouseTracking = true;

    ctx.beginPath();

    ctx.arc(mousePosX, mousePosY, pencilSize, 0, 2 * Math.PI);

    if (isDrawing) {
      strokeColor = "#000000";
      ctx.fillStyle = strokeColor;
      ctx.fill();
      ctx.stroke();
    } else {
      strokeColor = "#00000000";
      ctx.fillStyle = strokeColor;
      ctx.fill();
      ctx.stroke();
    }
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
