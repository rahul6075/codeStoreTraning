// useCase(Encapsulation):: A bank account which has some balance and feature like deposit amount, withdraw amount, checkBlack;
class Organization {
  private _assets: number;
  public numberOfEmployee: number;
  constructor(bal: number, minNo: number) {
    this._assets = bal;
    this.numberOfEmployee = minNo;
  }
  checkAssets(user: string): number {
    if (user === "Admin") return this._assets;
  }
  addAssets(amount: number): number {
    console.log("Base method Called")
    this._assets = this._assets + amount;
    return this._assets;
  }
  removeAsset(amount: number): number {
    this._assets = this._assets - amount;
    return this._assets;
  }
  
}
// let orgz1 = new Organization(100000, 100);
// orgz1.addAssets(1000);
// try to get value of balance give not acessable
//   console.log(orgz1._balance);
// console.log(orgz1.checkAssets('Admin'));
// console.log(orgz1.removeAsset(1100));

// polymorphsim

class OrganizationFinances extends Organization{
     status: string;
     constructor(status:string){
         super(0,0);
         this.status = status;
     }
    //  addAssets(amount: number): number {
    //     console.log("Overidden Method Called")
    //     return  super.addAssets(amount);
    //  }
}

const obj1 = new Organization(10000, 100);
const obj2 = new OrganizationFinances("Stable");
// According to the specification, TypeScript does support method overloading
obj1.addAssets(100);
obj2.addAssets(200); // Overiddden Method is called known as poly Morphism (Runtime)

/**
 * Abstraction :: Will be achevied by Abstract Classes
 * Abstract class just introduced the feature all the implentation of features will in their derived classes
 * We cant not create the instance of abstract classes; 
 */

abstract class TakePhoto{
    constructor(public cameraMode: string, public filter:string){ }
    abstract getStory(): void;
    getReelsTime():number{
        // Perform Some Calculations
        return Math.random();
    }
}

class Instagram extends TakePhoto{
     constructor(public cameraMode: string, public filter:string, public burst:number){
        super(cameraMode, filter);
     }
     getStory(): void {
       console.log("Story fectched")
     }
} 

const obj3 = new Instagram("test", "Test", 3);
obj3.getStory();
console.log(obj3.getReelsTime());