
Dropdown1.onclick = function(s) {
  if(typeof(s)=="object" ) { return; }
  NSB.MsgBox(s  +  " "  +  Dropdown1.selection  +  Dropdown1.value);
};

