let container = document.getElementById("container");

function makeGrid(size) {
  let number = size;
  for (i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    container.style.setProperty(
      "grid-template-columns",
      `repeat(${number}, 50px)`
    );
    div.classList.add("divGrid");
    container.appendChild(div);
  }
}

makeGrid(9);
