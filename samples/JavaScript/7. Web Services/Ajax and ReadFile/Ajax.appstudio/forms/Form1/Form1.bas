Dim req

Function btnSendData_onclick()
  req=Ajax("ajax.php/?myText=" + txtSend.value, done) 
End Function 

Function done()
  If req.status = 200 Then 'success
    txtResponse.value=req.responseText
  Else 'failure
    msg = "Error: Status = " & req.status
    If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
    If TypeName(req.err)="string" Then msg = msg & " " & req.error
    MsgBox msg
  End If
End Function