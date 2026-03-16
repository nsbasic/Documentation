
frmPrint.onshow = function() {
 var i;
  lineBorder.Top = 10;
  lineBorder.Height = (860-20); //1004 is virtual height
  lineBorder.left = 10;
  lineBorder.Width = (680-20); //768 is virtual width
  Grid1.Left = lineBorder.Left + 10;
  Grid1.Width = lineBorder.Width - lineBorder.Left - 20;
  Grid1.Top = lineBorder.Top + 20;
  Grid1.Height = lineBorder.Height - 40;
  btnPrint.Top = Grid1.Top;
  btnPrint.Left = Grid1.Left;
  for     (i = (1); i  <= Grid1.getRowCount() - 1; i ++) {
    Grid1.setValue(i,0,i);
  }
};

btnPrint.onclick = function() {
  NSBPage.oldMinHeight = NSBPage.style.minHeight; //PrintTest is the name of the app
  btnPrint.hide();
  NSBPage.style.minHeight = "1024px";
  window.print();
  setTimeout("printDone()" ,1000);
};

function printDone() {
  NSBPage.style.minHeight = NSBPage.oldMinHeight;
  btnPrint.show();
  ChangeForm(frmMain);
}
