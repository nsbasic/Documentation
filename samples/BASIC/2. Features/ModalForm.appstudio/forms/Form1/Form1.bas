
Function Button2_onclick()
  Modal1.show()
End Function

Function HeaderBar1_onclick(i)
  MsgBox "HeaderBar Clicked: " & i
End Function


JavaScript
  HeaderBar1_btnLeft.onclick = function() {HeaderBar1.onclick("Left")}
End JavaScript


JavaScript
  HeaderBar1_btnRight.onclick = function() {HeaderBar1.onclick("Right")}
End JavaScript
