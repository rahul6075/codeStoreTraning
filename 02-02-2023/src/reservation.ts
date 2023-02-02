let storeData = JSON.parse(localStorage.getItem("data"));
let tableData = (!storeData || storeData.length <= 0) ? [] : storeData;

window.addEventListener("load", () =>{
     const tableBody : HTMLElement = document.getElementById("table-body") as HTMLTableElement;
    tableBody.innerHTML = tableData.map((item) =>{
         console.log("vbb", item)
          return `
          <tr class="table-row" key=${item.id}>
          <td>${item.id}</td>
          <td>${item.first_name} </td>
          <td>${item.contact}</td>
          <td>${item.email}</td>
          <td>${item.attendies}</td>
          <td>${item.booking_date}</td>
          <td>${item.booking_time}</td>
          <td>${item.table_number}</td>
          <td>${item.status}</td>
        </tr> 
          `
    }).join(""); 
})