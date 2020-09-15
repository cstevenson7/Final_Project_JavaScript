//https://samples.openweathermap.org/data/2.5/weather?lat=51&lon=-114&appid=API_KEY_HERE
//           api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
let ab_map = new Map(Object.entries({
    'Calgary':[51.05,-114.09,'https://weather.gc.ca/city/pages/ab-52_metric_e.html'],
    'Edmonton':[53.55,-113.49,'https://weather.gc.ca/city/pages/ab-50_metric_e.html'],
    'Banff':[51.18,-115.57,'https://weather.gc.ca/city/pages/ab-49_metric_e.html'],
    'Nordegg':[52.47,-116.08,'https://weather.gc.ca/city/pages/ab-38_metric_e.html'],
    'Jasper':[52.57,-118.08,'https://weather.gc.ca/city/pages/ab-70_metric_e.html'],
    'Drumheller':[51.46,-112.71,'https://weather.gc.ca/city/pages/ab-62_metric_e.html'],
    'Lethbridge':[49.70,-112.85,'https://weather.gc.ca/city/pages/ab-30_metric_e.html'],
    'Peace River':[56.23,-117.33,'https://weather.gc.ca/city/pages/ab-25_metric_e.html'],
    'Grande Prairie':[55.17,-118.79,'https://weather.gc.ca/city/pages/ab-31_metric_e.html'],
    'Athabasca':[54.72, 113.29,'https://weather.gc.ca/city/pages/ab-10_metric_e.html'],
    'Cold Lake':[54.45, 110.17,'https://weather.gc.ca/city/pages/ab-23_metric_e.html']
}));

let bc_map = new Map(Object.entries({
    'Radium':[50.62,-116.07],
    'Cranbrook':[49.51,-115.77],
    'Fernie':[49.50,-115.06],
    'Kamlooops':[50.67,-120.33],
    'Kelowna':[48.89, -119.50],
    'Penticton':[49.50,-119.59],
    'Osoyoos': [49.03,-119.47],
    'Castlegar':[49.32,-117.66],
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
    // getTop4('ab')
}

function bcRedirect(){
    window.location.href= 'bc.html';
}

function getTop4(intValue){
    // console.log (intValue)
    // // From OnClick events - 1 is Alberta, 1 is BC
    if(intValue === '1'|| intValue === 1){
        map_object = ab_map;
    }else{
        map_object = bc_map
    }
    //let map_object = ab_map;
    let values1 = []  

    for(let[city,coordinates,] of map_object.entries()){
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=API KEY HERE`)
            //callback function with promise
            .then(response => response.json())
            .then(rawData => {                                      
                //pulling the current temp from the json file
                let current = rawData.main.temp            
                let description = rawData.weather[0].description
                //Getting the city from my Map
                         
                values1.push([city,current,description])
                //need to leave all of this inside the promise
                //or the values list is empty
                let keys = ['city','current','description'];
                let arrayOfObjects = [];            
                for(let i=0; i<values1.length; i++){        
                    let obj = {};                    
                    for(let j=0; j<values1[i].length; j++){
                         obj[keys[j]] = values1[i][j];  
                      }
                    arrayOfObjects.push(obj);                                       
                }
       
                sortedTemps= arrayOfObjects.sort((a, b) => parseFloat(b.current) - parseFloat(a.current));
                console.log('Sorted temps', sortedTemps)
                let ab_city = [];
                let ab_current = [];
                let ab_description= [];              
                //let ab_top4 = [];

                for (let i = 0; i < 4; i++){                        
                    ab_city[i] = sortedTemps[i].city                    
                    ab_current[i] = sortedTemps[i].current
                    ab_description[i] = sortedTemps[i].description                   
                    //ab_top4.push([ab_city[i]], [ab_current[i]], [ab_description[i]])

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


