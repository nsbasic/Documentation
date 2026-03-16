List1.onclick = function(i) {
  if(TypeName(i)=="object" )  { return; };
  NSB.MsgBox("Menu item chosen: "  +  i  +  " "  +  List1.getItem(i));
};
