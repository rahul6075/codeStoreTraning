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
 *
 * */
var BookingStatus;
(function (BookingStatus) {
    BookingStatus[BookingStatus["booked"] = 1] = "booked";
    BookingStatus[BookingStatus["pending"] = 0] = "pending";
    BookingStatus[BookingStatus["completed"] = 2] = "completed";
})(BookingStatus || (BookingStatus = {}));
var Service = /** @class */ (function () {
    function Service(id, type, category, price, description) {
        this._service_id = id;
        this._service_category = category;
        this._service_desc = description;
        this._service_type = type;
        this._service_price = price;
    }
    return Service;
}());
var Reservation = /** @class */ (function () {
    function Reservation(data) {
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
    return Reservation;
}());
var Restorant = /** @class */ (function () {
    function Restorant(id, noOfTables, arr, arr1) {
        this._id = id;
        this._noOfTables = noOfTables;
        this._services = arr;
        this._booking_record = arr1;
    }
    Restorant.prototype.addServceToRestorant = function (service) {
        this._services.push(service);
    };
    Restorant.prototype.getServicesOfRestorant = function () {
        return this._services;
    };
    Restorant.prototype.bookTable = function (data) {
        var _a;
        if ((_a = this._booking_record) === null || _a === void 0 ? void 0 : _a.includes(data)) {
            return {
                status: 400,
                msg: "Alredy Exists",
                data: [],
            };
        }
        this._booking_record.push(data);
        return {
            status: 200,
            msg: "Booking is Successfull.",
            data: this._booking_record,
        };
    };
    Restorant.prototype.getBookingRecord = function () {
        return this._booking_record;
    };
    return Restorant;
}());
// Create Services
var service1 = new Service(1, "Dining", "Date Dinner", 10000, "It a special diner menu for couples.");
var service2 = new Service(2, "Dining", "Business Dinner", 50000, "It a special diner menu for Business.");
var service3 = new Service(3, "Lunch", "Formal", 5000, "It a luch service.");
// Create Restorant
var restorant = new Restorant("0145", 19, [], []);
// Add services to restorant
restorant.addServceToRestorant(service1);
restorant.addServceToRestorant(service2);
restorant.addServceToRestorant(service3);
// Dealing with Form
var id = 0;
var getDataFormStorage = JSON.parse(localStorage.getItem("data"));
var bookingData = (getDataFormStorage === null || getDataFormStorage.length) <= 0
    ? []
    : getDataFormStorage;
var form = document.querySelector("#booking-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
        var formData = new FormData(form);
        var first_name = formData.get("first_name");
        var last_name = formData.get("last_name");
        var email = formData.get("email");
        var contact = formData.get("contact");
        var booking_date = formData.get("booking_date");
        var booking_time = formData.get("booking_time");
        var attendies = formData.get("attendies");
        var table_number = formData.get("table_number");
        var reservation_type = formData.get("reservation-type");
        var bookingObj = {
            id: id++,
            first_name: first_name,
            last_name: last_name,
            email: email,
            contact: contact,
            booking_date: booking_date,
            booking_time: booking_time,
            attendies: Number(attendies),
            table_number: Number(table_number),
            reservation_type: reservation_type,
            status: 0,
        };
        if (!(bookingData === null || bookingData === void 0 ? void 0 : bookingData.includes(bookingObj))) {
            var newBooking = new Reservation(bookingObj);
            var response = restorant.bookTable(newBooking);
            localStorage.setItem("data", JSON.stringify(response.data));
            document.getElementById("msg").innerHTML = response.msg;
        }
    }
    catch (err) {
        console.log(err);
    }
});
