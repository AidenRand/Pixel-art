const container = document.querySelector(".container");
const sizeElement = document.querySelector(".size");
const color = document.querySelector(".color");
const reset = document.querySelector('.reset')
const size = sizeElement.value;

let draw = false;

//
function drawCanvas(size) {
  container.style.setProperty("--size", size);
  //Create number of pixels in grid
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    // Change color of grid on mouse press
    div.addEventListener("mouseover", function () {
      if (!draw) return;
      div.style.backgroundColor = color.value;
    });

    div.addEventListener("mousedown", function () {
      div.style.backgroundColor = color.value;
    });

    container.appendChild(div);
  }
}

window.addEventListener("mousedown", function () {
  draw = true;
});
window.addEventListener("mouseup", function () {
  draw = false;
});

reset.addEventListener("click", function () {
  container.innerHTML = "";
  drawCanvas(size);
});

drawCanvas(size);
