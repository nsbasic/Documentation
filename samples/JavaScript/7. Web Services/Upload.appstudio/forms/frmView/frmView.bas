Function frmView_onshow()
  imgFileContent.hide()
  imgFileContent.src = ""
  lblFileName.textContent = selectedFileName
  txaFileContent.value = ""
  txaFileContent.show()

  req = Ajax("phpView.php?file=" & encodeURIComponent(selectedFileName), viewCallback)
End Function

Function viewCallback()
 If req.status = 200 Then 'success
    If Left(req.responseText, 11) = "data:image/" Then
      imgFileContent.childNodes[0].src = req.responseText
      txaFileContent.hide()
      imgFileContent.show()
    Else
      txaFileContent.value = req.responseText
    End If
 Else 'failure
    msg = "Error: Status = " & req.status
    If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
    If TypeName(req.err)="string" Then msg = msg & " " & req.error
    MsgBox msg
  End If
End Function



JavaScript
  hdrView_btnLeft.onclick = function() {hdrView.onclick("Back")}
End JavaScript
