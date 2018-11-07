$("button#click_data").click(function(){
   var table4_items = [];
   var i = 0;
   var airtable_data_4 = "https://api.airtable.com/v0/appw2nhwOdq8ewe2j/%E5%85%8D%E7%A8%85%E9%85%92%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF?api_key=keyV24tV2nJhgN75C&sortField=價格hk$&sortDirection=desc"
   var table4_dataSet = [];

   $.getJSON(airtable_data_4,function(result){
     $.each(result.records,function(key,value){
        table4_items = [];
        table4_items.push(value.fields.價格hk$);
        table4_items.push(value.fields.產品名稱);
        table4_items.push("<img src='"+value.fields.圖片[0].thumbnails.large.url+"' width=100px height=110px/>");
        table4_items.push(value.fields.原產地);
        table4_items.push(value.fields.酒莊等級);
        table4_dataSet.push(table4_items);
        console.log(table4_items);
     });
        console.log(table4_dataSet);

        $("#table4").DataTable({
          data:table4_dataSet,
          retrive:true,
          destroy:true,
                  columns: [
                  { title: "價格hk$",
                    defaultContent:""},
                  { title: "產品名稱",
                      defaultContent:"",},
                  { title: "圖片",
                     defaultContent:"",},
                  { title: "原產地",
                    defaultContent:"" },
                  { title: "酒莊等級",
                    defaultContent:""},
                  ],
                  columnDefs:[
                   {target:1,
                    data:"img",
                    render:function(url,type,full){
                      return"<img src='$url'/>"
                    }
                  }
                             ],
   });
 });
 });
