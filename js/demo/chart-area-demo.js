// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = "#151515";

// Area Chart Example
  var ctx = document.getElementById("myAreaChart");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["hk$1000以上","hk$500-1000","hk$100-500","hk$100以下"],
      datasets: [{
        label: "種數",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [6,21,55,2],
        backgroundColor: "#58ACFA"
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'type'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 15
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 60,
            maxTicksLimit: 15
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
