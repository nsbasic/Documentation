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
