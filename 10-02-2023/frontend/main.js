const form = document.querySelector("#reg-form");
form.addEventListener("submit", function(e){
    e.preventDefault()
    const formData = new FormData(form);
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");
    let role = formData.get("role");

    let payload = {
          name: name,
          email: email,
          password:password,
          role:role
    }
    console.log(payload)
    fetch('http://localhost:5050/api/user/register', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json;  charset=UTF-8",
        }, 
    }).then(res => res.json()).then(data => console.log(data));
})


