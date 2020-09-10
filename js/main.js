//https://samples.openweathermap.org/data/2.5/weather?lat=51&lon=-114&appid=API_KEY_HERE
//           api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
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


function abRedirect(){
    //window.location.href= 'ab.html';
    let map_object = ab_map;
    highs = new Map()

    for(let[city,coordinates] of map_object.entries()){
            // console.log(`City is ${city} and coordinates are ${coordinates}`)
            //console.log(`Lat is  ${coordinates[0]} and lon is ${coordinates[1]}`)
            //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=imperial&appid=API_KEY_HERE)`)
            //link to the api with the lat & lon in the url
                   http://api.openweathermap.org/data/2.5/weather?lat=51&lon=-114&units=imperial&appid=72fed5dd48ff06dcf670a1689cf0dc55
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=API_CODE_HERE`)
            //callback function with promise
            .then(response => response.json())
            .then(rawData => {                                      
                //pulling the current temp from the json file
                let current = rawData.main.temp_max
                let description = rawData.weather[0].description
                //Getting the city from my map
                let city_name = city
                //console.log(rawData.main.temp)   
                highs.set(city,[current,description])
                //console.log(highs)       
             })
    }
    return highs
}

function getTop4(highs){
    if(highs.size < 1){
        // middle index  should be three for albaeta
        mid = Math.floor(high.size)
        console.log(mid)


    }
 
    console.log('getTop4')

}


function bcRedirect(){
    window.location.href= 'bc.html';
}
                                
function getJson1(){   
    //let prov = then value of the button selected
    if(prov === 'AB'){
        map_object = ab_map
    }else{
        map_object = bc_map
    }

    let map_object = ab_map;
    highs = new Map()

    for(let[city,coordinates] of map_object.entries()){
            console.log(`City is ${city} and coordinates are ${coordinates}`)
            //console.log(`Lat is  ${coordinates[0]} and lon is ${coordinates[1]}`)
            //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=imperial&appid=API_KEY_HERE)`)
            //link to the api with the lat & lon in the url
                   http://api.openweathermap.org/data/2.5/weather?lat=51&lon=-114&units=imperial&appid=72fed5dd48ff06dcf670a1689cf0dc55
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=72fed5dd48ff06dcf670a1689cf0dc55`)
            //callback function with promise
            .then(response => response.json())
            .then(rawData => {                                      
                //pulling the current temp from the json file
                let current = rawData.main.temp_max
                let description = weather[0].description
                //Getting the city from my map
                let city_name = city
                console.log(rawData.main.temp)   
                highs.set(city,[current,description])       
             })
    }
}


function displayTop4(highs){
        
            //pulling the daily high from the json file
            let high = rawData.main.temp_max
            //next 2 lines adding the daily high to the html to be
            //displayed in the element with the #high-temp id
            let high_text = document.querySelector('#high-temp')
            let high_f =  `${high} F`
            high_text.innerHTML= high_f

            let low = rawData.main.temp_min 
            let low_text = document.querySelector('#low-temp')
            let low_f =  `${low} F`
            low_text.innerHTML= low_f

            let forecast = rawData.weather[0].main
            let forecast_text = document.querySelector('#forecast')        
            forecast_text.innerHTML= forecast

            let humidity = rawData.main.temp_min 
            let humidity_text = document.querySelector('#humidity')
            let humidity_per =  `${humidity} %`        
            humidity_text.innerHTML= humidity_per  


}

function clearData(){
    document.getElementById("city").value = "";
    document.getElementById("high-temp").innerHTML = "";
    document.getElementById("low-temp").innerHTML = "";
    document.getElementById("forecast").innerHTML = "";
    document.getElementById("humidity").innerHTML = "";  
}
