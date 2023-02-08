// add subject form
let noOfSubject = 0;

let user = JSON.parse(localStorage.getItem("User"));
const subform = document.querySelector("#subject-form") as HTMLFormElement;

subform.addEventListener("submit", function (e) {
  e.preventDefault();
  try {
    const formData = new FormData(subform);
    let arr = Array.from(formData);
    let subject_name = [];
    let subject_marks = [];
    let max_marks = []
    let payload = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] === "subject_name"){
            subject_name.push(arr[i][1]);
        }
        if(arr[i][0] === "marks"){
            subject_marks.push(arr[i][1]);
        }
        if(arr[i][0] === "max_marks"){
            max_marks.push(arr[i][1]);
        }
    }

    for(let i=0; i<subject_marks.length; i++){
        payload.push({
            name: subject_name[i],
            marksObitained: subject_marks[i],
            max: max_marks[0]
        })
    }
   
    //  console.log(user.id);
    fetch(`http://localhost:3000/api/user/addSubject/${user.id}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json;  charset=UTF-8",
        },
      }).then(res => res.json()).then(data => console.log(data));

  } catch (err) {
    console.log(err);
  }
});




const addSubBtn = document.getElementById("add-subject") as HTMLButtonElement;




addSubBtn.addEventListener("click", function (e) {
  e.preventDefault();
  createHtmlInput("Subject Name","subject_name");
  createHtmlInput("Marks","marks");
  createHtmlInput("Max Marks","max_marks");
  
});

function createHtmlInput(labeltxt:string,  inputId: string){
    //  let mainBox = document.getElementById("contrainer-2") as HTMLDivElement;
     let box = document.getElementById("box");
     
     let formElement = document.createElement("div");
     formElement.classList.add("form-element")
     // create a label
     let lbl = document.createElement("div");
     lbl.classList.add("lbl");
     let label = document.createElement("label");
     label.innerHTML = labeltxt;
     lbl.appendChild(label);
     // input element
     let inputEle = document.createElement("div");
     inputEle.classList.add("input-ele");
     let input = document.createElement("input");
     let span = document.createElement("span");
     input.setAttribute("class", "form-input")
     input.setAttribute("id", inputId)
     input.setAttribute("name", inputId)
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
