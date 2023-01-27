// explore about array and Objects in JS

let obj1 = {}; //Object declearation
let arr1 = []; // Array declearation

// Accessing element in object
obj1 = {
  id: "#4y55trtr",
  name: "Rahul Chaudhary",
  age: 34,
  address: "Vill -Ranipur, Post- Munderwa ,District- Basti",
  car: [
    {
      name: "Tesla",
      model: "S3X",
      price: " 3 mill dollors",
      year: 2011,
    },
    {
      name: "Lambo",
      model: "S3X",
      price: " 5 mill dollors",
      year: 2015,
    },
    {
      name: "Ferari",
      model: "S3X",
      price: " 10 mill dollors",
      year: 2019,
    },
    {
      name: "Bugatti",
      model: "S3X",
      price: " 12 mill dollors",
      year: 2022,
    },
  ]
};

// access name of obj1(.)
console.log(obj1.name);

// Obj.entries(); // Give Every Attr a key value pair
let obj2 = {
  id: 2,
  name: "Rahul",
  age: 22
};
// Object traversal mainly used for of or 
for (const [key, val] of Object.entries(obj2)) {
  console.log(key, " ", val);
}
// Using FOR IN METHOD
for (const key in obj2) {
  console.log(key, " ", obj2[key]);
}
// Object.keys() Method :: It takes the object that you want to loop over as an argument and returns an array containing all properties names (or keys).After which you can use any of the array looping methods, such as forEach(), to iterate through the array and retrieve the value of each property.

let arr3 = Object.keys(obj2);
console.log(`arr3 : ${arr3}`);
arr3.forEach(item => {
  console.log(`object trversal : ${item} , ${obj2[item]}`);
})

// Object.values() :: It convert object into array 
let x = Object.values(obj2);
console.log(x);
// checking an attr in Obj:: hasOwn()
console.log(Object.hasOwn(obj2, 'name'))


// print number of cars and names
console.log(obj1.car.length);
obj1.car.forEach((element) => {
  console.log(element.name);
});
// filter the car which released after 2015
let filteredData = obj1.car.filter((item) => item.year >= 2015);
console.log(filteredData);
// push from front and back and middle in array

obj1.car.push({
  name: "Bugatti ",
  model: "X4",
  price: " 12 mill dollors",
  year: 2023,
}); // Add element in end

obj1.car.unshift({
  name: "Tesla",
  model: "S4 Ultra Edge",
  price: " 3 mill dollors",
  year: 2015,
});  // Add element at fornt
console.log(obj1.car.length)
// search in array find() 
console.log(obj1.car.find((item) => item.year === 2011));
// includes() checking for element presence

let array = [1, 5, 12, 30, 155, "Rahul"];
let array2 = [3, 6,9,7];
// some method is used to validate at least one element in array
let hasString = (num) => typeof (num) === "string";
console.log(array.some(hasString));
// findLast() :: Iterate from last and aceept a function 

// .form() :: carete a shallow copy of iterateble arrays
console.log(Array.from("Rahul"));

// array.reduce() function  :: find max ele in array

let res = array.reduce((sum, curr) => {
  sum += curr;
  return sum;
}, 0)
console.log(res);

// we combine arrays with concat method
console.log(array.concat(array2));

// we can a portion of array with splice(stIdx, noele);
console.log(array2.splice(1,3));

//  array.fill() method

console.log(array.fill("Rahul",2,5));

//array.every() method 
console.log(array.every((item) => item > 10));

// array.at() method
console.log(array.at(1));

// array.some() method
console.log(array.some((item) => item > 10));

// array.find() method  
console.log(array.find((item) => item > 10));

// array.findIndex() method
console.log(array.findIndex((item) => item > 10));   

// array.map() method
console.log(array.map((item) => item * 2));

// array.filter() method
console.log(array.filter((item) => item > 10));

// array.reduce() method
console.log(array.reduce((sum, curr) => {
  sum += curr;
  return sum;
}, 0));

// array.reduceRight() method
console.log(array.reduceRight((sum, curr) => {
  sum += curr;
  return sum;
}, 0));

// array.sort() method
console.log(array.sort());

// array.reverse() method
console.log(array.reverse());

// array.copyWithin() method
console.log(array.copyWithin(0, 10));

// array.fill() method
console.log(array.fill("Rahul"));

// array.keys() method
console.log(array.keys());

// array.values() method
console.log(array.values());

// array.entries() method
console.log(array.entries());

// array.includes() method
console.log(array.includes("Rahul"));
console.log(array.includes("Rahul", 2));
console.log(array.includes("Rahul", 10));
console.log(array.includes("Rahul", 10, 2));


// array.group() method

// array.flat() method
console.log(array.flat());

// array.flatMap() method
console.log(array.flatMap((item) => item.type));


// array.reduceRight() method
console.log(array.reduceRight((sum, curr) => {
  sum += curr;
  return sum;
}, 0));

// array.indexOf() method
console.log(array.indexOf("Rahul"));
console.log(array.indexOf("Rahul", 2));
console.log(array.indexOf("Rahul", 10));

// array.lastIndexOf() method
console.log(array.lastIndexOf("Rahul"));
console.log(array.lastIndexOf("Rahul", 2));
console.log(array.lastIndexOf("Rahul", 10));


// array.of() method :: returns an array
console.log(Array.of("Rahul"));
console.log(Array.of("Rahul", 2));
console.log(Array.of("Rahul", 10));

// array.toLocaleString()
const array3 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array3.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

/* Explore About Strings */

let s = "My Name is Rahul Chaudhary" // decelaration
let s1 = 'I am 22 year old.'; // '''
const s2 = new String("A String object")
// Acessing elements
console.log(s.charAt(1))
//check datatype :: valueof return primitive datatype of string object
console.log(typeof(s), typeof(s1) , typeof(s2.valueOf()));
// add two string concat
console.log(s.concat(s1))
console.log(s.concat(" ", s1));
// search()
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
// repeat() :: will repeat the string
console.log('str.repeat(3)', str.repeat(3));
// replace() :: replace the given words
const regex = /year/i;
console.log(s1.replace(regex, 'Number'));
// remove whiltespaces from both end string use trim()
console.log(s.trim());  // trimEnd() : remove from end , trimStart() : remove form front

// match() :: Match string with applied regular expression, matchAll() :: return object of all iteraters
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex1 = /[A-Z]/g;
const found = paragraph.match(regex1);
console.log(found);
//