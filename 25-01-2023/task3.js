// Show the use of static class with an example.

/**  For defining a static class we make all methods and feilds are static with static kryword
 static means :: When we define any method or feild static then it will be the property class and every instance of that class will have that property. And it can be accessed by classsname. */

class Vechile {
  static type = 42 ;
  static getCarinfo() {
    return `Information about the ${this.type}`;
  }
}
class Tata extends Vechile{
     #model = "SUV";
     getTataCarInfo(){
         return `this car model name ${this.#model}}`
     }
}
// We can acess static members of class without creating an instance on it.
console.log(Vechile.type);
console.log(obj1.getCarinfo());
// console.log(obj1.type)
// console.log(obj1.getCarinfo()) // THIS CAN'T BE DONE IN JAVASCRIPT