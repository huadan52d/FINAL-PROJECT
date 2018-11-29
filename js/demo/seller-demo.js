$(document).ready(function() {
   var chart = {
      zoomType: '均價(hk$)'
   };
   var subtitle = {
      text: 'x軸:主要產地,y軸(左):均價,y軸(右):評分'
   };
   var title = {
      text: '全球產地比價'
   };
   var xAxis = {
      categories: ['波爾多', '倫敦', '紐約', '鮑斯頓湖(美國)', '奧克蘭', '香港', '拉斯維加斯', '貝爾維尤(美國)','薩克拉門托(美國)','奧蘭多'],
      crosshair: false
   };
   var yAxis= [{ // 第一条Y轴
      labels: {
         format: 'hk${value}',
         style: {
            color: "black"
         }
      },
      title: {
         text: '均價',
         style: {
            color: "black"
         }
      }
   }, { // 第二条Y轴
      title: {
         text: '評分',
         style: {
            color: "black"
         }
      },
      labels: {
         format: '{value}',
         style: {
            color: "black"
         }
      },
      opposite: true
   }];
   var tooltip = {
      shared: true,
   };
   var legend = {
      layout: 'horizontal',
      align: 'left',
      x:2,
      y:20,
      verticalAlign: 'bottom',
      floating: true,
   };
   var series= [{
         name: '均價(hk$)',
            type: 'column',
            yAxis: 0,
            data: [224.35,234.23,289.83,311.71,338.08,344.00,352.89,352.89,352.89,352.89],

         }, {
            name: '評分',
            type: 'column',
            yAxis: 1,
            data: [4.5,5.0,5.0,4.5,4.5,4.5,5.0,4.5,4.0,5.0],
        }
   ];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.subtitle = subtitle;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;
   json.series = series;
  $('#container1').highcharts(json);
});
