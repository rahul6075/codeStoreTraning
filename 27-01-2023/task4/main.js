const cityData = [
  {
    id: 0,
    value: "CV",
    name: "--Please choose an option--",
  },
  {
    id: 1,
    value: "BH",
    name: "Bihar",
  },
  {
    id: 2,
    value: "CH",
    name: "Chandigarh",
  },
  {
    id: 3,
    value: "CHT",
    name: "Chhattisgarh",
  },
  {
    id: 4,
    value: "DC",
    name: "Delhi",
  },
  {
    id: 5,
    value: "GA",
    name: "Goa",
  },
  {
    id: 6,
    value: "GJ",
    name: "Gujarat",
  },
  {
    id: 7,
    value: "HR",
    name: "Haryana",
  },
  {
    id: 8,
    value: "MH",
    name: "Maharashtra",
  },
  {
    id: 9,
    value: "HP",
    name: "Himachal Pradesh",
  },
  {
    id: 10,
    value: "JK",
    name: "Jammu and Kashmir",
  },
  {
    id: 11,
    value: "JH",
    name: "Jharkhand",
  },
  {
    id: 12,
    value: "KL",
    name: "Kerala",
  },
  {
    id: 13,
    value: "KA",
    name: "Karnataka",
  },
];

let id = 0;
let localData = JSON.parse(localStorage.getItem("table"));
let tableData = !localData || localData?.length <= 0 ? [] : localData;

window.addEventListener("load", (e) => {
  showtableData(tableData);
  let selectSource = document.getElementById("city-select-source");
  let selectDestintion = document.getElementById("city-select-destination");
  // Filter Options
  loadOptions(cityData, selectSource);
  loadOptions(cityData, selectDestintion);
});

function disable(data) {
  var options = document
    .getElementById("city-select-destination")
    .getElementsByTagName("option");
  console.log(data);
  for (var i = 0; i < options.length; i++) {
    if (options[i].value === data) {
      options[i].disabled = true;
    }
  }
}

function disable2(data) {
  var options = document
    .getElementById("city-select-source")
    .getElementsByTagName("option");
  console.log(data);
  for (var i = 0; i < options.length; i++) {
    if (options[i].value === data) {
      options[i].disabled = true;
    }
  }
}

function enable(id){
  var options = document
  .getElementById(id)
  .getElementsByTagName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = false;
  }
}

function onChange1() {
  try {
    enable("city-select-source");
    let destValue = document.querySelector("#city-select-destination").value;
    console.log(destValue);
    if (destValue !== "" || sourceValue !== "--Please choose an option--") {
     var options = document
       .getElementById("city-select-source")
       .getElementsByTagName("option");
     for (var i = 0; i < options.length; i++) {
       // lowercase comparison for case-insensitivity
       if (options[i].value == destValue) {
         options[i].disabled = true;
       }
     }
   }
   let arr = [];
   tableData.map((obj) => {
     if (destValue === obj.destination) {
       arr.push(obj.source);
     }
   });
   arr.forEach((data) => {
      disable2(data)
   })
  } catch (err) {
    console.log(err);
  }
}


/**
 * function to filter destination option on selecting source
 */
function onChange() {
  try {
    enable("city-select-destination");
    let sourceValue = document.querySelector("#city-select-source").value;
    if (sourceValue !== "--Please choose an option--") {
      var options = document
        .getElementById("city-select-destination")
        .getElementsByTagName("option");
      for (var i = 0; i < options.length; i++) {
        // lowercase comparison for case-insensitivity
        if (options[i].value == sourceValue) {
          options[i].disabled = true;
        }
      }
      let arrSource = [];

      tableData.map((obj) => {
        let selectSource = document.getElementById("city-select-source").value;
        if (selectSource === obj.source) {
          arrSource.push(obj.destination);
        }
      });

      arrSource.forEach((item) => {
        disable(item);
      });
    } else {
      throw "Please Select a Source.";
    }
  } catch (err) {
    console.log(err);
  }
}

function disabledestOptions(tableData, obj) {
  if (tableData.includes(obj)) {
    var options = document
      .getElementById("city-select-destination")
      .getElementsByTagName("option");
    for (var i = 0; i < options.length; i++) {
      // lowercase comparison for case-insensitivity
      if (options[i].value == obj.destination) {
        options[i].disabled = true;
      }
    }
  }
}

function check(arr, obj) {
  let x = arr.find(
    (item) => item.souce === obj.souce && item.destination === obj.destination
  );
  return x;
}
/**
 * Add Schedule Function
 */
function addJourney() {
  try {
    let sourceInput = document.querySelector("#city-select-source");
    let destintionInput = document.getElementById("city-select-destination");
    console.log(sourceInput.value, destintionInput.value)
    // Check for null validation
    if (
      sourceInput.value === "" ||
      destintionInput.value === "" ||
      sourceInput.value === "--Please choose an option--" ||
      destintionInput.value === "--Please choose an option--"
    ) {
      throw "Please Select Options";
    } else {
      id++;
      let scheduleObj = {
        travelId: id,
        source: sourceInput.value,
        destination: destintionInput.value,
      };
      // console.log(scheduleObj);
      tableData.push(scheduleObj);
      localStorage.setItem("table", JSON.stringify(tableData));
      // Rerender Table
      showtableData(tableData);
      sourceInput.value = "--Please choose an option--";
      destintionInput.value = "--Please choose an option--";
    
      enable("city-select-source");
      enable("city-select-destination");
    }
  } catch (err) {
    setTimeout(() => {
      document.getElementById("message").innerHTML = err;
    }, 3000);
    console.log(err);
  }
}

/**
 * @param {tabledata} data
 */

var showtableData = (data) => {
  const tablebody = document.getElementById("table-body");
  console.log(data);
  tablebody.innerHTML = data
    .map((item) => {
      return `
        <tr key=${item.travelId}>
          <td class="table-item">${item.source}</td>
          <td class="table-item">${item.destination}</td>
        </tr>
        `;
    })
    .join("");
};

/**
 * @param {cities} data
 * @param {*selected input } ele
 */
const loadOptions = (data, ele) => {
  ele.innerHTML = data.map((item) => {
    return `
       <option value="${item.name}">${item.name}</option>
    `;
  });
};
