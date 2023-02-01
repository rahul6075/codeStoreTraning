
let arr: Array<string> = ['1', 'a', '2', 'b', '3', 'c', 'd', '5', 'e'];


// Task to check in array if anyelement is number then typecast to number data and if string then convert it to uppercase
const checkNumRegex = /^[0-9]*$/;
let newArr = arr.map((item) => {
      if(typeof item === "string"){
        if(checkNumRegex.test(item)){
            console.log(typeof item)
            return Number(item)
        }else{
            return item.toUpperCase();
        }   
      }
});

console.log(typeof newArr); // returns object data type to resolve this problem concept of narrowing introducded. 
console.log(newArr);

// instanceof and predicates

function logValue(x : Date | string){
    if(x instanceof Date){
        console.log("We can sure say that instance of date class")
    }else{
        console.log("string")
    }
}


//  type predicate 

type Fish = {swim(): void}
type Bird = {fly() : void}

function isFish(pet: Fish | Bird) : pet is Fish{
   return (pet as Fish).swim() !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        // it should be fish for sure
       console.log("Fish Food")
    }else{
        // it should be bird
        pet
        console.log("Bird Food")
    }
}
