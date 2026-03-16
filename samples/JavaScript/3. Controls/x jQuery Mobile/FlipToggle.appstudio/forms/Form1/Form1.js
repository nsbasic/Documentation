
FlipToggle1.onchange = function() {
  Button1.value = FlipToggle1.value();
};

Button1.onclick = function() {
  NSB.MsgBox(FlipToggle1.value());
};

Button2.onclick = function() {
 //set to text value of the option you want.
  if(FlipToggle1.value() == "On") {
    FlipToggle1.setValue("");
 } else {
    FlipToggle1.setValue("On");
  }
};
