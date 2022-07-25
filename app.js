const container = document.querySelector(".container");
const sizeElement = document.querySelector(".size");
const color = document.querySelector(".color");
const resetBtn = document.querySelector(".reset");
let size = sizeElement.value;
let draw = false;


function drawCanvas(size) {
  // Set size of grid
  container.style.setProperty("--size", size);
  //Create number of pixels in grid
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    // Change color of grid
    div.addEventListener("mouseover", () => {
      if (!draw) return;
      div.style.backgroundColor = color.value;
    });

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = color.value;
    });

    container.appendChild(div);
  }
}

// Keep drawing only while mouse is pressed down
window.addEventListener("mousedown", () => {
  draw = true;
});
window.addEventListener("mouseup", () => {
  draw = false;
});

// Reset grid on button press
function reset() {
  container.innerHTML = "";
  drawCanvas(size);
}

resetBtn.addEventListener("click", reset);

// Change grid size
sizeElement.addEventListener("keyup", () => {
  size = sizeElement.value;
  reset();
});

drawCanvas(size);
