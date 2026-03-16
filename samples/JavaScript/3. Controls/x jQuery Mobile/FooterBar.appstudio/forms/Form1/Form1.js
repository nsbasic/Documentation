function Main() {
 //FooterBar1.refresh()
}

FooterBar1.onclick = function(choice) {
  if(TypeName(choice)=="object" )  { return; };
  NSB.MsgBox("Button is "  +  choice);
};

Button1.onclick = function() {
  FooterBar1_0.className = FooterBar1_0.className + " ui-btn-active";
};

Button2.onclick = function() {
  FooterBar1_0.className = Replace(FooterBar1_0.className, " ui-btn-active" , "");
};
