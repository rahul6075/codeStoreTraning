interface UserInetrface {
  first_name: string;
  last_name: string;
  age: number;
}

class Person {
  first_name: string;
  last_name: string;
  age: number;
  constructor(f_name: string, l_name: string, age: number) {
    this.first_name = f_name;
    this.last_name = l_name;
    this.age = age;
  }
  public getPerson(): UserInetrface {
    let obj: UserInetrface = {
      first_name: this.first_name,
      last_name: this.last_name,
      age: this.age,
    };
    return obj;
  }
}

let formInput = document.forms[0];
let userData: Array<Person> = [];

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(formInput);
    let first_name = formData.get("first_name");
    let last_name = formData.get("last_name");
    let age = formData.get("age");
    if (age !== "" && first_name !== "" && last_name !== "") {
      let p = new Person(
        first_name.toString(),
        last_name.toString(),
        Number(age)
      );
      userData.push(p);
      renderTable();
    }
  } catch (err) {
    console.log(err);
  }
});


function renderTable(){
     let tableBody: HTMLElement = document.getElementById("table-body") as HTMLElement;
     tableBody.innerHTML = userData.map((data: Person) => {
           return `<tr key=${data.first_name}>
           <td class="table-item">${data.first_name}</td>
           <td class="table-item">${data.last_name}</td>
           <td class="table-item">${data.age}</td>
         </tr>`
     }).join("");
}
