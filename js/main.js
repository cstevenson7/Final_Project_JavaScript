
let ab_map = new Map(Object.entries({
    'Calgary':[51.05,-114.09],
    'Edmonton':[53.55,-113.49],
    'Banff':[51.18,-115.57],
    'Nordegg':[52.47,-116.08],
    'Jasper':[52.57,-118.08],
    'Drumheller':[51.46,-112.71],
    'Lethbridge':[49.70,-112.85],
    'Peace River':[56.23,-117.33],
    'Grande Prairie':[55.17,-118.79],
    'Athabasca':[54.72, 113.29],
    'Cold Lake':[54.45, 110.17]
}));

let bc_map = new Map(Object.entries({
    'Radium':[50.62,-116.07],
    'Cranbrook':[49.51,-115.77],
    'Fernie':[49.50,-115.06],
    'Kamlooops':[50.67,-120.33],
    'Kelowna':[49.89, -119.50],
    'Penticton':[49.50,-119.59],
    'Osoyoos': [49.03,-119.47],
    'Revelstoke':[51.00, -118.20], 
    'Valemount':[52.83, -119.26],
    'Golden': [51.30,-116.96],
    'Prince Rupert': [54.32, -130.32],
    'Nelson': [49.49,-117.29],
    'Vancouver':[49.28,-123.12],
    'Victoria': [48.43, 123.37],
    'Prince George': [53.92,-122.75]
    
}));

function abRedirect(){
    window.location.href= 'ab.html';
}

function bcRedirect(){
    window.location.href= 'bc.html'; 
}

function getTop4(intValue){
    // // From OnClick events - 1 is Alberta, 2 is BC
    if(intValue === '1'|| intValue === 1){
        map_object = ab_map;
    }else{
        map_object = bc_map
    }
  
    let values1 = []  

    for(let[city,coordinates,] of map_object.entries()){
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=72fed5dd48ff06dcf670a1689cf0dc55`)
            //callback function with promise
            //try goes here
            .then(response => response.json())
            .then(rawData => {                                      
                //pulling the current temp from the API file
                let current = rawData.main.temp            
                let description = rawData.weather[0].description
                //Getting the city from my Map                         
                values1.push([city,current,description])
                //need to leave all of this inside the promise
                //or the values list is empty
                //Create a array of objects with these attributes
                let keys = ['city','current','description'];
                let arrayOfObjects = [];            
                for(let i=0; i<values1.length; i++){        
                    let obj = {};                    
                    for(let j=0; j<values1[i].length; j++){
                         obj[keys[j]] = values1[i][j];  
                      }
                    arrayOfObjects.push(obj);                                       
                }
                //sort the array of objects by descending order to get the 4 warmest temps
                sortedTemps= arrayOfObjects.sort((a, b) => parseFloat(b.current) - parseFloat(a.current));
                console.log('Sorted temps', sortedTemps)
                //creates lists so we can dynamically change 
                //variable names in for loop
                let ab_city = [];
                let ab_current = [];
                let ab_description= [];  
                for (let i = 0; i < 4; i++){                        
                    ab_city[i] = sortedTemps[i].city                    
                    ab_current[i] = sortedTemps[i].current
                    ab_description[i] = sortedTemps[i].description                   
                    //intValue 1 = ab,  2 = bc
                    if(intValue === '1'|| intValue === 1){
                        if(i == 0){
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#ab_city1')        
                            city_txt.innerHTML= city                        
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#ab_current1')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#ab_description1')        
                            description_txt.innerHTML= description            
    
                        }else if(i==1){
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#ab_city2')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#ab_current2')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#ab_description2')        
                            description_txt.innerHTML= description

                        }else if(i==2){
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#ab_city3')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#ab_current3')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#ab_description3')        
                            description_txt.innerHTML= description  
                        }else{
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#ab_city4')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#ab_current4')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#ab_description4')        
                            description_txt.innerHTML= description  
                        }
 
                    }else{
                        //Passing BC Values to bc.html
                        if(i == 0){
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#bc_city1')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#bc_current1')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#bc_description1')        
                            description_txt.innerHTML= description            
    
                        }else if(i==1){
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#bc_city2')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#bc_current2')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#bc_description2')        
                            description_txt.innerHTML= description

                        }else if(i==2){
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#bc_city3')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#bc_current3')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#bc_description3')        
                            description_txt.innerHTML= description  
                        }else{
                            let city = sortedTemps[i].city
                            let city_txt = document.querySelector('#bc_city4')        
                            city_txt.innerHTML= city
                
                            let current = sortedTemps[i].current
                            let current_txt = document.querySelector('#bc_current4')
                            let current_c =  `${current} C`
                            current_txt.innerHTML= current_c
                
                            let description = sortedTemps[i].description
                            let description_txt = document.querySelector('#bc_description4')        
                            description_txt.innerHTML= description  
                        }
                    }                    
                }              
             })       
   
    }

 }

 // Get Marker Data From Loaded HTML
 function getABMarkers(){
    top4 = []
    let city1 = document.querySelector('#ab_city1').innerText
    top4.push(city1)
    let city2 = document.querySelector('#ab_city2').innerText
    top4.push(city2)
    let city3 = document.querySelector('#ab_city3').innerText
    top4.push(city3)
    let city4 = document.querySelector('#ab_city4').innerText
    top4.push(city4)
    //console.log(top4)
    let prov = 'ab'
    initMap(top4, prov)
 }

  // Get Marker Data From Loaded HTML
  function getBCMarkers(){
    top4 = []
    let city1 = document.querySelector('#bc_city1').innerText
    top4.push(city1)
    let city2 = document.querySelector('#bc_city2').innerText
    top4.push(city2)
    let city3 = document.querySelector('#bc_city3').innerText
    top4.push(city3)
    let city4 = document.querySelector('#bc_city4').innerText
    top4.push(city4)
    //console.log(top4)
    let prov = 'bc'
    initMap(top4, prov)
 }

//Initialize and add the map  - DOES NOT WORK WITH LET
function initMap(top4,prov) { 
    if(prov =='ab'){
        // central lat & lon for alberta    
        var ab = {lat: 52.48, lng: -113.70};
        // The map, centered atJasper -  creates a new Google maps object.
        //The center property tells the API where to center the map. The map coordinates are set in the order: latitude, longitude.
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 6.0, center: ab});
        // One marker, positioned at jasper
        //var marker = new google.maps.Marker({position: ab, map: map});
    }else{
        // central lat & lon for BC  
        var bc = {lat: 52.28, lng: -122.70};
        // The map, centered at -  creates a new Google maps object.
        //The center property tells the API where to center the map. The map coordinates are set in the order: latitude, longitude.
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 5.5, center: bc});

    }

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        for(let j = 0; j < top4.length; j++){ 
            if(top4[j] == locations[i][0]){
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                    }); 

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                    infowindow.setContent(`<p id="info"> ${locations[i][0]} <br> Forecast: <a href="${locations[i][3]}" target="_blank">${locations[i][3]}</a></p>`);                            
                
                    infowindow.open(map, marker);
                    }
                })(marker, i));
            }
        }
    }

}   



