if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

SwitchButton1.onchange = function() {
  NSB.MsgBox("Changed to "  +  $("#SwitchButton1").jqxSwitchButton("checked"));
};
