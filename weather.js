document.addEventListener('readystatechange', event => { 
     if (event.target.readyState === "complete") {}});

// Get Weather
async function GetWeather(){
	
	var e = document.getElementById('Panel');
	var o = GetURL('-81.3792','28.5383');
	const res_o = await fetch(o);
    const dat_o = await res_o.json();
		
    var s = GetURL('-82.5370','28.4832');
	const res_s = await fetch(s);
    const dat_s = await res_s.json();
	
	var d = GetURL('-83.0243','35.9207');
	const res_d = await fetch(d);
    const dat_d = await res_d.json();
	
	var r = GetURL('-91.7382','45.5061');
	const res_r = await fetch(r);
    const dat_r = await res_r.json();
	
	e.innerHTML = GetHTML("Orlando",dat_o.main.temp);
	e.innerHTML = e.innerHTML + GetHTML("Spring Hill",dat_s.main.temp);
	e.innerHTML = e.innerHTML + GetHTML("Del Rio Tnn.",dat_d.main.temp);
	e.innerHTML = e.innerHTML + GetHTML("Rice Lake Wis.",dat_r.main.temp);
    	
};
	
	function GetURL(lon, lat){
	var exclude = '&exclude=hourly,daily';
	var api_key = '&appid=f11dd97f4628b430a08ec2c38546d542';
	var units = '&units=imperial'
	return 'https://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon + exclude + units + api_key;
}
	
	function GetHTML(name, temp){
	return '<div style="float:left;height:60px; width:125px;background-color:#EEEE; border:1px solid; border-radius:5px;margin:7px">' +
	       '<div style="display:inline-block;border:0px solid;width:100%; margin-top:5px; height:23px;text-align:center;">' + name + '</div></br>' + 
	       '<div style="display:inline-block;border:0px solid;width:50px; margin-left:27px;height:23px;text-align:right;">' + temp + '</div>' +                         
	       '<div style="display:inline-block;border:0px solid;width:14px; height:23px;">&deg;F</div>' +                         
	       '</div>';
}
	