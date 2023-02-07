/**
 *
 * @param event Priview On upload file
 */
var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output") as HTMLImageElement;
    let source = reader.result as string;
    output.setAttribute("src", source);
  };
  reader.readAsDataURL(event.target.files[0]);
};

function uploadimage(){
  let result = null;
   const selectedFile = document.querySelector('#input') as HTMLFormElement;
  const formData = new FormData();
  formData.append("testImg", selectedFile.files[0]);
  fetch("http://localhost:3000/upload", {
    method: 'POST',
    body: formData,
}).then((res) => res.json()).then(data =>{
     result = data;
});
return result;
}

function upload() {
    //get the input and the file
    var input = document.querySelector('input[type=file]') as HTMLFormElement,
    file = input.files[0];
    if (!file || !file.type.match(/image.*/)) return;
    //Creates the FormData object and attach to a key name "file"
    var fd = new FormData();
    fd.append("testImg", file);
    const promise = fetch('http://localhost:3000/upload', {
       method: 'POST',
       body: fd,
    });
    promise.then(res => console.log(res.json()));
   
}

const form = document.querySelector("#student-form") as HTMLFormElement;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  try {
    const formData = new FormData(form);
    let arr = Array.from(formData.entries());
    let validation = vaidateFormInput(arr);
    if (validation.status === 200) {
      upload();
    
      // let payload = {
      //   first_name: arr[1][1],
      //   last_name: arr[2][1],
      //   contact: arr[3][1],
      //   email: arr[4][1],
      //   password: arr[5][1],
      //   address: arr[7][1],
      //   gender: arr[6][1],
      // };
      // console.log(payload);
      // const promise = fetch("http://localhost:3000/api/user/registration", {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      //   headers: {
      //     "Content-type": "application/json;  charset=UTF-8",
      //   },
      // });
      // promise.then((res) => console.log(res.json()));
    }

    // alert("Form Submitted Successfully.")
  } catch (err) {
    console.log(err);
  }
});

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
            throw "Vlidation Error";
          }
          break;
        case "last_name": {
          if (!nameRegex.test(element[1])) {
            document.getElementById("last_name_err").innerHTML =
              "Please enter a valid last name";
            removeError("last_name_err");
            throw "Vlidation Error";
          }
          break;
        }
        case "email": {
          if (!emailRegex.test(element[1])) {
            document.getElementById("email_err").innerHTML =
              "Please Enter a Valid Email";
            removeError("email_err");
            throw "Vlidation Error";
          }
          break;
        }
        case "contact":
          if (!contactRegext.test(element[1])) {
            document.getElementById("contact_err").innerHTML =
              "Please Enter a mobile number";
            removeError("contact_err");
            throw "Vlidation Error";
          }
          break;
        case "password":
          if (!passwordRgx.test(element[1])) {
            document.getElementById("password_err").innerHTML =
              "Strong Password Required.";
            removeError("password_err");
            throw "Vlidation Error";
          }
          break;
        case "gender":
          if (element[1] === "") {
            document.getElementById("gender_err").innerHTML =
              "It is a required feild";
            removeError("gender_err");
            throw "Vlidation Error";
          }
      }
    });
    return {
      status: 200,
      message: "Vlidation SucessFull",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err,
    };
  }
}

function removeError(id) {
  setTimeout(() => {
    document.getElementById(id).innerHTML = "";
  }, 3000);
}
