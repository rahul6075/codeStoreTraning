var storeData = JSON.parse(localStorage.getItem("data"));
var tableData = (!storeData || storeData.length <= 0) ? [] : storeData;
window.addEventListener("load", function () {
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = tableData.map(function (item) {
        console.log("vbb", item);
        return "\n          <tr class=\"table-row\" key=".concat(item.id, ">\n          <td>").concat(item.id, "</td>\n          <td>").concat(item.first_name, " </td>\n          <td>").concat(item.contact, "</td>\n          <td>").concat(item.email, "</td>\n          <td>").concat(item.attendies, "</td>\n          <td>").concat(item.booking_date, "</td>\n          <td>").concat(item.booking_time, "</td>\n          <td>").concat(item.table_number, "</td>\n          <td>").concat(item.status, "</td>\n        </tr> \n          ");
    }).join("");
});
