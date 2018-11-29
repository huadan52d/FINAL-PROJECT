// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["一級名莊(%)", "二級名莊(%)", "三級名莊(%)", "普通酒莊(%)"],
    datasets: [{
      data: [8.64,8.64,9.88,72.84],
      backgroundColor: ['#58ACFA', '#5882FA', '#2E2EFE', '#2ECCFA'],
    }],
  },
  options: {
    legend: {
      display: true,
      position:"bottom",
      width:20,
      height:20
    }
  }
});
