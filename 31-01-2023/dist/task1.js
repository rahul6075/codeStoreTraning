var Person = /** @class */ (function () {
    function Person(f_name, l_name, age) {
        this.first_name = f_name;
        this.last_name = l_name;
        this.age = age;
    }
    Person.prototype.getPerson = function () {
        var obj = {
            first_name: this.first_name,
            last_name: this.last_name,
            age: this.age
        };
        return obj;
    };
    return Person;
}());
var formInput = document.forms[0];
var userData = [];
formInput.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
        var formData = new FormData(formInput);
        var first_name = formData.get("first_name");
        var last_name = formData.get("last_name");
        var age = formData.get("age");
        if (age !== "" && first_name !== "" && last_name !== "") {
            var p = new Person(first_name.toString(), last_name.toString(), Number(age));
            userData.push(p);
            renderTable();
        }
    }
    catch (err) {
        console.log(err);
    }
});
function renderTable() {
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = userData.map(function (data) {
        return "<tr key=".concat(data.first_name, ">\n           <td class=\"table-item\">").concat(data.first_name, "</td>\n           <td class=\"table-item\">").concat(data.last_name, "</td>\n           <td class=\"table-item\">").concat(data.age, "</td>\n         </tr>");
    }).join("");
}
