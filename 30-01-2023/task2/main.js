let link = document.getElementById("link");
let check = document.getElementById("checkBox");


// preventDefault() :: Function prevent the default behaviour of html element  action the browser makes on that event
// Examples are Given Below

link.onclick = (e) => {
     e.preventDefault();
     alert("link Default behaviour is prevented.")
};
check.onclick = (e) => {
    e.preventDefault();
    alert("checkBox Default behaviour is prevented.")
}


// stoppropagation() :: On Click button element (child element) parent element is also clicked.

// Rsolving this issue we use stoppropagation() event:: Prevent further propagation of current events by parent or child elements .
let parEle = document.getElementById("parent");
let btnEle = document.getElementById("btn");


parEle.onclick = () =>{
    console.log("Div element clicked");
}

btnEle.onclick =  (e) => {
    e.stopPropagation();
    console.log("Button Element Clicked.");
}



