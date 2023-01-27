let submitBtn = document.getElementById("btn");

/**
 * Submit function Onclick
 */
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    let image = document.getElementById("img");
    let BtnDiv = document.querySelector(".btn");
    BtnDiv.classList.toggle("on-btn");
    let btnText = document.getElementById("btn-text");
    if (btnText.innerText === "Power On") {
      btnText.innerHTML = "Power off";
      image.setAttribute("src", "./bulb-of.svg");
    } else {
      btnText.innerHTML = "Power On";
      image.setAttribute("src", "./light-bulb.svg");
    }
  } catch (err) {
    console.log(err);
  }
});
