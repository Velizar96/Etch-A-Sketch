const container = document.querySelector(".container");
container.style.flexWrap = "wrap";
container.style.alignContent = "flex-start";

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "divs";

  container.appendChild(div);
}

const button = document.querySelector(".btn");
button.addEventListener("click", function (e) {
  e = parseInt(prompt("Number of squares per side?"));
  // myDivs.forEach((div) => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  // });
  for (let i = 0; i < e * e; i++) {
    const div = document.createElement("div");
    div.className = "divs";

    div.style.height = `${960 / e}px`;
    div.style.width = `${960 / e}px`;

    container.appendChild(div);
  }
  draw();
});

////FUNCTIONS////
//logic for drawing
function draw() {
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div) => {
    div.style.boxSizing = "border-box";
    div.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
  });
}
draw();

function randomColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function randomColor() {
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = randomColorGenerator();
    });
  });
}

//BUTTONS LOGIC//
const blackBtn = document.querySelector(".black");
blackBtn.addEventListener("click", function () {
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });
  });
});

const randomBtn = document.querySelector(".random");
randomBtn.addEventListener("click", randomColor);

const eraseBtn = document.querySelector(".erase");
eraseBtn.addEventListener("click", function () {
  const divs = document.querySelectorAll(".divs");
  divs.forEach((div) => {
    div.style.backgroundColor = "aqua";
  });
});
