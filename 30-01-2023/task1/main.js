let form = document.forms[0];

function removeError(id) {
  setTimeout(() => {
    document.getElementById(id).innerHTML = "";
  }, 3000);
}

function vaidateFormInput(data) {
    console.log(data);
  var nameRegex = /^[A-Za-z]+$/;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var contactRegext = /^[7-9][0-9]{9}$/;
  var passwordRgx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
  try {
    data.forEach((element) => {
      switch (element[0]) {
        case "first_name":
          if (!nameRegex.test(element[1])) {
            document.getElementById("first_name_err").innerHTML =
              "Please enter a valid first name";
            removeError("first_name_err");
          }
          break;
        case "last_name": {
          if (!nameRegex.test(element[1])) {
            document.getElementById("last_name_err").innerHTML =
              "Please enter a valid last name";
            removeError("last_name_err");
          }
          break;
        }
        case "email": {
          if (!emailRegex.test(element[1])) {
            document.getElementById("email_err").innerHTML =
              "Please Enter a Valid Email";
            removeError("email_err");
          }
          break;
        }
        case "contact":
          if (!contactRegext.test(element[1])) {
            document.getElementById("contact_err").innerHTML =
              "Please Enter a mobile number";
            removeError("contact_err");
          }
          break;
        case "password":
          if (!passwordRgx.test(element[1])) {
            document.getElementById("password_err").innerHTML =
              "Strong Password Required.";
            removeError("password_err");
          }
          break;
        case "gender":
            if(element[1] === ""){
                document.getElementById("gender_err").innerHTML =
              "It is a required feild";
            removeError("gender_err");
            }
      }
    });
  } catch (err) {
    console.log(err);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form Submitted.");
  try {
    const formData = new FormData(this);
    const values = [...formData.entries()];
    vaidateFormInput(values);
    // alert("Form Submitted Successfully.")
  } catch (err) {
    console.log(err);
  }
});
