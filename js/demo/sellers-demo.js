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
      categories: ['法兰西岛大区(法國)','香港','波爾多','安特衛普','薩克拉門托(美國)','馬德里','大峽谷(美國)','奧克蘭','溫泉湖(美國)','紐約'],
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
      shared: true
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
            data: [444.25,450.00,459.09,506.44,509.77,579.39,619.66,665.92,784.30,784.30],},
            {
            name: '評分',
            type: 'column',
            yAxis: 1,
            data: [5.0,4.5,4.5,5.0,4.0,5.0,5.0,4.5,4.5,4.5],
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
  $('#container3').highcharts(json);
});
