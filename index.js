let container = document.getElementById("container");

// GRID FUNCTION

function makeGrid(size) {
  let number = size;
  for (i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    container.style.setProperty(
      "grid-template-columns",
      `repeat(${number}, 1fr)`
    );
    div.classList.add("divGrid");
    div.addEventListener("mouseenter", function () {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}

window.onload = () => {
  makeGrid(16);
};

// RESET FUNCTION

function reset() {
  container.innerHTML = "";
  slider.value = 16;
  makeGrid(16);
}

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", reset);

//GRID SIZE

let slider = document.getElementById("sizeRange");

function gridSize() {
  let gridPixels = container.querySelectorAll("div");
  gridPixels.forEach((gridPixel) => gridPixel.remove());
  makeGrid(slider.value);
}

slider.addEventListener("mouseup", gridSize);
