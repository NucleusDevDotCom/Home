document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {GetWeather();}});

// Get Weather
      	async function GetWeather(){
           // Orlando
	   var lat = 'lat=28.5383';
           var lon = '&lon=-81.3792';
	   var exclude = '&exclude=hourly,daily';
           var api_key = '&appid=f11dd97f4628b430a08ec2c38546d542';
           var units = '&units=imperial'
           var api_url = 'https://api.openweathermap.org/data/2.5/weather?' + lat + lon + exclude + units + api_key;
           const response = await fetch(api_url);
           const data = await response.json();
	   var e = document.getElementById('WeatherPanel');
	   e.innerHTML = '<div style="float:right;height:55px;width:80px;background-color:#EEEE; border:2px solid; boarder-radius:3px;">' +
                         '<div style="display:inline-block;border:0px solid;width:100%; height:27px;text-align:center;">' + data.name + '</div></br>' + 
                         '<div style="display:inline-block;border:0px solid;width:50px; height:27px;text-align:right;">' + data.main.temp + '</div>' +                         
                         '<div style="display:inline-block;border:0px solid;width:14px; height:27px;">&deg;F</div>' +                         
                         '</div>';

           // Spring Hill 
	   var lat = 'lat=28.4832';
           var lon = '&lon=-82.5370';
	   var exclude = '&exclude=hourly,daily';
           var api_key = '&appid=f11dd97f4628b430a08ec2c38546d542';
           var units = '&units=imperial'
           var api_url = 'https://api.openweathermap.org/data/2.5/weather?' + lat + lon + exclude + units + api_key;
           const response_SpringHill = await fetch(api_url);
           const data_SpringHill = await response_SpringHill.json();
	   var e = document.getElementById('WeatherPanel');
	   e.innerHTML = e.innerHTML + 
                         '<div style="float:right;height:55px; width:90px;background-color:#EEEE; border:2px solid; boarder-radius:3px;margin-right:7px;">' +
                         '<div style="display:inline-block;border:0px solid;width:100%; height:27px;text-align:center;">' + data_SpringHill.name + '</div></br>' + 
                         '<div style="display:inline-block;border:0px solid;width:50px; height:27px;text-align:right;">' + data_SpringHill.main.temp + '</div>' +                         
                         '<div style="display:inline-block;border:0px solid;width:14px; height:27px;">&deg;F</div>' +                         
                         '</div>';

          // Del Rio Tnn 
	   var lat = 'lat=35.9207';
           var lon = '&lon=-83.0243';
	   var exclude = '&exclude=hourly,daily';
           var api_key = '&appid=f11dd97f4628b430a08ec2c38546d542';
           var units = '&units=imperial'
           var api_url = 'https://api.openweathermap.org/data/2.5/weather?' + lat + lon + exclude + units + api_key;
           const response_DelRio = await fetch(api_url);
           const data_DelRio = await response_DelRio.json();
	   var e = document.getElementById('WeatherPanel');
	   e.innerHTML = e.innerHTML + 
                         '<div style="float:right;height:55px; width:100px;background-color:#EEEE; border:2px solid; boarder-radius:3px;margin-right:7px;">' +
                         '<div style="display:inline-block;border:0px solid;width:100%; height:27px;text-align:center;">' + data_DelRio.name + ' Tnn.</div></br>' + 
                         '<div style="display:inline-block;border:0px solid;width:50px; height:27px;text-align:right;">' + data_DelRio.main.temp + '</div>' +                         
                         '<div style="display:inline-block;border:0px solid;width:14px; height:27px;">&deg;F</div>' +                         
                         '</div>';
           // Rice Lake Wis. 
	   var lat = 'lat=45.5061';
           var lon = '&lon=-91.7382';
	   var exclude = '&exclude=hourly,daily';
           var api_key = '&appid=f11dd97f4628b430a08ec2c38546d542';
           var units = '&units=imperial'
           var api_url = 'https://api.openweathermap.org/data/2.5/weather?' + lat + lon + exclude + units + api_key;
           const response_RiceLake = await fetch(api_url);
           const data_RiceLake = await response_RiceLake.json();
	   var e = document.getElementById('WeatherPanel');
	   e.innerHTML = e.innerHTML + 
                         '<div style="float:right;height:55px; width:100px;background-color:#EEEE; border:2px solid; boarder-radius:3px;margin-right:7px;">' +
                         '<div style="display:inline-block;border:0px solid;width:100%; height:27px;text-align:center;">' + data_RiceLake.name + ' Wis.</div></br>' + 
                         '<div style="display:inline-block;border:0px solid;width:50px; height:27px;text-align:right;">' + data_RiceLake.main.temp + '</div>' +                         
                         '<div style="display:inline-block;border:0px solid;width:14px; height:27px;">&deg;F</div>' +                         
                         '</div>';
                         
	};