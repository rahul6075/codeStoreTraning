
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
    // Method Overloading
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}

class Engineer extends Employee{
       designation: string;
       constructor(designation: string, firstNamr: string, lastName: string, jobtitle: string){
            super(firstNamr, lastName, jobtitle);
            this.designation = designation;
       } 
       
       describe(): string {
           return super.describe() + `in Code Store Pvt Ltd`
       }
}


const employee = new Employee('John','Doe','Front-endDeveloper');
console.log(employee.getFullName());
console.log(employee.describe());

// Multi level Inheritence
const engineer1 = new Engineer("Lead Engineer","Mridul", "Talwar", ".Net Developer");
console.log(engineer1.getFullName());
console.log(engineer1.describe());
