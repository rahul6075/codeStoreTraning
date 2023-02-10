const userData = JSON.parse(localStorage.getItem("User"));

let details = JSON.parse(localStorage.getItem("details")) !== null ?  JSON.parse(localStorage.getItem("details")) : {};


window.addEventListener("load", ()=>{
        getUserDetails(userData.id);
       document.querySelector("#name").innerHTML = userData.first_name + " " + details.last_name;
       document.querySelector("#email").innerHTML = userData.email;
       document.querySelector("#contact").innerHTML = details.contact;
       let img = document.getElementById("img");
       img.setAttribute("src", `../../backend2/uploads/${details.data.image}`)
       showData(details.data.data);

});

const getUserDetails = async (id) =>{
      try {
          const res = await fetch(`http://localhost:3000/api/user/getSubjects/${id}`, {
            method: "GET"
          })
          if(res.status === 200){
              let data = await res.json();
              localStorage.setItem("details", JSON.stringify(data));
          } 
      } catch (err) {
         console.log(err);
      }
}

function showData(data){
    const tableBody : HTMLElement = document.getElementById("table-body") as HTMLTableElement;
    tableBody.innerHTML = data.map((item) =>{
          return `
          <tr class="table-row">
              <td>${item.name}</td>
              <td>${item.marksObitained}</td>
              <td>${item.max}</td>
            </tr>
          `
    }).join("");
}