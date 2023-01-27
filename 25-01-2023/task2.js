// Show with the help of an example how access modifiers are used in JS :: Encapsulation

// Javascript there is bydefault everything is public
// for private member or function we name it with (#) prefix.
// keywords like public, private, protected exists in typescript.
class Area {
    #length;
    #width;
    #height;
    constructor(l, w, h) {
       this.#length = l;
       this.#width = w;
       this.#height= h;
    } // constructer to intilize the class feilds a class can have only one constructer
    getAreaSquare() {
      return this.#length * this.#length;
    } // accept lenght of side as argument
    #getAreaRectangle() {
      return this.#length * this.#width;
    } // accept lenght and width as argument
    getAreaTrangle() {
      let s = (this.#length + this.#width + this.#height) / 2;
      let exp = s * (s - this.#length) * (s - this.#width) * (s - this.#height);
      let area = Math.pow(exp, 0.5);
      return area.toFixed(2);
    } // accept length of sides of trangle
  } // class declearation
  
  // Create A object of Class Area 
  
  var obj1 = new Area(4,5,4); // Creating instance of class
  // try acess legth feild of Area class
//   console.log(obj1.#length) // gives error we can't access outside the classs
  // Find Area of square
  console.log(obj1.getAreaSquare());
  // Find Area of Rectangle
//   console.log(obj1.#getAreaRectangle()); // gives error we can't access outside the classs
  // Find Area of trangle 
  console.log(obj1.getAreaTrangle());
  
  