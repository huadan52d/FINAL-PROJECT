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
      categories: ["香港","倫敦","赫特福德(英國)","芝加哥","安特衛普","汝拉州(瑞士)","歐文(美國)","奧林匹亞(美國)","巴塞羅納","波爾多","新加坡","鮑斯頓湖(美國)","東漢普頓(美國)","聖加侖(瑞士)"],
      crosshair: true
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
      layout: 'vertical',
      align: 'left',
      y:1,
      x:60,
      verticalAlign: 'top',
      floating: true,
   };
   var series= [{
         name: '均價(hk$)',
            type: 'column',
            yAxis: 0,
            data: [210.00,342.97,351.40,376.50,399.82,400.03,431.01,431.33,464.06,501.29,519.53,539.18,572.52,956.94],

         }, {
            name: '評分',
            type: 'column',
            yAxis: 1,
            data: [5.0,5.0,5.0,4.5,5.0,5.0,5.0,5.0,5.0,4.5,4.5,4.5,5.0,4.5],
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
   $('#container').highcharts(json);
});
