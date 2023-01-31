// Enum and Inetrfaces

// Simple Status obj with its properties
const Status = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};
console.log(Status.done);

// To acheive this feature and for more flesxiblity use as datatype we use emnum

enum StatusEnum {
  NotStarted = "notstarted",
  InProgresss = "pending",
  Done = "done",
}

interface Task{
    id: string,
    status: StatusEnum
}

let operation1: StatusEnum = StatusEnum.NotStarted;
console.log(operation1);
operation1 = StatusEnum.Done;
console.log(operation1);

//One More Example
enum ShapeKind {
    Circle,
    Square,
  }
   
  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }
   
  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }
   
//   let c: Circle = {
//     kind: ShapeKind.Square, // It shows the enum error
//     radius: 100,
//   };