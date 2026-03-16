
Tabs1.onclick = function(i) {
  if(TypeName(i) == "object" )  { return; };
  NSB.MsgBox("Tab chosen: " + Tabs1.value);
  if(i == 0 ) { Container1.hide(); }
  if(i == 1 ) { Container1.show(); }
};
