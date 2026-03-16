
Function Button1_onclick()
  location = "whatsapp://app"
End Function

Function Button2_onclick()
  Dim s
  
  If txtMessage.text="" Then
    MsgBox "No message."
    Exit Function
  End If
  
  s = "whatsapp://send?text=" & encodeURIComponent(txtMessage.text)
  If txtSendTo.text<>"" Then s = s & "?abid=" & encodeURIComponent(txtSendTo.text)
  location = s
End Function
