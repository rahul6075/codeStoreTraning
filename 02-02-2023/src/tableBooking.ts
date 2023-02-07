/**
 * Logic :: Restorant  which has some properties like providing differnt  type
 *          and categories of services(like: dining, Breakefast, Lunch).
 * Service: It class with some properties like (type of service, cost , category, description);
 *
 *
 * Restorant Functionalities:
 *     (I) Restorent can add services.
 *     (ii) Give booking Service from  avalable services
 *     (iii) Check Avalibity of booking.
 *     (iv)   Provide Menu And booking Status
 * */

interface serviceInterface {
  _service_id: number;
  _service_type: string;
  _service_category?: string;
  _service_price: number;
  _service_desc?: string;
}

interface resInterface {
  status: number;
  msg: string;
  data: Array<bookingInterface>;
}

enum BookingStatus {
  booked = 1,
  pending = 0,
  completed = 2,
}
interface bookingInterface {
  id: number;
  first_name: string;
  last_name?: string;
  email: string;
  contact: string;
  booking_date: string;
  booking_time: string;
  attendies: number;
  table_number: number;
  reservation_type?: string;
  status: BookingStatus;
}

class Service {
  _service_id: number;
  _service_type: string;
  _service_category: string;
  _service_price: number;
  _service_desc: string;
  constructor(
    id: number,
    type: string,
    category: string,
    price: number,
    description: string
  ) {
    this._service_id = id;
    this._service_category = category;
    this._service_desc = description;
    this._service_type = type;
    this._service_price = price;
  }
}

class Reservation implements bookingInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  booking_date: string;
  booking_time: string;
  attendies: number;
  table_number: number;
  reservation_type: string;
  status: BookingStatus;
  constructor(data: bookingInterface) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.attendies = data.attendies;
    this.booking_date = data.booking_date;
    this.booking_time = data.booking_time;
    this.table_number = data.table_number;
    this.contact = data.contact;
    this.email = data.email;
    this.status = data.status;
  }
}

class Restorant {
  _id: string;
  _noOfTables: number;
  _services: Array<serviceInterface>;
  _booking_record: Array<bookingInterface>;
  constructor(id: string, noOfTables: number, arr: [], arr1: []) {
    this._id = id;
    this._noOfTables = noOfTables;
    this._services = arr;
    this._booking_record = arr1;
  }

  addServceToRestorant(service: serviceInterface): void {
    this._services.push(service);
  }

  getServicesOfRestorant(): Array<serviceInterface> {
    return this._services;
  }
  bookTable(data: bookingInterface): resInterface {
    if (this._booking_record?.includes(data)) {
      return {
        status: 400,
        msg: "Alredy Exists",
        data: [],
      };
    }
    if(this._noOfTables > 0){
      this._booking_record.push(data);
      this._noOfTables--;
      console.log(this._noOfTables)
      return {
        status: 200,
        msg: "Booking is Successfull.",
        data: this._booking_record,
      };
    }else{
      return {
        status: 200,
        msg: "No Table Avalable",
        data: this._booking_record,
      };
    }
  }
  getBookingRecord(): Array<bookingInterface> {
    return this._booking_record;
  }
  checkAvalibity(){
      return this._noOfTables;
  }
  
}

// Create Services
const service1 = new Service(
  1,
  "Dining",
  "Date Dinner",
  10000,
  "It a special diner menu for couples."
);
const service2 = new Service(
  2,
  "Dining",
  "Business Dinner",
  50000,
  "It a special diner menu for Business."
);
const service3 = new Service(3, "Lunch", "Formal", 5000, "It a luch service.");
// Create Restorant
const restorant = new Restorant("0145", 0, [], []);
// Add services to restorant
restorant.addServceToRestorant(service1);
restorant.addServceToRestorant(service2);
restorant.addServceToRestorant(service3);
console.log(restorant.checkAvalibity());
// Dealing with Form
let id = 0;
let getDataFormStorage = JSON.parse(localStorage.getItem("data"));
let bookingData: Array<bookingInterface> =
  (getDataFormStorage === null || getDataFormStorage.length) <= 0
    ? []
    : getDataFormStorage;

const form: HTMLFormElement = document.querySelector("#booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(form);
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const booking_date = formData.get("booking_date");
    const booking_time = formData.get("booking_time");
    const attendies = formData.get("attendies");
    const table_number = formData.get("table_number");
    const reservation_type = formData.get("reservation-type");
    if(first_name==="" || email==="" || contact==="" || booking_date=== "" || booking_time===""  || attendies===""){
       document.getElementById("msg").innerHTML = "Please fill the complete form";
      return;
    }
    let bookingObj = {
      id: id++,
      first_name: first_name as string,
      last_name: last_name as string,
      email: email as string,
      contact: contact as string,
      booking_date: booking_date as string,
      booking_time: booking_time as string,
      attendies: Number(attendies),
      table_number: Number(table_number),
      reservation_type: reservation_type as string,
      status: 0 as BookingStatus,
    };
    console.log(restorant.checkAvalibity());
     if(restorant.checkAvalibity() > 0){
        const newBooking = new Reservation(bookingObj);
        let response = restorant.bookTable(newBooking);
        localStorage.setItem("data", JSON.stringify(response.data));
        document.getElementById("msg").innerHTML = response.msg;  
     }else{
        document.getElementById("msg").innerHTML = "Tables are not available";  
     }
      
    
  } catch (err) {
    console.log(err);
  }
});


function checkAvalibityTable(){
     try {
         let tables = restorant.checkAvalibity();
         if(tables > 0){
             document.getElementById("availibility_err").innerHTML = `${tables} tables are available`;
         }else{
            throw "Tables are not Available."
         }
     } catch (err) {
         document.getElementById("availibility_err").innerHTML = err;
     }
}