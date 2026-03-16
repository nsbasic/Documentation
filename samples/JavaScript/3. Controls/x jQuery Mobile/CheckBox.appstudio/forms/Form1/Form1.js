function Main() {
  CheckBox1.setValue(2, true);
  CheckBox2.setValue(1, true);
}

CheckBox1.onchange = function() {
  NSB.MsgBox("One is "  +  CheckBox1.getValue(1)  +  '\n'  +   "Two is "  +  CheckBox1.getValue(2));
};

CheckBox2.onchange = function() {
  NSB.MsgBox("One is "  +  CheckBox2.getValue(1)  +  '\n'  +   "Two is "  +  CheckBox2.getValue(2)  +  '\n'  +   "Three is "  +  CheckBox2.getValue(3));
};

Button1.onclick = function() {
  if(CheckBox1.getValue(1)==true) {
    CheckBox1.setValue(1,false);
 } else {
    CheckBox1.setValue(1,true);
  }
};
