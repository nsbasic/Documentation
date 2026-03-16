 // jqWidget CheckBox sample

 //It is important to position the label field
 //behind the checkbox field if you wish the user
 //to be able to click on the label as well.  Make
 //the width of the CheckBox large enough To cover the
 //label text.

 //You can place the checkbox to the right or the left with
 //the 'rtl' property.

 //These three checkboxes are grouped together with 
 //a common 'groupName' so they act as radiobuttons.

 //I have not found a way to 'uncheck' all boxes as clicking  
 //on it again does not deselect it.  The 'Cancel' button works!


var thisExchange,value;
thisExchange="";

xcbNYSE.onchecked = function() {
  thisExchange="Y";
  NSB.MsgBox("You chose the New York Stock Exchange!");
};

xcbNASDAQ.onchecked = function() {
  NSB.MsgBox("You chose the Nasdaq Stock Exchange!");
};

xcbAMEX.onchecked = function() {
  value = $("#xcbAMEX").jqxCheckBox("val");
  if(value==true) {
    NSB.MsgBox("You chose the American Stock Exchange!");
  }
};

Button1.onclick = function() {
  $("#xcbNYSE").jqxCheckBox("uncheck");
  $("#xcbNASDAQ").jqxCheckBox("uncheck");
  $("#xcbAMEX").jqxCheckBox("uncheck");
  thisExchange="";
};
