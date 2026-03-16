
frmSaves.onshow = function() {
  c = lstSaves.getItemCount() - 1;
  for     (i = (1); i  <= c; i ++) {
    lstSaves.deleteItem();
  }

  saves = JSON.parse(localStorage.weatherSaves);
  for     (i = (0); i  <= saves.length - 1; i ++) {
    lstSaves.addItem(saves[i].date);
  }
};

lstSaves.onclick = function(i) {
  if(TypeName(i)=="object" )  { return; };
  saves = JSON.parse(localStorage.weatherSaves);
  lblSavedTempValue.textContent = saves[i - 1].temp;
  lblSavedHumidityValue.textContent = saves[i - 1].humidity;
  lblSavedPressureValue.textContent = saves[i - 1].pressure;
  lblSavedWindSpeedValue.textContent = saves[i - 1].windSpeed;
  lblSavedWindDirValue.textContent = saves[i - 1].windDir;
  lblSavedCloudinessValue.textContent = saves[i - 1].cloudiness;
  lblDateTimeValue.textContent = saves[i - 1].date;

  ChangeForm(frmSavedData);
};
