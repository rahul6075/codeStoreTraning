let text = document.getElementById("message");
let btn = document.getElementById("btn");
let pele = document.getElementById("text")



pele.ondblclick = () => {
    text.innerHTML = "Paragrapg Double Clicked";
}

btn.onclick = (e) => {
  text.innerHTML = "Button Click Event Called";
};
btn.oncontextmenu = (e) => {
  e.preventDefault();
  text.innerHTML = "Button is Right Clicked";
};
btn.ondblclick = (e) => {
  e.preventDefault();
  text.innerHTML = "Button is double Clicked";
};
btn.onmousedown = (e) => {
  e.preventDefault();
  text.innerHTML = "pressing a mouse button";
};
btn.onmouseleave = (e) => {
  e.preventDefault();
  text.innerHTML = "Mouse Leaving the button";
};
btn.onmouseenter = (e) => {
  e.preventDefault();
  text.innerHTML = "The mouse pointer moves into button";
};
btn.onmousemove = (e) => {
  e.preventDefault();
  text.innerHTML = "The mouse pointer moves over button";
};
btn.onmouseout = (e) => {
  e.preventDefault();
  text.innerHTML = "The mouse pointer moves out from button";
};
btn.onmouseover = (e) => {
  e.preventDefault();
  text.innerHTML = "The mouse pointer moves onto button";
};

btn.onmouseup = (e) => {
  e.preventDefault();
  text.innerHTML = "A mouse button is released over button element";
};
