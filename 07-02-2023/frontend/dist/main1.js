// add subject form
var noOfSubject = 0;
var user = JSON.parse(localStorage.getItem("User"));
var subform = document.querySelector("#subject-form");
subform.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
        var formData = new FormData(subform);
        var arr = Array.from(formData);
        var subject_name = [];
        var subject_marks = [];
        var max_marks = [];
        var payload = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0] === "subject_name") {
                subject_name.push(arr[i][1]);
            }
            if (arr[i][0] === "marks") {
                subject_marks.push(arr[i][1]);
            }
            if (arr[i][0] === "max_marks") {
                max_marks.push(arr[i][1]);
            }
        }
        for (var i = 0; i < subject_marks.length; i++) {
            payload.push({
                name: subject_name[i],
                marksObitained: subject_marks[i],
                max: max_marks[0]
            });
        }
        //  console.log(user.id);
        fetch("http://localhost:3000/api/user/addSubject/".concat(user.id), {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json;  charset=UTF-8",
            },
        }).then(function (res) { return res.json(); }).then(function (data) { return console.log(data); });
    }
    catch (err) {
        console.log(err);
    }
});
var addSubBtn = document.getElementById("add-subject");
addSubBtn.addEventListener("click", function (e) {
    e.preventDefault();
    createHtmlInput("Subject Name", "subject_name");
    createHtmlInput("Marks", "marks");
    createHtmlInput("Max Marks", "max_marks");
});
function createHtmlInput(labeltxt, inputId) {
    //  let mainBox = document.getElementById("contrainer-2") as HTMLDivElement;
    var box = document.getElementById("box");
    var formElement = document.createElement("div");
    formElement.classList.add("form-element");
    // create a label
    var lbl = document.createElement("div");
    lbl.classList.add("lbl");
    var label = document.createElement("label");
    label.innerHTML = labeltxt;
    lbl.appendChild(label);
    // input element
    var inputEle = document.createElement("div");
    inputEle.classList.add("input-ele");
    var input = document.createElement("input");
    var span = document.createElement("span");
    input.setAttribute("class", "form-input");
    input.setAttribute("id", inputId);
    input.setAttribute("name", inputId);
    input.setAttribute("type", "text");
    // append in input div
    inputEle.appendChild(input);
    inputEle.appendChild(span);
    formElement.appendChild(lbl);
    formElement.appendChild(inputEle);
    // put in box
    box.appendChild(formElement);
    //  mainBox.appendChild(box);
}
