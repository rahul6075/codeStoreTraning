// alert() method used to display message on web page
// window.alert("Page Loaded");
// console.log() is used to display info in browser. Used for debugging purpose.
var paraInfo = document.getElementById("info");
// innerHTML METHOD IS USED TO GET DATA INSIDE HTML ELEMENT
// console.log(paraInfo.innerHTML)

// Different Console Methods:: console.table("show json data in table format.")
// Different Console Methods:: console.error("show erros in block of code.")
// Different Console Methods:: console.trace("traces the code excecution")
// Different Console Methods:: console.time("info about code excecution time.")


var obj = {
     "name": "Rahul Chaudhary",
     "age": 21,
     "mobile": 7860965109,
}

console.log(obj);
console.table(obj)
// Using document.write() after an HTML document is loaded, will delete all existing HTML:
function tryIt(){
    document.write("All the html deleted");
}
