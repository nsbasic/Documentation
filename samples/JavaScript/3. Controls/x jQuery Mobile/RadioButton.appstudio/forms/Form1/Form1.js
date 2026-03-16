function Main() {
  RadioButton1.setValue(2, true);
  RadioButton2.setValue(1, true);
}

RadioButton1.onchange = function() {
  NSB.MsgBox("One is "  +  RadioButton1.getValue(1)  +  '\n'  +   "Two is "  +  RadioButton1.getValue(2));
};

RadioButton2.onchange = function() {
  NSB.MsgBox("One is "  +  RadioButton2.getValue(1)  +  '\n'  +   "Two is "  +  RadioButton2.getValue(2)  +  '\n'  +   "Three is "  +  RadioButton2.getValue(3));
};
