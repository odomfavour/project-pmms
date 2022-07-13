// CALLING APEX CHART FOR EFFICIENCY

let selectEfficiency = document.querySelector("#efficiency-select");

// Making the month of January display on load

var optionsJan ={
  series: [{
  name: 'Petrol',
  data: [19, 0, 0]
}, {
  name: 'Diesel',
  data: [38, 0, 0]
}, {
  name: 'Prepaid',
  data: [0, 22, 0]
},
{
  name: 'PostPaid',
  data: [0, 30, 0]
},
{
  name: 'solar',
  data: [0, 0, 9]
},
{
  name: 'Wind',
  data: [0, 0, 22]
}
],
chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '100%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 0,
  colors: ['solid']
},
xaxis: {
  categories: ['Generator', 'Utility', 'Renewable'],
},
colors: [
  '#ED1C24', '#5B40C5', '#17D74D', '#3567DB', '#62C7FF', '#FBB500'
],
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return + val + "%"
    }
  }
}
};

var charts = new ApexCharts(document.querySelector("#efficiency-chart"), optionsJan);
charts.render();


// Creating a function that displays different charts when options in select is selected

function onChangeOption (event){
  let eventValue = event.target.value;
  console.log(eventValue)
  if (eventValue === "JANUARY"){
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [19, 0, 0]
      }, {
        name: 'Diesel',
        data: [38, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 22, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 30, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 9]
      },
      {
        name: 'Wind',
        data: [0, 0, 22]
      }
    ],
    colors: [
      '#ED1C24', '#5B40C5', '#17D74D', '#3567DB', '#62C7FF', '#FBB500'
    ]
    })
  } else if (eventValue === "FEBRUARY"){
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [40, 0, 0]
      }, {
        name: 'Diesel',
        data: [33, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 15, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 75, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 45]
      },
      {
        name: 'Wind',
        data: [0, 0, 5]
      }
      ],
      colors: [
        '#F7EC09', '#3EC70B', '#3B44F6', '#A149FA', '#810955', '#3AB0FF'
      ]
    })
  } else if (eventValue === "MARCH"){
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [30, 0, 0]
      }, {
        name: 'Diesel',
        data: [30, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 15, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 75, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 45]
      },
      {
        name: 'Wind',
        data: [0, 0, 5]
      }
      ],
      colors: [
        '#71C9CE', '#FF2E63', '#08D9D6', '#AA96DA', '#364F6B', '#393E46'
      ]
    })
  } else if (eventValue === "APRIL"){
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [20, 0, 0]
      }, {
        name: 'Diesel',
        data: [13, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 10, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 55, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 25]
      },
      {
        name: 'Wind',
        data: [0, 0, 15]
      }
      ],
      colors: [
        '#F637EC', '#E84545', '#00FFAB', '#AA96DA', '#3EC70B', '#393E46'
      ]
    })
  } else if (eventValue === "MAY"){
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [10, 0, 0]
      }, {
        name: 'Diesel',
        data: [43, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 19, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 25, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 35]
      },
      {
        name: 'Wind',
        data: [0, 0, 55]
      }
      ],
      colors:[
        "#FFC54D", "#FF1700", "#53BF9D", "#000000", "#F94C66", "#54BAB9"
      ]
    })
  } else if (eventValue === "JUNE"){
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [9, 0, 0]
      }, {
        name: 'Diesel',
        data: [23, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 27, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 76, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 32]
      },
      {
        name: 'Wind',
        data: [0, 0, 15]
      }
      ],
      colors:[
        "#FFE400", "#F90716", "#53BF9D", "#548CFF", "#F94C66", "#54BAB9"
    ]
    })
  } else{
    charts.updateOptions({
      series: [{
        name: 'Petrol',
        data: [5, 0, 0]
      }, {
        name: 'Diesel',
        data: [13, 0, 0]
      }, {
        name: 'Prepaid',
        data: [0, 20, 0]
      },
      {
        name: 'PostPaid',
        data: [0, 50, 0]
      },
      {
        name: 'solar',
        data: [0, 0, 15]
      },
      {
        name: 'Wind',
        data: [0, 0, 55]
      }
      ],
      colors:[
        "#14FFEC", "#FFD5CD", "#7D5A50", "#0D7377", "#F07B3F", "#54BAB9"
      ]
    })
  }
}

// Adding event listener
selectEfficiency.addEventListener("change", onChangeOption);


// CALLING APEX CHART FOR BUDGET

var optionsBudget = {
  series: [{
  name: 'Estimated',
  data: [24, 9, 4, 2, 17, 10]
}, {
  name: 'Actual',
  data: [20, 5, 11, 8, 20, 28]
}
],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '80%',
    endingShape: 'rounded',
    borderRadius: 10,
      dataLabels: {
        position: 'bottom' // top, center, bottom
      }
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
},
colors: [
  '#FB6340', '#298AFF'
],
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "k"
    }
  }
},
legend: {
  position: 'right',
    offsetY: 40,
  itemMargin: {
    horizontal: -9,
    vertical: 0
},
  onItemClick: {
    toggleDataSeries: true
  },
  onItemHover: {
    highlightDataSeries: true
  }
}
};

var budgetChart = new ApexCharts(document.querySelector("#budget-chart"), optionsBudget);
budgetChart.render();

let budgetSelect = document.querySelector("#budget-select");

function selectFilter (event){
  let eventValue = event.target.value;
  if (eventValue === "Past-months"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [20, 19, 23, 12, 10, 22]
      }, {
        name: 'Actual',
        data: [9, 25, 30, 38, 10, 15]
      }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'April', "May", "Jun"]
      }
    })
  }else if (eventValue === "Jan"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [20, 0, 0, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [9, 0, 0, 0, 0, 0]
      }
      ],
      xaxis: {
        categories: ['Jan']
      }
    })
  } else if (eventValue === "Feb"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 19, 0, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 25, 0, 0, 0, 0]
      }
      ],
      xaxis: {
        categories: ['', 'Feb']
      }
    })
  } else if (eventValue === "Mar"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 23, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 0, 30, 0, 0, 0]
      }
      ],
      xaxis: {
        categories: ['', '', 'Mar']
      }
    })
  } else if (eventValue === "Apr"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 0, 12, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 30, 0, 0]
      }
      ],
      xaxis: {
        categories: ['', '', '', 'Apr']
      }
    })
  } else if (eventValue === "May"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 19, 0, 0, 10, 0]
      }, {
        name: 'Actual',
        data: [0, 25, 0, 0, 10, 0]
      }
      ],
      xaxis: {
        categories: ['', '', '', '', 'May']
      }
    })
  } else if (eventValue === "Jun"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 0, 0, 0,22]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0, 0, 15]
      }
      ],
      xaxis: {
        categories: ['', '', '', '', '', 'Jun']
      }
    })
  } else if (eventValue === "Filter"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [24, 9, 4, 2, 17, 10]
      }, {
        name: 'Actual',
        data: [20, 5, 11, 8, 20, 28]
      }
      ],
      xaxis: {
        categories: ['Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"]
      }
    })
  } else if (eventValue === "Jul"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [24, 0, 0, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [20, 0, 0, 0, 0, 0]
      }
      ],
      xaxis: {
        categories: ['Jul']
      }
    })
  } else if  (eventValue === "Aug"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 9, 0, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 5, 0, 0, 0, 0]
      }
      ],
      xaxis: {
        categories: ['', 'Aug']
      }
    })
  } else if  (eventValue === "Sep"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 4, 0, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 0, 11, 0, 0, 0]
      }
      ],
      xaxis: {
        categories: ['', '', 'Sep']
      }
    })
  } else if (eventValue === "Oct"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 0, 2, 0, 0]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 8, 0, 0]
      }
      ],
      xaxis: {
        categories: ['', '', '', 'Oct']
      }
    })
  } else if (eventValue === "Nov"){
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 0, 0, 17, 0]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0, 20, 0]
      }
      ],
      xaxis: {
        categories: ['', '', '','', 'Nov']
      }
    })
  } else {
    budgetChart.updateOptions({
      series: [{
        name: 'Estimated',
        data: [0, 0, 0, 0, 0, 10]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0, 0, 28]
      }
      ],
      xaxis: {
        categories: ['', '', '','','', 'Dec']
      }
    })
  }

}
budgetSelect.addEventListener("change", selectFilter) 





