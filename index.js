let container = document.getElementById("container");

// GRID FUNCTION

function makeGrid(size) {
  let number = size;
  for (i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    container.style.setProperty(
      "grid-template-columns",
      `repeat(${number}, 50px)`
    );
    div.classList.add("divGrid");
    div.addEventListener("mousedown", function () {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}

window.onload = () => {
  makeGrid(6);
};

// RESET FUNCTION

function reset() {
  container.innerHTML = "";
  makeGrid(6);
}

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", reset);

//INPUT
let input = document.querySelector("input");
let gridNumber;
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    gridNumber = input.value;
    container.innerHTML = "";
    makeGrid(gridNumber);
  }
});
