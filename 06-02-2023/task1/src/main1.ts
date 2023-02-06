// Task to perform crud operations using ajax requests.
// Methods:  XMLHttpRequest object (XHR) to communicate with a web server using the AJAX technique.(Older version of make AJAX requests)
//  Method2 : Another way to make AJAX calls in JavaScript is with the fetch() method. fetch() is an API utility method built into the web browser environment. It's a newer API than XMLHttpRequest, with modern features making it easier to use.
let postData = [];
const form: HTMLFormElement = document.querySelector("#booking-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let btn = document.getElementById("form-btn") as HTMLButtonElement;
  console.log("vcvvxvx", btn.value);
  try {
    const formData = new FormData(form);
    let userId = formData.get("userid");
    let title = formData.get("title");
    let desc = formData.get("desc");
    let postId = btn.value;
    let body: Object;
    if (btn.value !== "0") {
      body = {
        title: title as string,
        body: desc as string,
        userId: userId as string,
      };
      console.log(body);
      fetch(`http://localhost:3000/api/post/${postId}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
              console.log("Updated Sucessfully");
              document.getElementById("msg").innerHTML = "Updated Sucessfully"
              setTimeout(() => {
                  document.getElementById("msg").innerHTML = ""
              }, 3000);
            form.reset();
            getAllPosts();
          }
        });
    } else {
      body = {
        title: title as string,
        desc: desc as string,
        userId: userId,
      };
      let url = `http://localhost:3000/api/addpost`;
      let mth = "POST";
      const promise = fetch(url, {
        method: mth,
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(promise);
      promise
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            document.getElementById("msg").innerHTML = "Created Sucessfully"
            setTimeout(() => {
                document.getElementById("msg").innerHTML = ""
            }, 3000);
            console.log("Created Sucessfully");
            form.reset();
          }
        })
        .catch((err) => console.log(err));
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
  } catch (err) {
    console.log(err);
    return err;
  }
});

function getAllPosts() {
  try {
    const promise = fetch("http://localhost:3000/api/posts");
    promise
      .then((res) => res.json())
      .then((data) => {
        postData = data.data;
        console.log("setting", postData);
        renderData(postData);
      });
  } catch (err) {
    console.log(err);
  }
}

/**
 * 
 * @param userid number
 * @param postId number
 */

function setFormForUpdate(userid: string, postId: any) {
  try {
   console.log(postData)
    let data = postData.find(
      (item) => item._id === postId);
  //  console.log(data);

    let userId = document.getElementById("userid") as HTMLInputElement;
    userId.value = userid.toString();
    let desc = document.getElementById("desc") as HTMLInputElement;
    desc.value = data.desc;
    let body = document.getElementById("title") as HTMLInputElement;
    body.value = data.title;
    let btn = document.getElementById("form-btn") as HTMLButtonElement;
    btn.innerText = "Update";
    btn.value = postId;
  
  } catch (err) {
    console.log(err);
  }
}


function deletePost(userid: number, postId: number): void{
     try {
        const promise = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        promise.then(res => res.json()).then(data =>{
            if(data){
                let filtedData = postData.filter(item => item.id !== data.id);
                renderData(filtedData);
                document.getElementById("msg").innerHTML = "Deleted Sucessfully"
                setTimeout(() => {
                    document.getElementById("msg").innerHTML = ""
                }, 3000);
                console.log("Item Deleted Sucessfully")
            }
        });
     } catch (err) {
        console.log(err);
     }
}

const  renderData = (data) => {
    let tableBody = document.getElementById("table-body") as HTMLDivElement;
    tableBody.innerHTML = data
          ?.map((item) => {
            let id =item._id;
            return `
               <tr>
               <td>${item.userId}</td>
               <td>${item.title}</td>
               <td>${item.desc}</td>
               <td> <i class="fas fa-edit" onclick="setFormForUpdate(${item.userId},'${id}')">
                   </i> <i class="fas fa-trash" onclick="deletePost(${item.userId}, '${id}')"></i>
               </td>
             </tr>
                 `;
          })
          .join("");
}