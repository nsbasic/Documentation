Function Button1_onclick()
  WaitCursor True
  Button1.disabled=True
  Button2.disabled=False
End Function

Function Button2_onclick()
  WaitCursor False
  Button1.disabled=False
  Button2.disabled=True
End Function
