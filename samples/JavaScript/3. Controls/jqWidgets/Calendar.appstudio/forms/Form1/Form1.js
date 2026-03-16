if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

function Main() {
  $("#Calendar1").jqxCalendar({ value: $.jqx._jqxDateTimeInput.getDateTime(new Date(2011, 9, 1)) });
}

Calendar1.oncellSelected = function() {
  NSB.MsgBox($("#Calendar1").jqxCalendar("getDate"));
};
