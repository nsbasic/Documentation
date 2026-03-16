Dim files
Dim selectedFileName

Function frmFiles_onshow()
  lstFiles.deleteItem("all")
  
  req = Ajax("phpView.php", fileCallback)
End Function

Function fileCallback()
  If req.status = 200 Then 'success
    files = Split(req.responseText, vbCRLF)
    
    For i = 0 To files.length - 1
      If Trim(files[i]) <> "" Then
        lstFiles.addItem(files[i])
      End If
    Next
  Else 'failure
    If req.status = 404 Then
      req.err = "No files found!"
    Else 'failure
      msg = "Error: Status = " & req.status
      If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
      If TypeName(req.err)="string" Then msg = msg & " " & req.error
      MsgBox msg
    End If
  End Function
  
End Function

Function lstFiles_onclick(i)
  If TypeName(i) = "object" Then Exit Function
  selectedFileName = files[i]
  ChangeForm(frmView)
End Function


JavaScript
  hdrFiles_btnLeft.onclick = function() {hdrFiles.onclick("Back")}
End JavaScript
