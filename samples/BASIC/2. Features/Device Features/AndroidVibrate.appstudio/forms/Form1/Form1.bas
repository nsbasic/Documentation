If navigator.vibrate=undefined Then
  MsgBox "Device does not support vibration."
End If

Function Button1_onclick()
  navigator.vibrate(1000)
End Function

Function Button2_onclick()
  navigator.vibrate([500,100,500,100,500])
End Function
