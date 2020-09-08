function getJson(){
    //get the city form form user input
    let city = document.querySelector("#city").value;
    //link to the api with the city in the url
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=API_KEY_HERE`)
    //callback function with promise
    .then(response => response.json())
    .then(rawData => {
        //to confirm we are pulling data form the API
        console.log(rawData)
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
    })

}
//https://samples.openweathermap.org/data/2.5/weather?lat=51&lon=-114&appid=API_KEY_HERE
//           api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
let ab_map = new Map(Object.entries({
    Calgary:[51.05,-114.09],
    Edmonton:[53.55,-113.49],
    Radium:[50.62,-116.07],
    Saskatoon:[52.16,-106.67],
    Banff:[51.18,-115.57],
    Nordegg:[52.47,-116.08],
    Jasper:[52.57,-118.08],
    Cranbrook:[49.51,-115.77],
    Fernie:[49.50,-115.06],
    Regina:[50.45,-104.62],
    Kamlooops:[50.67,-120.33],
    Kelowna:[48.89, -119.50]
}));

                                
function getJson1(){
    //get the Lat & lon  from  user input
    let prov = document.querySelector("#prov").value;
    if(prov === 'AB'){
        map_object = ab_map
    }else{
        map_object = bc_map
    }
    map_object = ab_map
    for(let[city,coordinates] of map_object.entries()){
        console.log(`City is ${city} and coordinates are ${coordinates}`)
        console.log(`Lat is  ${coordinates[0]} and lon is ${coordinates[1]}`)

    //link to the api with the lat & lon in the url
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=API_KEY_HERE`)
    //callback function with promise
    .then(response => response.json())
    .then(rawData => {
        //to confirm we are pulling data form the API
        console.log(rawData)
        
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
    })

}

function clearData(){
    document.getElementById("city").value = "";
    document.getElementById("high-temp").innerHTML = "";
    document.getElementById("low-temp").innerHTML = "";
    document.getElementById("forecast").innerHTML = "";
    document.getElementById("humidity").innerHTML = "";  
}
