// Task to perform crud operations using ajax requests.
// Methods:  XMLHttpRequest object (XHR) to communicate with a web server using the AJAX technique.(Older version of make AJAX requests)
//  Method2 : Another way to make AJAX calls in JavaScript is with the fetch() method. fetch() is an API utility method built into the web browser environment. It's a newer API than XMLHttpRequest, with modern features making it easier to use.
var postData = [];
var form = document.querySelector("#booking-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = document.getElementById("form-btn");
    console.log("vcvvxvx", btn.value);
    try {
        var formData = new FormData(form);
        var userId = formData.get("userid");
        var title = formData.get("title");
        var desc = formData.get("desc");
        var postId = btn.value;
        var body = void 0;
        if (btn.value !== "0") {
            body = {
                title: title,
                body: desc,
                userId: userId,
            };
            console.log(body);
            fetch("http://localhost:3000/api/post/".concat(postId), {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                if (data) {
                    console.log("Updated Sucessfully");
                    document.getElementById("msg").innerHTML = "Updated Sucessfully";
                    setTimeout(function () {
                        document.getElementById("msg").innerHTML = "";
                    }, 3000);
                    form.reset();
                    getAllPosts();
                }
            });
        }
        else {
            body = {
                title: title,
                desc: desc,
                userId: userId,
            };
            var url = "http://localhost:3000/api/addpost";
            var mth = "POST";
            var promise = fetch(url, {
                method: mth,
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log(promise);
            promise
                .then(function (res) { return res.json(); })
                .then(function (data) {
                if (data) {
                    document.getElementById("msg").innerHTML = "Created Sucessfully";
                    setTimeout(function () {
                        document.getElementById("msg").innerHTML = "";
                    }, 3000);
                    console.log("Created Sucessfully");
                    form.reset();
                }
            })
                .catch(function (err) { return console.log(err); });
        }
        // Use  XMLHttpRequest object method
        // let url = 'https://jsonplaceholder.typicode.com/posts';
        // let xhr = new XMLHttpRequest();
        // xhr.open("POST", url, true);
        // xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        // xhr.send(JSON.stringify(body));
        // xhr.onload = function () {
        //     if(xhr.status === 201) {
        //         console.log(xhr);
        //         console.log("Post successfully created!")
        //     }else{
        //          console.log(xhr);
        //          return xhr;
        //     }
        // }
    }
    catch (err) {
        console.log(err);
        return err;
    }
});
function getAllPosts() {
    try {
        var promise = fetch("http://localhost:3000/api/posts");
        promise
            .then(function (res) { return res.json(); })
            .then(function (data) {
            postData = data.data;
            console.log("setting", postData);
            renderData(postData);
        });
    }
    catch (err) {
        console.log(err);
    }
}
/**
 *
 * @param userid number
 * @param postId number
 */
function setFormForUpdate(userid, postId) {
    try {
        console.log(postData);
        var data = postData.find(function (item) { return item._id === postId; });
        //  console.log(data);
        var userId = document.getElementById("userid");
        userId.value = userid.toString();
        var desc = document.getElementById("desc");
        desc.value = data.desc;
        var body = document.getElementById("title");
        body.value = data.title;
        var btn = document.getElementById("form-btn");
        btn.innerText = "Update";
        btn.value = postId;
    }
    catch (err) {
        console.log(err);
    }
}
function deletePost(userid, postId) {
    try {
        var promise = fetch("https://jsonplaceholder.typicode.com/posts/".concat(postId));
        promise.then(function (res) { return res.json(); }).then(function (data) {
            if (data) {
                var filtedData = postData.filter(function (item) { return item.id !== data.id; });
                renderData(filtedData);
                document.getElementById("msg").innerHTML = "Deleted Sucessfully";
                setTimeout(function () {
                    document.getElementById("msg").innerHTML = "";
                }, 3000);
                console.log("Item Deleted Sucessfully");
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}
var renderData = function (data) {
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = data === null || data === void 0 ? void 0 : data.map(function (item) {
        var id = item._id;
        return "\n               <tr>\n               <td>".concat(item.userId, "</td>\n               <td>").concat(item.title, "</td>\n               <td>").concat(item.desc, "</td>\n               <td> <i class=\"fas fa-edit\" onclick=\"setFormForUpdate(").concat(item.userId, ",'").concat(id, "')\">\n                   </i> <i class=\"fas fa-trash\" onclick=\"deletePost(").concat(item.userId, ", '").concat(id, "')\"></i>\n               </td>\n             </tr>\n                 ");
    }).join("");
};
