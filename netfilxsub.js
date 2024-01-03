let text = document.querySelector(".mainText");
let largeTxt = document.querySelector(".button1");
let medTxt = document.querySelector(".button2");
let smallTxt = document.querySelector(".button3");
let normalTxt = document.querySelector(".cbutton1");
let blackTxt = document.querySelector(".cbutton2");
let yellowTxt = document.querySelector(".cbutton3");
let whiteTxt = document.querySelector(".cbutton4");

largeTxt.addEventListener("click", () => {
  text.style.fontSize = "39px";
});

medTxt.addEventListener("click", () => {
  text.style.fontSize = "26px";
});

smallTxt.addEventListener("click", () => {
  text.style.fontSize = "13px";
});

blackTxt.addEventListener("click", () => {
  text.style.backgroundColor = "black";
  text.style.color = "white";
});

yellowTxt.addEventListener("click", () => {
  text.style.backgroundColor = "black";
  text.style.color = "yellow";
});

whiteTxt.addEventListener("click", () => {
  text.style.backgroundColor = "white";
  text.style.color = "black";
});

normalTxt.addEventListener("click", () => {
  text.style.backgroundColor = "rgba(0, 0, 0, 0)";
  text.style.color = "black";
});
