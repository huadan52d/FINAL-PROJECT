    var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
    var map = L.map('map')
          .addLayer(mapboxTiles)
          .setView([22.287111, 114.191667],9);
    var items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/appw2nhwOdq8ewe2j/%E5%85%8D%E7%A8%85%E9%85%92%E8%B3%BC%E8%B2%B7%E8%81%96%E5%9C%B0%28YELP%E6%8E%A8%E8%96%A6%29?api_key=keyV24tV2nJhgN75C";
    var data = [];
    var LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: 'icon.png',
        iconSize:     [60, 60],
      }
    });
    var wineIcon = new LeafIcon({iconUrl: 'icon.png'});

    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = {};
                   items["name"] = value.fields.name;
                   items["genre"] = value.fields.genre;
                   items["image_url"] = value.fields.image_url;
                   items["contact"] = value.fields.contact;
                   items["address"] = value.fields.address;
                   items["open_closed"]=value.fields.open_closed;
                   items["opening_time"]=value.fields.opening_time;
                   items["Lat"] = value.fields.Lat;
                   items["Lng"] = value.fields.Lng;
                   data.push(items);
                   console.log(items);
            });
    });
function show_districts(){
      for (var i in data) {
          var latlng = L.latLng({ lat: data[i].Lat, lng: data[i].Lng});
          L.marker( latlng,{icon:wineIcon})
              .bindPopup( '<img src="' + data[i].image_url+'" width = "80px+" padding="5px"><br>'+'<strong>'+ data[i].name+ '</strong>'+"<br>"+data[i].genre+"<br>"+data[i].contact+"<br>"+data[i].address+"<br>"+data[i].open_closed+"<br>"+data[i].opening_time)
              .addTo(map)}};
