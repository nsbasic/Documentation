var DB;
ax = 0;
lat = 0;
lon = 0;

function Main() {
  lblPressureValue.textContent = "";
  lblTempValue.textContent = "";
  lblWindDirValue.textContent = "";
  lblWindSpeedValue.textContent = "";
  lblCloudinessValue.textContent = "";
  lblHumidityValue.textContent = "";

  lblSavedPressureValue.textContent = "";
  lblSavedTempValue.textContent = "";
  lblSavedWindDirValue.textContent = "";
  lblSavedWindSpeedValue.textContent = "";
  lblSavedCloudinessValue.textContent = "";
  lblSavedHumidityValue.textContent = "";
  lblDateTimeValue.textContent = "";

  DB = SqlOpenDatabase("weather.db" ,"1.0" ,"My Weather Database");
  sqlList = "CREATE TABLE IF NOT EXISTS weatherSaves (city, temp, pressure, windDir, windSpeed, cloudiness, humidity, date)";
  Sql(DB, [sqlList]);
}

btnSave.onclick = function() {
  sqlList = "INSERT INTO weatherSaves (temp, pressure, windDir, windSpeed, cloudiness, humidity, date) VALUES (?,?,?,?,?,?,?)";
  args = [lblTempValue.textContent];
  args[1] = lblPressureValue.textContent;
  args[2] = lblWindDirValue.textContent;
  args[3] = lblWindSpeedValue.textContent;
  args[4] = lblCloudinessValue.textContent;
  args[5] = lblHumidityValue.textContent;
  args[6] = DateAdd("s",0,new Date());
  Sql(DB, [[sqlList, args, sqlSuccess]]);
};

function sqlSuccess() {
  NSB.MsgBox("Saved!");
}

btnLoad.onclick = function() {
 var appid = "2de143494c0b295cca9337e1e96b00e0";
  if(flpCurrentLocation.value() == "Off") {
   var city = encodeURIComponent(txtCity.value);
    GetJSON("http://api.openweathermap.org/data/2.5/weather" ,"q="  +  city  +  "&appid="  +  appid, weatherData);
 } else {
    GetJSON("http://api.openweathermap.org/data/2.5/weather" ,"lat="  +  lat  +  "&lon="  +  lon  +  "&appid="  +  appid, weatherData);
  }

  selEmoji.setIndex(0);
  pb = pbPhoto.getContext("2d");
  pb.clearRect(0, 0, 1000, 1000);
};

function weatherData(data) {
  lblPressureValue.textContent = data.main.pressure;
  lblTempValue.textContent = FormatNumber(data.main.temp - 273.15,1);
  lblWindDirValue.textContent = data.wind.deg;
  lblWindSpeedValue.textContent = data.wind.speed;
  lblCloudinessValue.textContent = data.main.humidity;
  lblHumidityValue.textContent = data.clouds.all;
}

window.ondevicemotion = function(event) {
 //sensitivity 2
  if(ax - event.accelerationIncludingGravity.x > 2) {
 //shake
    GetJSON("http://api.openweathermap.org/data/2.5/weather" ,"lat="  +  ((Rnd()* 180) - 90)  +  "&lon="  +  ((Rnd()* 360) - 180),weatherData);
  }
  ax = event.accelerationIncludingGravity.x;
}

flpCurrentLocation.onchange = function() {
  if(flpCurrentLocation.value() == "On") {
    txtCity.disabled = true;
    btnLoad.disabled = true;
 } else {
    txtCity.disabled = false;
    btnLoad.disabled = false;
  }

  navigator.geolocation.getCurrentPosition(positionData);
};

function positionData(pos) {
  lat = pos.coords.latitude;
  lon = pos.coords.longitude;
  btnLoad.disabled = false;
}

