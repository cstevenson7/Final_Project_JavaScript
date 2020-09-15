 Works but no hyperlink:
 
infowindow.setContent("<p>" + locations[i][0] + "<br />" + "Forecast: " + locations[i][3]+ "</p" );
infowindow.setContent("<p>" + locations[i][0] + "<br />" +"Forecast: " + "<a href=" + locations[i][3] + target="_blank""</a></p");


var infoWindow = new google.maps.InfoWindow({
            content: '<div style="font-size: 8pt;">' + '<b>' + siteName +
			'</b>' + '</br>' + status + '</br><a href="' + siteLink + '">Load Site</a>'
        });
                                                 
					<p>" + locations[i][0] + "<br />" +"Forecast: " + "<a href=" + locations[i][3] + target="_blank""</a></p"
					
//************THIS F STRING WORKED  - Joels idea


                            infowindow.setContent(`<p> ${locations[i][0]} <br> Forcast: <a href="${locations[i][3]}" target="_blank">${locations[i][3]}</a></p>`);