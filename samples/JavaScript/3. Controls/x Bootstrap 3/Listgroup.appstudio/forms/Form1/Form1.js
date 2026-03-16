
Listgroup1.onclick = function(choice) {
  if(typeof(choice) == "object" ) { return; }
  NSB.MsgBox("The choice is "  +  choice);
};

Listgroup2.onclick = function(choice) {
  if(typeof(choice) == "object" ) { return; }
  NSB.MsgBox("The choice is "  +  choice);
};

Button1.onclick = function() {
  console.log("clear");
  Listgroup1.clear();
};

Button2.onclick = function() {
  Listgroup1.addItem(DateAdd("s",0,new Date()));
};
