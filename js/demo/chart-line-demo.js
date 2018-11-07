// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myLineArea");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
   labels: [ "白酒","紅酒", "氣泡酒", "甜酒", "香檳"],
   datasets: [{
     label:"均價(hk$)",
   lineTension: 0.3,
   backgroundColor: "#58ACFA",
   borderColor: "#58ACFA",
   pointRadius: 5,
   pointBackgroundColor: "#58ACFA",
   pointBorderColor: "#58ACFA",
   pointHoverRadius: 5,
   pointHoverBackgroundColor: "#58ACFA",
   pointHitRadius: 50,
   pointBorderWidth: 2,
   data: [222.00,559.51,158.75,253.75,520.00],
 }],
},
  options: {
    scales: {
      xAxes: [{
        winetype: {
          unit: '種類'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 600,
          maxTicksLimit: 6
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
