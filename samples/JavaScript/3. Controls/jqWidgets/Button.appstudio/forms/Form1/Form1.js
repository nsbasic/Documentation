if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

var clicks=0;

Button1.onclick = function() {
  NSB.MsgBox("Clicked!");
};

Button2.onclick = function() {
  clicks=clicks+1;
  Button2.value="Repeat:"  +  clicks;
};

Button3.onclick = function() {
  location="http://www.appstudio.dev";
};

Button4.onclick = function() {
  if($("#Button4").jqxToggleButton("toggled")) {
    Button4.value="Toggle On";
 } else {
    Button4.value="Toggle Off";
  }
};
