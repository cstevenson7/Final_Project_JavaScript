##Final_Project_JavaScript

I originally started this project in Flask and then switched to Angular.
Then I decided to make sure I could what I wanted with just JavaScript
first then move it to a framework.
Yeah, that didn't happen...yet
This app is just straight up JavaScript and Bootstrap created with a mobile deployment in mind.


##What it does

If you live in Alberta(or Chicago come mid March you are soooo sick of winter.
You want to get outside and do something, but your weather still sucks.
This app displays the 4 warmest locations in Alberta and BC, according 
to the weather station data collected by the Open Weather API and my location selections.
I choose 11 Alberta locations and 15 BC locations to use for the location selections.


##How it works

- Two buttons on the home page that call the getTop4 function when clicked and pass in an integer value
   to represent AB or BC
- An if statement determines if the user choose to get AB or BC temperatures and a map object of AB or BC 
  locations is used in a for loop
- This for loop passes in the lat & lons to the fetch string and then a
  call back with a promise creates an array of objects of the locations from the Open Weather API 
- The array contains the city name, lat, lon, current temperature and the current
  weather conditions
- The array of objects is then sorted and an array is created with the 4 warmest locations
- To pass in the temperature list data to the html page ids, dynamic variable names were used
  in a for loop. 
- If the user wants to see the 4 locations on a map, they click on a button that triggers
  the Google Maps JavaScript API. 
- The user can click on the map marker and an info window pops up with the city name and
   the URL of the Environment Canada weather forecast for the city. 


##TODO

- Move to a framework and deploy


##Issues Encountered:

- Having to do so much within the promise or the array of objects was empty
- Creating dynamic variable names in JavaScript
- I didn't want all 11 or 15 markers to display on the map
- Since I had the map on the same page as the temperature data, I had to wait for the
  innerhtml to load, not just the page. Then I could narrow the marker display to only 4 locations.
  Joel had the idea a adding the second button. This actually works better for a phone, you get to
  choose whether you see the map or not.
- The info windows took a while to get working and I wanted to display the URL to the city's
  weather forecast and I needed help with the correct syntax and ended up using a f string
- Getting the CSS to display the columns correctly on the mobile view
- Remembering to remove API keys from code before committing
- Tried changing the vars to lets in the Google Maps JavaScript API, but the map quit working.
