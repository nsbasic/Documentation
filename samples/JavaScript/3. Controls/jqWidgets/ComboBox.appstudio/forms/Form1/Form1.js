function Main() {
  $("#ComboBox2").jqxComboBox("selectItem" , "two");
  $("#ComboBox2").jqxComboBox("selectItem" , "four");
}

ComboBox3.oncheckChange = function(event) {
  NSB.MsgBox(event.args.value);
};
