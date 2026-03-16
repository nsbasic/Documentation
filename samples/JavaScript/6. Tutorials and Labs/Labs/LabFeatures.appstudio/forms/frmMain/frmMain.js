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

  for     (i = (1); i  <= lstSaves.getItemCount(); i ++) {
    lstSaves.deleteItem();
  }

  for     (i = (1); i  <= 5; i ++) {
    lstSaves.addItem("Item "  +  i);
  }
}

btnSave.onclick = function() {
  NSB.MsgBox("Not yet implemented!");
};

btnLoad.onclick = function() {
 var city = encodeURIComponent(txtCity.value);
 var appid = "2de143494c0b295cca9337e1e96b00e0";
  GetJSON("http://api.openweathermap.org/data/2.5/weather" ,"q="  +  city  +  "&appid="  +  appid, weatherData);
};

function weatherData(data) {
  lblPressureValue.textContent = data.main.pressure;
  lblTempValue.textContent = FormatNumber(data.main.temp - 273.15,1);
  lblWindDirValue.textContent = data.wind.deg;
  lblWindSpeedValue.textContent = data.wind.speed;
  lblCloudinessValue.textContent = data.main.humidity;
  lblHumidityValue.textContent = data.clouds.all;
}
