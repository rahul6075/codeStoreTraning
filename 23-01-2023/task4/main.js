//  javascript :: Single threaded synchronus programing language.
// Single threded:: Exceute One task at a time
// Synchronus:: All the thread excecuted line by line (Order)

// Here Code Excecution Step Explained:: Variable Envoirment, Thread of Exceution
var n = 2;
function square(num){
     var ans = num * num;
     return ans;
}

var square1 =  square(n);
var square2 = square(4);
console.log(square1)


// let , const and var
// var is hoisted 
// console.log(a);

// var a = 10;
// we can redefine it has global scope
// var a = 1000;

 // let and const are also hoisted but we can not access it before intialization they in temporal dead zone they assigned memory in different scope.

// console.log(b); // Reference error we can't access b, c brfore declearation
// let b = 30;
// const c=100;

// we can not redefine let or const varible
// let b = 20; const c = 1000 //Type Error;


//block Socpe 
var a = 10;
{
  let b = 15;
  const c = 23;
  var a = 100;
  console.log(a,b,c); // let & const are block scope variables
} //known as block
console.log(a);

