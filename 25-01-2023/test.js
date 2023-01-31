// prototypes and prtotype Inheritence
let obj = {
    name:"Rahul",
    age:22,
    city:"Gorakhpur",
    getDeatils: function(){
          console.log("Details Printed.")
    }
};

let obj1 = {
    type: "Student"
}
// get Prototype Object
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__); //Chaining 
// Protype inheritence
// Not Recommended
obj1.__proto__= obj; //Inheritence

console.log(obj1.type);
console.log(obj1.name)
console.log(obj1.city)

// Closures :: function are bunddled with its lexical envoirement is known as closures.

function fun1(){
    var x = 9; // Lexical Bunndle
    function fun2(){
        console.log(x);
    }
    fun2();
}
fun1();

