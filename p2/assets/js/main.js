const block = document.querySelector(".color-block");

const button = document.querySelector(".btn");
const text = document.querySelector('.text');

const hex = "0123456789ABCDEF";

const getRandomColor = () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

button.addEventListener("click", () => {
  let currentColor = getRandomColor();
  block.style.backgroundColor = currentColor;
  block.style.border = "none";
  text.textContent = currentColor;
});
