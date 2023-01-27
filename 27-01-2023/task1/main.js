/**
When an HTML document is loaded into a web browser, it becomes a document object.
The document object is the root node of the HTML document.
The document object is a property of the window object.
The document object is accessed with: document or window.document
 **/

let domObj = window.document; // html dom (document Object Model)
// console.log(domObj);
// For accessing elements or class we access it with document object
/**
 * For accessing element with specificid :: document.getElementById()
 * Ex- Get element having id: heading
 */

let x = document.getElementById("heading");
/**
 * variable x has all properies of heading-
 * innerHTML : content of element
 * style : style of element
 * lenght :	Returns the number of elements in an HTMLCollection
 *  */
console.log(x.innerText);

/**
 * getElementByTagName() :: Returns all the elements with given tag name
 */
let paragraphs = document.getElementsByTagName("p"); // returns the array of all p elements
let spans = document.getElementsByTagName("span");
console.log(paragraphs[0].innerHTML);
console.log(spans[0].innerHTML);
console.log(paragraphs.item(1)); // access item of array with given index
console.log(paragraphs.length); //  array size

/**
 * getElementByClassName() :: Returns all the elements with given class name
 *  OR
 * querySelector for className: document.querySelecto(".class_name");
 * querySelector for id: document.querySelecto("#id_name");
 */

let ele = document.getElementsByClassName("text-center"); // get all html element having text-center class
console.log(ele);
console.log(ele.length);

let ele1 = document.querySelector(".text-center"); // get all html element having text-center class
console.log(ele1);
console.log(ele1.length);

let ele2 = document.querySelector("#heading"); // get all html element having heading id
console.log(ele2);
console.log(ele2.length);


 
