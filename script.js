const btn = document.querySelector("button");
btn.addEventListener("click", function(){
  const h3 = document.querySelector("h3");
  const random = getRandomColor();
  h3.innerText = random;
  const div = document.querySelector("#color");
  div.style.background = random;
});

function getRandomColor(){
  const red = Math.floor(Math.random() *255 );
  const green = Math.floor(Math.random() *255);
  const blue = Math.floor(Math.random() *255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};