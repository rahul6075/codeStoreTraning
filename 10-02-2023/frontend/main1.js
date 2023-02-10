const form = document.querySelector("#log-form");
form.addEventListener("submit", function(e){
    e.preventDefault()
    const formData = new FormData(form);
    let email = formData.get("email");
    let password = formData.get("password");
    let payload = {
          email: email,
          password:password,
    }
    console.log(payload)
    fetch('http://localhost:5050/api/user/login', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json;  charset=UTF-8",
        }, 
    }).then(res => res.json()).then(data => {
         localStorage.setItem("User", JSON.stringify(data));
         console.log(data.message);
    });
})


