let block = document.querySelector(".main");
let posText = document.querySelector(".posX");

block.addEventListener("mousemove", (e) => {
  posText.textContent = e.clientX;
  block.style.backgroundColor = `hsl(${e.clientX},80%,50%`;
});
