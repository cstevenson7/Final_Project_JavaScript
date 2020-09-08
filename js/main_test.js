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
            console.log(`City is ${city} and coordinates are ${coordinates}`)
            console.log(`Lat is  ${coordinates[0]} and lon is ${coordinates[1]}`)
            //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=imperial&appid=API_KEY_HERE)`)
            //link to the api with the lat & lon in the url
                   http://api.openweathermap.org/data/2.5/weather?lat=51&lon=-114&units=imperial&appid=72fed5dd48ff06dcf670a1689cf0dc55
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=API_KEY_HERE`)
            //callback function with promise
            .then(response => response.json())
            .then(rawData => {
                //to confirm we are pulling data form the API
                             
                //pulling the daily high from the json file
                let high = rawData.main.temp_max
                console.log(rawData.main.temp_max)   
                highs.set(coordinates[0],high)

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