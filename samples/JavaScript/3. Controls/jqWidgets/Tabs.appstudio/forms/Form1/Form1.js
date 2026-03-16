if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

Tabs1.onselected = function(e) {
  NSB.MsgBox("selected "  +  e.args.item);
};

Tabs1.ontabclick = function(e) {
  NSB.MsgBox("tabclick "  +  e.args.item);
};
