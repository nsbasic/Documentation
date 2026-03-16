HeaderBar1.onclick = function(button) {
  if(TypeName(button)=="object" )  { return; };
  NSB.MsgBox("Button '"  +  button  +  "' clicked.");
};