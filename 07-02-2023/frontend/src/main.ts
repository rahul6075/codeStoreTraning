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

const form = document.querySelector("#student-form") as HTMLFormElement;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(form);
    let arr = Array.from(formData.entries());
    let validation =  vaidateFormInput(arr);
    if (validation.status === 200) {
      let payload = {
        first_name: arr[0][1],
        last_name: arr[1][1],
        contact: arr[2][1],
        email: arr[3][1],
        password: arr[4][1],
        address: arr[6][1],
        gender: arr[5][1],
      };
      // console.log(payload);
       const res = await fetch("http://localhost:3000/api/user/registration", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json;  charset=UTF-8",
        },
      })

      const body = await res.json();
      console.log(body)
      if(body.status === 200){
         let userId = body.data.id;
         var input  = document.querySelector('#input') as HTMLInputElement,
         file = input.files[0];
         if (!file || !file.type.match(/image.*/)) throw {
          status: 404,
          message:"Please upload Image."
        };
       
        var fd = new FormData();
        fd.append("testImg", file);
        fd.append("userId", userId);
        const res = await fetch('http://localhost:3000/upload', {
           method: 'POST',
           body: fd,
        });
        if(res.status === 200){
          localStorage.setItem("User", JSON.stringify(body.data));
          document.getElementById("message-res").innerHTML ="User Regsirtation Successfull"
          form.reset();
        } 
      }
    }
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
            throw "Vlidation Error";
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
          if (element[1] === "") {
            document.getElementById("gender_err").innerHTML =
              "It is a required feild";
            removeError("gender_err");
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
      message: "Vlidation Error",
    };
  }
}

function removeError(id) {
  setTimeout(() => {
    document.getElementById(id).innerHTML = "";
  }, 3000);
}



