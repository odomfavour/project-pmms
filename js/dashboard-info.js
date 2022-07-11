
var options = {
  series: [2, 3],
  chart: {
  type: 'donut',
},
labels: ['Petrol','Diesel'],
dataLabels: {
  enabled: false
},
colors:['#F30A13', '#5B40C5'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 270
    },
    legend: {
      position: 'right'
    }
  },
  
}]
};

var chart = new ApexCharts(document.querySelector("#generator-chart"), options);
chart.render();

var options = {
  series: [1, 5],
  chart: {
  type: 'donut',
  size: '25%'
},
labels: [ 'Solar', 'Wind'],
dataLabels: {
  enabled: false
},
colors:['#62C7FF', '#FBB500'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 270
    },
    legend: {
      position: 'right'
    }
  }
}]
};

var chartwo = new ApexCharts(document.querySelector("#renewable-chart"), options);
chartwo.render();


let generatorChart = document.querySelector("#generator-chart");
let renewableChart = document.querySelector("#renewable-chart");
let select = document.querySelector("#inputGroupSelect01");


function onChangeGenerator (event){
  let eventValue = event.target.value;
  if (eventValue === "January"){
    chart.updateOptions({
      series: [2, 3],
      colors:['#F30A13', '#5B40C5']
  })
  chartwo.updateOptions({
    series: [1, 5],
    colors:['#62C7FF', '#FBB500']
})
}
  else if (eventValue === "February"){
    chart.updateOptions({
      series: [5, 2],
      colors:['#FF5733', '#8E44AD']
  })
  chartwo.updateOptions({
    series: [2, 4],
    colors:['#EB1D36', '#1C2833']
  })
  }

  else if (eventValue === "March"){
    chart.updateOptions({
      series: [7, 5],
      colors:['#4A235A', '#F1C40F']
  })
  chartwo.updateOptions({
    series: [6, 3],
    colors:['#154360', '#943126']
  })
  }

  else if (eventValue === "April"){
    chart.updateOptions({
      series: [7, 2],
      colors:['#186A3B', '#F1C40F']
  })
  chartwo.updateOptions({
    series: [5, 3],
    colors:['#EB984E', '#A04000']
  })
  }
  else if (eventValue === "May"){
    chart.updateOptions({
      series: [9, 5],
      colors:['#0B5345', '#E74C3C']
  })
  chartwo.updateOptions({
    series: [7, 6],
    colors:['#78281F', '#A04000']
  })
  }

  else if (eventValue === "June"){
    chart.updateOptions({
      series: [5, 8],
      colors:['#BA4A00', '#E74C3C']
  })
  chartwo.updateOptions({
    series: [9, 4],
    colors:['#154360', '#145A32']
  })
  }

  else 
    chart.updateOptions({
      series: [5, 7],
      colors:['#F30A13', '#5B40C5']
  })
  chartwo.updateOptions({
    series: [1, 4],
    colors:['#154360', '#145A32']
  })
  
}

select.addEventListener("change", onChangeGenerator);

const t = new Date();
let time = t.toLocaleString();
document.querySelector('.time').innerHTML = time;
document.querySelector('.time-one').innerHTML = time;
document.querySelector('.time-two').innerHTML = time;


