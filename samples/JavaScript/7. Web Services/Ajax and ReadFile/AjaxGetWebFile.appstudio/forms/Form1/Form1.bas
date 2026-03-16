'This sample must be run from the same server that ajaxGetURL.php is on.

Function btnGetFile_onclick()
  req=Ajax("ajaxGetURL.php/?urlToGet=" & txtURL.value, done)
End Function

Function done()
  If req.status = 200 Then 'success
    htmResponse.innerHTML=req.responseText
  Else 'failure
    msg = "Error: Status = " & req.status
    If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
    If TypeName(req.err)="string" Then msg = msg & " " & req.error
    MsgBox msg
  End If
End Function