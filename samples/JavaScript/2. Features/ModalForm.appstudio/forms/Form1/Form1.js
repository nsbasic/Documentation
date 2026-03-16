
Button2.onclick = function() {
  Modal1.show();
};

HeaderBar1.onclick = function(i) {
  NSB.MsgBox("HeaderBar Clicked: "  +  i);
};

HeaderBar1_btnLeft.onclick = function() {HeaderBar1.onclick("Left")}
HeaderBar1_btnRight.onclick = function() {HeaderBar1.onclick("Right")}
