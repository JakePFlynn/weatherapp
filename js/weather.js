if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(function(position){
		loadWeather(position.coords.latitude + ',' + position.coords.longitude);
	})
} else{
	loadWeather("Solihull, UK", "");
}

$(document).ready(function(){
	setInterval(getWeather, 10000);
});

function loadWeather(location, woeid){
	$.simpleWeather({
		location: location,
		woeid: woeid,
		uni: 'c',
		success: function(weather){
			city = weather.city;
			temp = weather.temp+'&deg;';
			wcode = '<img class="weathericon" src="img/weathericons/' + 
			weather.code + '.svg">';
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + 
			'</p>';
			humidity = weather.humidity + ' %';

			$(".location").text(city);
			$(".temperature").html(temp);
			$(".climate_background").html(wcode);
			$(".windspeed").html(wind);
			$(".humidity").text(humidity);
		},

		error: function(error){
			$(".error").html('<p>' + error + '</p>');
		}
	});
}