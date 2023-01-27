// Second Task form Validation
const form = document.forms[0];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  try {
    const formData = new FormData(this);
    let first_name = formData.get("first_name");
    let last_name = formData.get("last_name");
    let age = formData.get("age");
    let male = formData.get("male");
    let female = formData.get("female");
    if(!first_name) throw "Name is required";
    if(!last_name) throw "last Name is required";
    if(!age) throw "Age is required";
    console.log("form submited");
    form.reset();
    document.querySelector(".error-message").innerHTML = "";
  } catch (err) {
    document.querySelector(".error-message").innerHTML = err;
  }finally{
    // document.querySelector(".error-message").innerHTML = "Submit button clicked";
  }

});

var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    var textInput = document.getElementById("number-input");
    if (!textInput.value) throw "Please enter Input.";
    if (isNaN(textInput.value)) throw "Not a number.";
    let x = Number(textInput.value);
    printPrime(x);
  } catch (err) {
    console.log(err);
  }
});

function checkPrime(n) {
  if (n === 0 || n === 1) return false;
  //using for loop
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function printPrime() {
  var numberInput = document.getElementById("number-input").value;
  var numberList = document.querySelector(".number-list");
  for (var i = 1; i <= numberInput; i++) {
    if (checkPrime(i)) {
      var createListElement = document.createElement("li");
      createListElement.innerHTML = i;
      numberList.appendChild(createListElement);
    }
  }
}
