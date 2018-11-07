Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = "#151515";

var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["乾(不甜)", "半乾(微甜)", "中等", "甜","其他甜度"],
    datasets: [{
      label: "均價(hk$)",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [522.23,230.00,352.50,207.14,357.14],
      backgroundColor: "#58ACFA"}],},

  options: {
    scales: {
      xAxes: [{
        time: {
          unit: '均價(hk$)'
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
