const generateBtn = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePallete);

function generatePallete() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push.generateRandomColor();
  }

  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters(Math.floor(Math.random() * 16));
  }
  return color;
}

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelector(".color-btn");

  colorBoxes.forEach(box, (index) => {
    const color = colors[index];
    const colorDiv = document.querySelector(".color");
    const hexValue = document.querySelector(".hex-value");
  });
}

generatePallete();
