var chartData = [
    {
        type: "bar",
        data: {
            labels: ["FirstQuater", "SecondQuater", "ThirdQuater", "FourthQuater"],
            datasets: [
                {
                    label: "Revenue",
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: [
                        "#64c5b1",
                        "#64c5b1",
                        "#64c5b1",
                        "#64c5b1",
                        "#64c5b1",
                        "#64c5b1",
                    ],
                    borderRadius: "10px",
                    borderWidth: 1,
                    barThickness: 15,
                },
            ],
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    },
    {
        type: "polarArea",
        data: {
            labels: ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5"],
            datasets: [
                {
                    label: "Unit-1",
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(201, 203, 207)",
                        "rgb(54, 162, 235)",
                    ],
                },
                {
                    label: "Unit-3",
                    data: [44, 10, 2, 3, 4],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(201, 203, 207)",
                        "rgb(54, 162, 235)",
                    ],
                },
                {
                    label: "Unit-2",
                    data: [3, 6, 17, 20, 14],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(201, 203, 207)",
                        "rgb(54, 162, 235)",
                    ],
                },
                {
                    label: "Unit-4",
                    data: [1, 15, 12, 1, 19],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(201, 203, 207)",
                        "rgb(54, 162, 235)",
                    ],
                },
            ],
        },
        options: {},
    },
    {
        type: "line",
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: "Garment Sales",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
                {
                    label: "Car Sales",
                    data: [1, 59, 20, 31, 6, 5, 40],
                    fill: false,
                    borderColor: "#eee",
                    tension: 0.1,
                },
                {
                    label: "Alloy Sales",
                    data: [5, 20, 2, 81, 40, 43, 40],
                    fill: false,
                    borderColor: "teal",
                    tension: 0.1,
                },
            ],
        },
    },
    {
        type: "doughnut",
        data: {
            labels: ["Online Sales", "Offline Sales", "Retailers Sales"],
            datasets: [
                {
                    label: "My First Dataset",
                    data: [300, 50, 100],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                    ],
                    hoverOffset: 4,
                },
            ],
        },
        options: {},
    },
    {
        type: "radar",
        data: {
            labels: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Thrusday",
                "Friday",
                "Satturday",
            ],
            datasets: [
                {
                    label: "Model S3X",
                    data: [65, 59, 90, 81, 56, 55],
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgb(255, 99, 132)",
                    pointBackgroundColor: "rgb(255, 99, 132)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                },
                {
                    label: "Model S3",
                    data: [28, 48, 40, 19, 96, 27],
                    fill: true,
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgb(54, 162, 235)",
                    pointBackgroundColor: "rgb(54, 162, 235)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(54, 162, 235)",
                },
            ],
        },
        options: {},
    },
];
var barChart = document.getElementById("myChart");
var pieChart = document.getElementById("pie-chart");
var lineChart = document.getElementById("curve-chart");
var donutChart = document.getElementById("horigentle-chart");
var radarChart = document.getElementById("radar-chart");
var chart1 = new Chart(barChart, chartData[0]);
var chart2 = new Chart(pieChart, chartData[1]);
var chart3 = new Chart(lineChart, chartData[2]);
var chart4 = new Chart(donutChart, chartData[3]);
var chart5 = new Chart(radarChart, chartData[4]);
