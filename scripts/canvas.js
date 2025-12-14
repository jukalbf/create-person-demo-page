const canvas = document.querySelector(".digital-signature-canvas");
const ctx = canvas.getContext("2d");

let mouseInitPosition = null;
let stopMouseTracking = false;
let mousePosX = null;
let mousePosY = null;

canvas.addEventListener("mousemove", handleDrawTrackMouse);

// canvas.addEventListener("mousedown", handleMouseDownDraw);

function handleDrawTrackMouse(event) {
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
  ctx.fillRect(mousePosX, mousePosY, 5, 5);

  canvas.addEventListener("mousedown", function () {
    strokeColor = "#000000";
    ctx.fillStyle = strokeColor;
    ctx.stroke();
  });

  canvas.addEventListener("mouseup", function () {
    strokeColor = "#00000000";
    ctx.fillStyle = strokeColor;
    ctx.stroke();
  });
}

function handleMouseDownDraw() {}
