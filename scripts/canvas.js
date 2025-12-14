const canvas = document.querySelector(".digital-signature-canvas");
const ctx = canvas.getContext("2d");

let mouseInitPosition = null;
let stopMouseTracking = false;

function handleCanvasDraw(event) {
  const canvasRect = canvas.getBoundingClientRect();
  const mousePosX = event.clientX - canvasRect.left;
  const mousePosY = event.clientY - canvasRect.top;

  if (!mouseInitPosition && !stopMouseTracking) {
    mouseInitPosition = {
      xInitPosition: event.clientX,
      yInitPosition: event.clientY,
    };
  }

  stopMouseTracking = true;

  console.log(
    `X: ${mouseInitPosition.xInitPosition} | Y: ${mouseInitPosition.yInitPosition}`
  );

  canvas.addEventListener("mousemove", function () {
    ctx.beginPath(
      mouseInitPosition.xInitPosition,
      mouseInitPosition.yInitPosition
    );
    ctx.fillStyle = "green";
    ctx.fillRect(mousePosX, mousePosY, 5, 5);

    ctx.stroke();
  });
}

canvas.addEventListener("mousedown", handleCanvasDraw);
