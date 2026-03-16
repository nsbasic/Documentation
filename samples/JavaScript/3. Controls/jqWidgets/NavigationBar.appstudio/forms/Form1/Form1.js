
Button1.onclick = function() {
  $("#NavigationBar1").jqxNavigationBar("setHeaderContentAt" , 1, "My New Content");
  $("#NavigationBar1").jqxNavigationBar("setContentAt" , 1, "This content replaces what was there before.");
};
