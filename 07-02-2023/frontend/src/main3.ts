const userData = JSON.parse(localStorage.getItem("User"));

let details = JSON.parse(localStorage.getItem("details")) !== null ?  JSON.parse(localStorage.getItem("details")) : {};


window.addEventListener("load", ()=>{
        getUserDetails(userData.id);
        console.log("fdsfdf", details)
       document.querySelector("#name").innerHTML = details.first_name + " " + details.last_name;
       document.querySelector("#email").innerHTML = details.email;
       document.querySelector("#contact").innerHTML = details.contact;
       let img = document.getElementById("img");
       img.setAttribute("src", `data:${details.image.contentType};base64,${details.image.data.data.toString('base64')}`)
       showData(details.subjects);

});

const getUserDetails = async (id) =>{
      try {
          const res = await fetch(`http://localhost:3000/api/user/getUser/${id}`, {
            method: "GET"
          })
          if(res.status === 200){
              let data = await res.json();
              localStorage.setItem("details", JSON.stringify(data.data));
          } 
      } catch (err) {
         console.log(err);
      }
}

function showData(data){
    const tableBody : HTMLElement = document.getElementById("table-body") as HTMLTableElement;
    tableBody.innerHTML = data.map((item) =>{
         console.log("vbb", item)
          return `
          <tr class="table-row">
              <td>${item.name}</td>
              <td>${item.marksObitained}</td>
              <td>${item.max}</td>
            </tr>
          `
    }).join("");
}