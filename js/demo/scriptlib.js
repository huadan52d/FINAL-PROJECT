$("button#get_data").click(function() {
        var table1_items = [];
         var i = 0;
         var airtable_read_endpoint ="https://api.airtable.com/v0/appw2nhwOdq8ewe2j/%E5%9D%87%E5%83%B9%E8%A1%A8?api_key=keyV24tV2nJhgN75C&sortField=評分&sortDirection=desc&view=Grid%20view";
         var table1_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table1_items = [];
                        table1_items.push(value.fields.評分);
                        table1_items.push(value.fields.均價hk$);
                        table1_items.push(value.fields.最高價hk$);
                        table1_items.push(value.fields.最低價hk$);
                        table1_dataSet.push(table1_items);
                        console.log(table1_items);
                 }); // end .each
                 console.log(table1_dataSet);
                $('#table1').DataTable( {
                    data: table1_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "評分",
                          defaultContent:""},
                        { title: "均價hk$",
                              defaultContent:""},
                        { title: "最高價hk$",
                          defaultContent:""},
                        { title: "最低價hk$",
                            defaultContent:""},
                    ] // rmf columns
                } );
      }); // end .getJSON
       });

     $("button#get_price").click(function() {
               var table2_items = [];
                var i = 0;
                var airtable_read_endpoint ="https://api.airtable.com/v0/appw2nhwOdq8ewe2j/%E5%9D%87%E5%83%B9%E8%A1%A82?api_key=keyV24tV2nJhgN75C&sortField=評分&sortDirection=desc&view=Grid%20view";
                var table2_dataSet = [];
                $.getJSON(airtable_read_endpoint, function(result) {
                       $.each(result.records, function(key,value) {
                           table2_items = [];
                               table2_items.push(value.fields.評分);
                               table2_items.push(value.fields.均價hk$);
                               table2_items.push(value.fields.最高價hk$);
                               table2_items.push(value.fields.最低價hk$);
                               table2_dataSet.push(table2_items);
                               console.log(table2_items);
                        }); // end .each
                        console.log(table2_dataSet);
                       $('#table2').DataTable( {
                           data: table2_dataSet,
                           retrieve: true,
                           ordering: false,
                           columns: [
                               { title: "評分",
                                 defaultContent:""},
                               { title: "均價hk$",
                                     defaultContent:""},
                               { title: "最高價hk$",
                                 defaultContent:""},
                               { title: "最低價hk$",
                                   defaultContent:""},
                           ] // rmf columns
                       } );
             }); // end .getJSON
              });

              $("button#get_average").click(function() {
                        var table3_items = [];
                         var i = 0;
                         var airtable_read_endpoint ="https://api.airtable.com/v0/appw2nhwOdq8ewe2j/%E5%9D%87%E5%83%B9%E8%A1%A83?api_key=keyV24tV2nJhgN75C&sortField=評分&sortDirection=desc&view=Grid%20view";
                         var table3_dataSet = [];
                         $.getJSON(airtable_read_endpoint, function(result) {
                                $.each(result.records, function(key,value) {
                                    table3_items = [];
                                        table3_items.push(value.fields.評分);
                                        table3_items.push(value.fields.均價hk$);
                                        table3_items.push(value.fields.最高價hk$);
                                        table3_items.push(value.fields.最低價hk$);
                                        table3_dataSet.push(table3_items);
                                        console.log(table3_items);
                                 }); // end .each
                                 console.log(table3_dataSet);
                                $('#table3').DataTable( {
                                    data: table3_dataSet,
                                    retrieve: true,
                                    ordering: false,
                                    columns: [
                                        { title: "評分",
                                          defaultContent:""},
                                        { title: "均價hk$",
                                              defaultContent:""},
                                        { title: "最高價hk$",
                                          defaultContent:""},
                                        { title: "最低價hk$",
                                            defaultContent:""},
                                    ] // rmf columns
                                } );
                      }); // end .getJSON
                       });
