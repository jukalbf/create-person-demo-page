const canvas = document.querySelector(".digital-signature-canvas");
const canvasContainer = document.querySelector(".digital-signature-container");
const ctx = canvas.getContext("2d");

let mouseInitPosition = null;
let stopMouseTracking = false;
let mousePosX = null;
let mousePosY = null;
let isDrawing = false;
canvas.width = canvasContainer.getBoundingClientRect().width;
// canvas.height = canvasContainer.getBoundingClientRect().height;
const pencilSize = 2;

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

    ctx.beginPath(
      mouseInitPosition.xInitPosition,
      mouseInitPosition.yInitPosition
    );

    ctx.arc(
      mousePosX,
      mousePosY + -2,
      pencilSize,
      0,
      2 * Math.PI
    );

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

function handleMouseDownDraw() {}
