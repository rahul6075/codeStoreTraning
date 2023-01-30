// Promise :: it  is object represents the eventual completion (or failure) of an asynchronous operation
// it has two important atrr : Promise State , Promise Value

let form = document.forms[0];

let userData = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userName = document.getElementById("user_name").value;
  getUserData(userName).then(function (data) {
    showtableData(data);
  });
});

function getUserData(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    return response
      .json()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

var showtableData = (data) => {
  const tablebody = document.getElementById("table-body");
  console.log("FDFDFD", data);
  tablebody.innerHTML = ` <tr key=${data.id}>
  <td class="table-item">${data.login}</td>
  <td class="table-item">${data.name}</td>
  <td class="table-item">${data.public_repos}</td>
  <td class="table-item">${data.bio}</td>
</tr>`;
};
