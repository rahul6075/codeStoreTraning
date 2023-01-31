// Access Specifier In type script :: public , private , protected

/**
 *  public -- Accessable any where (same class, inherited class, Any instance of Objects) By default all the menbver are public;
 *  private: -- Accessable only in same class
 *  protected: -- Accessablein same class and Inherited Classes.
 *  readonly: it cant be changed.
 */

class Vechile {
  protected modelNo: string;
  private regNo: string;
  public vechilePurpose: string;
  readonly version;
  constructor(model: string, regNo: string, type: string, v: string) {
    this.modelNo = model;
    this.regNo = regNo;
    this.vechilePurpose = type;
    this.version = v;
  }
  protected getRegNumber(): string {
    return this.regNo;
  }

// Error : Version is is read Only datatype

//   chnageVersion(){
//      this.version = "1.02..";
//  }
}

class Car extends Vechile {
  public brandName: string;
  constructor(modelNo: string, regNo: string, vp: string, bd: string, version:string) {
    super(modelNo, regNo, vp, version);
    this.brandName = bd;
  }
  public getCarInfo(): Object {
    let res = {
      model: this.modelNo,
      // RegNo is private properties of vechile so we get can get this by its protected getRegNumber() function
      regNo: this.getRegNumber(),
      vrchileUsecase: this.vechilePurpose,
      brandName: this.brandName,
    };
    return res;
  }
}

let tesla = new Car("S3X", "232344332", "public transportation", "Tesla", "1.0.1");
console.log(tesla.getCarInfo());
