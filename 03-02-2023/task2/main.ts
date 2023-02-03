// the ability to pass in a range of types to a component, adding an extra layer of abstraction and re-usability to your code. Generics can be applied to functions, interfaces and classes in Typescript.


//Primtive types:: identity
const addUser = <T>(arg: T) => {
     let id = Math.random().toString(14);
     return {
        id: id,
        date: arg,
     }
}

console.log(addUser("12-2023"));
// Inerface Genrices
interface userIntrface<T>{
    id: string,
    name: string,
    age: number,
    time: T
}
const user:userIntrface<{value: number, timeZone: string }> = {
       id: "#4565666",
       name:"Rahul Chaudhary",
       age:22,
       time:{
        value: 10,
        timeZone: "UTC"
       }
}
console.log(addUser(user))

// We can pass two genrics 

interface userIntrface1<T, U>{
    id: string,
    name: string,
    age: number,
    time: T,
    date: U,
}

// It is also work similar As Single type gemnics