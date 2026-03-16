if(typeof(jQuery.jqx)!="object") {
  NSB.MsgBox("The jqWidgets library needs to be installed. Download it from http://www.jqwidgets.com/download/, unzip it and copy its 'jqwidgets' folder into your project folder.");
}

var n=0;

DragDrop1.onTargetDrop = function() {
  n=n+1;
  TextArea1.value=TextArea1.value  +  Label1.textContent  +  " "  +  n  +  '\n';
};