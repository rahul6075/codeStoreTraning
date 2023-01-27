// Task ::  Create a class Area and calculate the areas of square, rectangle & triangle

class Area {
  constructor(length, width, height) {
     this.length = length;
     this.width = width;
     this.height= height;
  } // constructer to intilize the class feilds a class can have only one constructer
  getAreaSquare() {
    return this.length * this.length;
  } // accept lenght of side as argument
  getAreaRectangle() {
    return this.length * this.width;
  } // accept lenght and width as argument
  getAreaTrangle() {
    let s = (this.length + this.width + this.height) / 2;
    let exp = s * (s - this.length) * (s - this.width) * (s - this.height);
    let area = Math.pow(exp, 0.5);
    return area.toFixed(2);
  } // accept length of sides of trangle
} // class declearation

// Create A object of Class Area 

var obj1 = new Area(4,5,4); // Creating instance of class
// Find Area of square
console.log(obj1.getAreaSquare());
// Find Area of Rectangle
console.log(obj1.getAreaRectangle());
// Find Area of trangle 
console.log(obj1.getAreaTrangle());

