
Function frmPrint_onshow()
  Dim i
  lineBorder.Top = 10
  lineBorder.Height = (860-20) '1004 is virtual height
  lineBorder.left = 10
  lineBorder.Width = (680-20) '768 is virtual width
  Grid1.Left = lineBorder.Left + 10
  Grid1.Width = lineBorder.Width - lineBorder.Left - 20 
  Grid1.Top = lineBorder.Top + 20
  Grid1.Height = lineBorder.Height - 40
  btnPrint.Top = Grid1.Top 
  btnPrint.Left = Grid1.Left
  For i = 1 To Grid1.getRowCount() - 1
    Grid1.setValue(i,0,i)
  Next
End Function

Function btnPrint_onclick()
  NSBPage.oldMinHeight = NSBPage.style.minHeight  'PrintTest is the name of the app
  btnPrint.hide()
  NSBPage.style.minHeight = "1024px"
  window.print()
  SetTimeout("printDone()",1000)
End Function

Function printDone()
  NSBPage.style.minHeight = NSBPage.oldMinHeight
  btnPrint.show()
  ChangeForm(frmMain)
End Function 