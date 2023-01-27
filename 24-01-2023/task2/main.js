function printPattern1() {
  try {
    let numberInput = document.getElementById("number-input").value;
    if (!numberInput) throw "Enter The Input";
    let n = Number(numberInput);
    let printBox = document.querySelector(".container");
    for (let i = 0; i < n; i++) {
      let newRow = document.createElement("p");
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
          let ele = document.createElement("span");
          ele.innerHTML = "&nbsp;*";
          newRow.appendChild(ele);
        } else {
          if (j === 0 || j === n - 1) {
            let ele = document.createElement("span");
            ele.innerHTML = "&nbsp;*";
            newRow.appendChild(ele);
          } else {
            let ele = document.createElement("span");
            ele.innerHTML = "&nbsp;&nbsp;&nbsp;";
            newRow.appendChild(ele);
          }
        }
      }
      printBox.appendChild(newRow);
      document.querySelector(".message").innerHTML = null;
    }
  } catch (err) {
    document.querySelector(".message").innerHTML = err;
  }
}
function printPattern2() {
  try {
    let numberInput = document.getElementById("number-input").value;
    let n = Number(numberInput);
    if (!numberInput) throw "Enter The Input";
    let printBox = document.querySelector(".container");
    for (let i = 1; i <= n; i++) {
      let newRow = document.createElement("p");
      //Print Spaces
      for (let sp = 1; sp <= n - i; sp++) {
        let ele = document.createElement("span");
        ele.innerHTML = "&nbsp;&nbsp;";
        newRow.appendChild(ele);
      }
      // Print Number
      for (let j = 1; j <= 2 * i - 1; j++) {
        let ele = document.createElement("span");
        ele.innerHTML = j;
        newRow.appendChild(ele);
      }
      //Print Spaces
      for (let sp = 1; sp <= n - i; sp++) {
        let ele = document.createElement("span");
        ele.innerHTML = "&nbsp;";
        newRow.appendChild(ele);
      }
      printBox.appendChild(newRow);
      document.querySelector(".message").innerHTML = null;
    }
  } catch (err) {
    document.querySelector(".message").innerHTML = err;
  }
}
