
Checkbox1.onclick = function() {
 var choices = "Choices: ";
  for     (i = (0); i  <= Checkbox1.length-1; i ++) {
    if(Checkbox1.getValue(i) ) { choices = choices  +  i  +  " "; }
  }
  NSB.MsgBox(choices);
};