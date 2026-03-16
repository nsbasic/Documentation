Function btnAjax_onclick()
  req=Ajax("ajaxPost.php", "POST", txtSend.value, done)
End Function

Function done()
  If req.status = 200 Then 'success
    htmResponse.innerHTML=req.responseText
  Else 'failure
    msg = "Error: Status = " & req.status
    If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
    If TypeName(req.err)="string" Then msg = msg & " " & req.error
    htmResponse.innerHTML = msg
  End If
End Function
