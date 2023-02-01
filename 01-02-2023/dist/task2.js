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
// useCase(Encapsulation):: A bank account which has some balance and feature like deposit amount, withdraw amount, checkBlack;
var Organization = /** @class */ (function () {
    function Organization(bal, minNo) {
        this._assets = bal;
        this.numberOfEmployee = minNo;
    }
    Organization.prototype.checkAssets = function (user) {
        if (user === "Admin")
            return this._assets;
    };
    Organization.prototype.addAssets = function (amount) {
        console.log("Base method Called");
        this._assets = this._assets + amount;
        return this._assets;
    };
    Organization.prototype.removeAsset = function (amount) {
        this._assets = this._assets - amount;
        return this._assets;
    };
    return Organization;
}());
// let orgz1 = new Organization(100000, 100);
// orgz1.addAssets(1000);
// try to get value of balance give not acessable
//   console.log(orgz1._balance);
// console.log(orgz1.checkAssets('Admin'));
// console.log(orgz1.removeAsset(1100));
// polymorphsim
var OrganizationFinances = /** @class */ (function (_super) {
    __extends(OrganizationFinances, _super);
    function OrganizationFinances(status) {
        var _this = _super.call(this, 0, 0) || this;
        _this.status = status;
        return _this;
    }
    return OrganizationFinances;
}(Organization));
var obj1 = new Organization(10000, 100);
var obj2 = new OrganizationFinances("Stable");
// According to the specification, TypeScript does support method overloading
obj1.addAssets(100);
obj2.addAssets(200); // Overiddden Method is called known as poly Morphism (Runtime)
/**
 * Abstraction :: Will be achevied by Abstract Classes
 * Abstract class just introduced the feature all the implentation of features will in their derived classes
 * We cant not create the instance of abstract classes;
 */
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelsTime = function () {
        // Perform Some Calculations
        return Math.random();
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getStory = function () {
        console.log("Story fectched");
    };
    return Instagram;
}(TakePhoto));
var obj3 = new Instagram("test", "Test", 3);
obj3.getStory();
console.log(obj3.getReelsTime());
