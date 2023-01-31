// Enum and Inetrfaces
// Simple Status obj with its properties
var Status = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(Status.done);
// To acheive this feature and for more flesxiblity use as datatype we use emnum
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notstarted";
    StatusEnum["InProgresss"] = "pending";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var operation1 = StatusEnum.NotStarted;
console.log(operation1);
operation1 = StatusEnum.Done;
console.log(operation1);
//One More Example
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
//   let c: Circle = {
//     kind: ShapeKind.Square, // It shows the enum error
//     radius: 100,
//   };
