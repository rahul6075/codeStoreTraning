var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/**
 *
 * @param event Priview On upload file
 */
var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById("output");
        var source = reader.result;
        output.setAttribute("src", source);
    };
    reader.readAsDataURL(event.target.files[0]);
};
var form = document.querySelector("#student-form");
form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
    var formData, arr, validation, payload, res, body, userId, input, file, fd, res_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                formData = new FormData(form);
                arr = Array.from(formData.entries());
                validation = vaidateFormInput(arr);
                if (!(validation.status === 200)) return [3 /*break*/, 5];
                payload = {
                    first_name: arr[0][1],
                    last_name: arr[1][1],
                    contact: arr[2][1],
                    email: arr[3][1],
                    password: arr[4][1],
                    address: arr[6][1],
                    gender: arr[5][1],
                };
                return [4 /*yield*/, fetch("http://localhost:3000/api/user/registration", {
                        method: "POST",
                        body: JSON.stringify(payload),
                        headers: {
                            "Content-type": "application/json;  charset=UTF-8",
                        },
                    })];
            case 2:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 3:
                body = _a.sent();
                console.log(body);
                if (!(body.status === 200)) return [3 /*break*/, 5];
                userId = body.data.id;
                input = document.querySelector('#input'), file = input.files[0];
                if (!file || !file.type.match(/image.*/))
                    throw {
                        status: 404,
                        message: "Please upload Image."
                    };
                fd = new FormData();
                fd.append("testImg", file);
                fd.append("userId", userId);
                return [4 /*yield*/, fetch('http://localhost:3000/upload', {
                        method: 'POST',
                        body: fd,
                    })];
            case 4:
                res_1 = _a.sent();
                if (res_1.status === 200) {
                    localStorage.setItem("User", JSON.stringify(body.data));
                    document.getElementById("message-res").innerHTML = "User Regsirtation Successfull";
                    form.reset();
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
function vaidateFormInput(data) {
    console.log(data);
    var nameRegex = /^[A-Za-z]+$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var contactRegext = /^[7-9][0-9]{9}$/;
    var passwordRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    try {
        data.forEach(function (element) {
            switch (element[0]) {
                case "first_name":
                    if (!nameRegex.test(element[1])) {
                        document.getElementById("first_name_err").innerHTML =
                            "Please enter a valid first name";
                        removeError("first_name_err");
                    }
                    break;
                case "last_name": {
                    if (!nameRegex.test(element[1])) {
                        document.getElementById("last_name_err").innerHTML =
                            "Please enter a valid last name";
                        removeError("last_name_err");
                    }
                    break;
                }
                case "email": {
                    if (!emailRegex.test(element[1])) {
                        document.getElementById("email_err").innerHTML =
                            "Please Enter a Valid Email";
                        removeError("email_err");
                    }
                    break;
                }
                case "contact":
                    if (!contactRegext.test(element[1])) {
                        document.getElementById("contact_err").innerHTML =
                            "Please Enter a mobile number";
                        removeError("contact_err");
                        throw "Vlidation Error";
                    }
                    break;
                case "password":
                    if (!passwordRgx.test(element[1])) {
                        document.getElementById("password_err").innerHTML =
                            "Strong Password Required.";
                        removeError("password_err");
                    }
                    break;
                case "gender":
                    if (element[1] === "") {
                        document.getElementById("gender_err").innerHTML =
                            "It is a required feild";
                        removeError("gender_err");
                    }
            }
        });
        return {
            status: 200,
            message: "Vlidation SucessFull",
        };
    }
    catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Vlidation Error",
        };
    }
}
function removeError(id) {
    setTimeout(function () {
        document.getElementById(id).innerHTML = "";
    }, 3000);
}
