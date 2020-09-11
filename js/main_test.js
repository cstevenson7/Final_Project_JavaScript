function lat_lon(){
   let ab_map = new Map(Object.entries({
        Calgary:[51.05,-114.09],
        Edmonton:[53.55,-113.49],
        Banff:[51.18,-115.57],
        Nordegg:[52.47,-116.08],
        Jasper:[52.57,-118.08]
    }));

    let bc_map = new Map(Object.entries({
        Radium:[50.62,-116.07],
        Cranbrook:[49.51,-115.77],
        Fernie:[49.50,-115.06],
        Kamlooops:[50.67,-120.33],
        Kelowna:[48.89, -119.50]
    }));

    let map_object = ab_map;
    highs = new Map()
    for(let[city,coordinates] of map_object.entries()){
            //console.log(`City is ${city} and coordinates are ${coordinates}`)
            console.log(`Lat is  ${coordinates[0]} and lon is ${coordinates[1]}`)
            //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=imperial&appid=API_KEY_HERE)`)
            //link to the api with the lat & lon in the url
                   http://api.openweathermap.org/data/2.5/weather?lat=51&lon=-114&units=imperial&appid=72fed5dd48ff06dcf670a1689cf0dc55
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=API_KEY_HERE`)
            //callback function with promise
            .then(response => response.json())
            .then(rawData => {
                                      
                //pulling the daily high from the json file
                let current = rawData.main.temp_max
                let description = weather[0].description
                //Getting the city from my map
                let city_name = city
                console.log(rawData.main.temp)   
                highs.set(city,[current,description] 

                //next 2 lines adding the daily high to the html to be
                //displayed in the element with the #high-temp id
                // let high_text = document.querySelector('#high-temp')
                // let high_f =  `${high} F`
                // high_text.innerHTML= high_f
            })
    }
    return highs
}

console.log(lat_lon())

//Examples
//Now in your code :

var arrayOfObjects = [];
for(var i=0; i<values.length; i++){
    var obj = {};
    for(var j=0; j<values[i].length; j++){
         obj[keys[j]] = values[i][j];  
      }
    arrayOfObjects.push(obj);
}
//I//n reply to 'it does weird things' : this code works.

//with this input :

var keys = ['key1', 'key2', 'key3'];
var values = [
            [12,112, 1112],
            [31, 331, 3331],
            [64, 65, 66]
         ];
//the output is :

   {   {key1: 12, key2: 112, key3: 1112},  
       {key1: 31, key2: 331, key3: 3331},   
       {key1: 64, key2: 65, key3: 66}        }

                 // let low = rawData.main.temp_min 
                // let low_text = document.querySelector('#low-temp')
                // let low_f =  `${low} F`
                // low_text.innerHTML= low_f
        
                // let forecast = rawData.weather[0].main
                // let forecast_text = document.querySelector('#forecast')        
                // forecast_text.innerHTML= forecast
        
                // let humidity = rawData.main.temp_min 
                // let humidity_text = document.querySelector('#humidity')
                // let humidity_per =  `${humidity} %`        
                // humidity_text.innerHTML= humidity_per     

{city: "Banff", current: -10.32, description: "rain"},
{city: "Calgary", current: 10.32, description: "sunny"},
{city: "Edmonton", current: 20.69, description: "cloudy"}];

       /* Set the size of the div element that contains the map */
      /*#map {
        height: 80vh;  /* The height is 400 pixels */
        width: 80%;  /* The width is the width of the web page */
       }*/


https://stackoverflow.com/questions/23125462/multiple-marker-example-using-csv
csv file will be like 

1,22.582365,79.848633
2,29.862893,77.8973
3,23.01034,72.517397
4,29.134187,79.125107

file must have csv extention , having no spaces

       <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
       <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
       <title>Multiple Marker</title>
       <script src="http://code.jquery.com/jquery-latest.min.js" type="application/javascript"></script>
       // change key of google map in key parameter
       <script src="http://maps.googleapis.com/maps/api/js?key=key&sensor=false"></script>
       <script>
           $(document).ready(function(){
               var markers = []; // define global array in script tag so you can use it in whole page    
               var myCenter=new google.maps.LatLng(22.582365,79.848633);
               var mapProp = {
                       center:myCenter, 
                       zoom:6,
                       minZoom:6,          
                       mapTypeId : google.maps.MapTypeId.ROADMAP,
                       mapTypeControl: true           
                   };
               //google map object       
                var map = new google.maps.Map(document.getElementById("gMap"),mapProp); 

                 //change event of input tag where type=file and  id=filename 
                 $("#filename").change(function(e) {

                    var ext = $("input#filename").val().split(".").pop().toLowerCase();

                    if($.inArray(ext, ["csv"]) == -1) {
                           alert('Upload CSV');
                           return false;
                     }

                    if (e.target.files != undefined) {

                           var reader = new FileReader();
                           reader.onload = function(e) {

                                     var csvval=e.target.result.split("\n");
                                     var csvvalue;                                          

                                     for(var i = 0;i < csvval.length;i++)
                                     {
                                             markers[i] = []; 
                                             csvvalue = csvval[i].split(",");
                                             markers[i][0] = csvvalue[0]; //id
                                             var lat = csvvalue[1]; //latitude
                                             var lng = csvvalue[2]; //longitude
                                             markers[i][1] = new google.maps.Marker({
                                                  position: new google.maps.LatLng(lat,lng),
                                                  map: map                  
                                             });
                                      }

                            };
                            reader.readAsText(e.target.files.item(0));
                      }

                    return false;

                   });
           });
       </script>
       </head>

       <body>
           <div style="width:1000px;height:600px;" id="gMap">
           </div>
           <input type="file" id="filename" name="filename"/>
       </body>
       </html>

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
//https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: -33, lng: 151}
    });
  
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
      position: {lat: -33.890, lng: 151.274},
      map: map,
      icon: image
    });
  }