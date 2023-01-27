const cityData = [
  {
    value: "Bihar",
    name: "Bihar",
  },
  {
    value: "Chandigarh",
    name: "Chandigarh",
  },
  {
    value: "Chhattisgarh",
    name: "Chhattisgarh",
  },
  {
    value: "Delhi",
    name: "Delhi",
  },
  {
    value: "GA",
    name: "Goa",
  },
  {
    value: "GJ",
    name: "Gujarat",
  },
  {
    value: "HR",
    name: "Haryana",
  },
  {
    value: "MH",
    name: "Maharashtra",
  },
  {
    value: "HP",
    name: "Himachal Pradesh",
  },
  {
    value: "JK",
    name: "Jammu and Kashmir",
  },
  {
    value: "JH",
    name: "Jharkhand",
  },
  {
    value: "KL",
    name: "Kerala",
  },
  {
    value: "KA",
    name: "Karnataka",
  },
];

let id = 0;
let localData = JSON.parse(localStorage.getItem("table"));
let tableData = !localData || localData?.length <= 0 ? [] : localData;
let filterSource = [];
let filterdestination = [];
// Collect Added Cities
tableData.map((item) => filterSource.push(item.source));
tableData.map((item) => filterdestination.push(item.destination));

window.addEventListener("load", (e) => {
  showtableData(tableData);
  let selectSource = document.getElementById("city-select-source");
  let selectDestintion = document.getElementById("city-select-destination");

  // Filter Options
  let SourcefilterOptions = filterOptions(filterSource);
  let destinationfilterOptions = filterOptions(filterdestination);
  loadOptions(SourcefilterOptions, selectSource);
  loadOptions(destinationfilterOptions, selectDestintion);
});


/**
 * Add Schedule Function
 */
function addJourney() {
  try {
    id++;
    let sourceValue = document.querySelector("#city-select-source");
    let destintionValue = document.getElementById("city-select-destination");
    tableData.push({
      id: id,
      source: sourceValue.value,
      destination: destintionValue.value,
    });
    localStorage.setItem("table", JSON.stringify(tableData));
    showtableData(tableData);
    let SourcefilterOptions = filterOptions(filterSource);
    let destinationfilterOptions = filterOptions(filterdestination);
    loadOptions(SourcefilterOptions,  sourceValue );
    loadOptions(destinationfilterOptions, destintionValue);
  } catch (err) {
    console.log(err);
  }
}

/**
 *
 * @param {tabledata} data
 */

var showtableData = (data) => {
  const tablebody = document.getElementById("table-body");
  console.log(data);
  tablebody.innerHTML = data
    .map((item) => {
      return `
        <tr>
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

/**
 * 
 * @param {array of selected Options} data 
 * @returns filtered Options
 */
function filterOptions(data) {
  let filteredOptions = cityData.filter(function (item) {
    return data.includes(item.name) !== true;
  });
  return filteredOptions;
}
