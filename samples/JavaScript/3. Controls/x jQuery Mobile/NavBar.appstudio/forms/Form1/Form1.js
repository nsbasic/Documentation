NavBar1.onclick = function(choice) {
  if(TypeName(choice)=="object" )  { return; };
  NSB.MsgBox("Button pressed: "  +  choice);
};


Button1.onclick = function() {
  NavBar1_0.className = NavBar1_0.className + " ui-btn-active";
};

Button2.onclick = function() {
  NavBar1_0.className = Replace(NavBar1_0.className, " ui-btn-active" , "");
};


 //A couple of useful things to know:
function docsOnly() {
 //to change the value of a button at runtime
  $("#NavBar1_0 .ui-btn-text").text("Kenny");

 //to see the value of a button at runtime
  NSB.MsgBox($("#NavBar1_0 .ui-btn-text").text());
}