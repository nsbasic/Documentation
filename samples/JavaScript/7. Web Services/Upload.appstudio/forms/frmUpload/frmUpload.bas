reader = new FileReader()
Dim fileData

Function txtPhoto_onchange()
  fileType = Mid(txtPhoto.value, InStrRev(txtPhoto.value,"."))
  Select Case fileType
  Case ".txt", ".htm", ".html":
    reader.readAsText(txtPhoto.files[0])
  Case ".png", ".gif", ".jpg":
    reader.readAsDataURL(txtPhoto.files[0])
  Case Else
    reader.readAsBinaryString(txtPhoto.files[0])
  End If
End Function

Function reader_onload()
  fileData = reader.result
End Function

Function btnUpload_onclick()
  If Trim(txtPhoto.value) <> "" Then
    fileName = encodeURIComponent(Replace(txtPhoto.value, "C:\fakepath\", ""))
    fileContent = encodeURIComponent(fileData)
  Else
    fileName = encodeURIComponent(txtFileName.value)
    fileContent = encodeURIComponent(txaContents.value)
  End If
  
  If Trim(fileName) = "" Or Trim(fileContent) = "" Then
    MsgBox "Both filename and contents are required!"
  Else
    req = Ajax("phpUpload.php", "POST", "file=" & fileName & "&content=" & fileContent, done)
  End If
End Function

Function done()
  If req.status = 200 Then 'success
    MsgBox "File uploaded!"
    txaContents.value = ""
    txtFileName.value = ""
    txtPhoto.value = ""
  Else 'failure
    msg = "Error: Status = " & req.status
    If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
    If TypeName(req.err)="string" Then msg = msg & " " & req.error
    MsgBox msg
  End If
End Function


JavaScript
  hdrUpload_btnRight.onclick = function() {hdrUpload.onclick("Files")}
End JavaScript
