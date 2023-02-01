var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = 
        // call the constructor of the Person class:
        _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    // Method Overloading
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "I'm a ".concat(this.jobTitle, ".");
    };
    return Employee;
}(Person));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(designation, firstNamr, lastName, jobtitle) {
        var _this = _super.call(this, firstNamr, lastName, jobtitle) || this;
        _this.designation = designation;
        return _this;
    }
    Engineer.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "in Code Store Pvt Ltd";
    };
    return Engineer;
}(Employee));
var employee = new Employee('John', 'Doe', 'Front-endDeveloper');
console.log(employee.getFullName());
console.log(employee.describe());
// Multi level Inheritence
var engineer1 = new Engineer("Lead Engineer", "Mridul", "Talwar", ".Net Developer");
console.log(engineer1.getFullName());
console.log(engineer1.describe());
