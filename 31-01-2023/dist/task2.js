// Access Specifier In type script :: public , private , protected
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
/**
 *  public -- Accessable any where (same class, inherited class, Any instance of Objects) By default all the menbver are public;
 *  private: -- Accessable only in same class
 *  protected: -- Accessablein same class and Inherited Classes.
 *  readonly: it cant be changed.
 */
var Vechile = /** @class */ (function () {
    function Vechile(model, regNo, type, v) {
        this.modelNo = model;
        this.regNo = regNo;
        this.vechilePurpose = type;
        this.version = v;
    }
    Vechile.prototype.getRegNumber = function () {
        return this.regNo;
    };
    return Vechile;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(modelNo, regNo, vp, bd, version) {
        var _this = _super.call(this, modelNo, regNo, vp, version) || this;
        _this.brandName = bd;
        return _this;
    }
    Car.prototype.getCarInfo = function () {
        var res = {
            model: this.modelNo,
            // RegNo is private properties of vechile so we get can get this by its protected getRegNumber() function
            regNo: this.getRegNumber(),
            vrchileUsecase: this.vechilePurpose,
            brandName: this.brandName
        };
        return res;
    };
    return Car;
}(Vechile));
var tesla = new Car("S3X", "232344332", "public transportation", "Tesla", "1.0.1");
console.log(tesla.getCarInfo());
