$("button#show_time").click(function(){
   var table4_items = [];
   var i = 0;
   var airtable_data_4 = "https://api.airtable.com/v0/appw2nhwOdq8ewe2j/%E5%85%8D%E7%A8%85%E9%85%92%E8%B3%BC%E8%B2%B7%E8%81%96%E5%9C%B0%28YELP%E6%8E%A8%E8%96%A6%29?api_key=keyV24tV2nJhgN75C"
   var table4_dataSet = [];

   $.getJSON(airtable_data_4,function(result){
     $.each(result.records,function(key,value){
        table4_items = [];
        table4_items.push(value.fields.是否開放);
        table4_items.push(value.fields.開放時間);
        table4_dataSet.push(table4_items);
        console.log(table4_items);
     });
        console.log(table4_dataSet);

        $("#table4").DataTable({
          data:table4_dataSet,
          retrive:true,
          destroy:true,
                  columns: [
                  { title: "是否開放",
                    defaultContent:""},
                  { title: "開放時間",
                      defaultContent:"",},
                  ],

   });
 });
 });
