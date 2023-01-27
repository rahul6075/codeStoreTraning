const form = document.forms[0];


form.addEventListener("submit", function (e) {
  e.preventDefault();
  try {
    let arr = [];
    const formData = new FormData(this);
    const values = [...formData.entries()];
    validate(values);
    for (let [key, val] of formData.entries()) {
      arr.push(val);
    }
    let result = calculate(arr);
    let outputConatiner = document.getElementById("output");
    let p = document.createElement("p");
    p.setAttribute("class", "result");
    p.innerHTML = `Total ${arr[3]} will be ${result} &#x20b9;.`;
    outputConatiner.appendChild(p);
    form.reset();
  } catch (err) {
    console.log(err);
  }
});

/**
 * @param {array} data 
 */
function validate(data) {
  data.forEach((element) => {
    if (element[1] === "") {
      let id = element[0];
      document.querySelector(
        `#${id}`
      ).innerHTML = `${element[0]} is required feild.`;
      setTimeout(() => {
        document.querySelector(`#${id}`).innerHTML = null;
      }, 3000);
    }
  });
}

/**
 * 
 * @param {array} data 
 * @returns value
 */

function calculate(data) {
  if (data.includes("Simple Intrest")) {
    return (data[0] * data[1] * data[2]) / 100;
  } else {
    let totalAmount = data[0] * Math.pow(1 + data[1] / 100, data[2]);
    return (totalAmount - data[0]).toFixed(2);
  }
}
