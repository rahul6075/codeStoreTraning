let submitBtn = document.querySelector(".slide-btn");
let click = 1;
let headings = [
  "Jobs fill your pockets, adventures fill your soul.",
  "Remember that happiness is a way of travel, not a destination.",
  "The world is a book and those who do not travel read only one page.",
  "Travel is the only thing you buy that makes you richer",
  "Expand Your Knowledge.",
  "Jobs fill your pockets, adventures fill your soul.",
];
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  click++;
  try {
    let getImage = document.querySelector("#bg-image");
    let heading = document.querySelector(".heading");
    let para = document.getElementById("desc");
    if (click >= 6 || click < 1) click = 1;
    getImage.setAttribute("src", `./assets/img${click}.jpg`);
    heading.innerHTML = headings[click];
    para.classList.toggle("sub-heading2");
  } catch (err) {
    console.log(err);
  }
});
