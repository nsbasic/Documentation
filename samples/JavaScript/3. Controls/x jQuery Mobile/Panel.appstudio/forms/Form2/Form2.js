
Button3.onclick = function() {
  NSB.MsgBox("Hello World!");
};

Form2.onshow = function() {
  console.log("show");
};

Form2.onhide = function() {
  console.log("hide");
};

Button4.onclick = function() {
  Panel3.close();
};
