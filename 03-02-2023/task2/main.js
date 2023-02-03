// the ability to pass in a range of types to a component, adding an extra layer of abstraction and re-usability to your code. Generics can be applied to functions, interfaces and classes in Typescript.
//Primtive types:: identity
var addUser = function (arg) {
    var id = Math.random().toString(14);
    return {
        id: id,
        date: arg
    };
};
console.log(addUser("12-2023"));
var user = {
    id: "#4565666",
    name: "Rahul Chaudhary",
    age: 22,
    time: {
        value: 10,
        timeZone: "UTC"
    }
};
console.log(addUser(user));
