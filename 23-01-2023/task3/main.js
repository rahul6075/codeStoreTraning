// Checking Prime Number
function checkPrime(n){
    if(n === 0 || n === 1) return false;
    //using for loop
    for(let i=2; i*i <=n; i++){
        if(n %i === 0) return false;
    }
    return true;
}
// Checking Prime Number while loop
function checkPrime1(n){
    if(n === 0 || n === 1) return false;
    //using while loop
    let i = 2;
    while(i * i <= n){
        if(n %i === 0) return false;
        i++;
    }
    return true;
}

// for/in or for/of loop traversing in object or arr
const person = {first_name:"John", last_name:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

// for of loop
let arr = [2,4,6,8,33];
//find sum of array
let sum = 0;
for(let x of arr){
  sum += x;
}
console.log(sum);
// Print Prime Number
function printPrime(){
     var numberInput = document.getElementById("number-input").value;
     var numberList = document.querySelector(".number-list");
     for(var i=1; i <= numberInput; i++){
           if(checkPrime(i)){
               var createListElement = document.createElement("li");
               createListElement.innerHTML = i;
               numberList.appendChild(createListElement);
           }
     }
}