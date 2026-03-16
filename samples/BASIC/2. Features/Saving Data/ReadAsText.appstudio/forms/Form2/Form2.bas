Dim reader
reader = new FileReader();

Function txtFilename_onchange()
  reader.readAsText(txtFilename.files[0])
End Function

Function reader_onload(e)
  Dim lines()
  txtData.text = ""
  txtData.text = txtData.text & "Filename: " & txtFilename.files[0].name & vbCRLF
  txtData.text = txtData.text & "Size: " & txtFilename.files[0].size & vbCRLF
  txtData.text = txtData.text & "Modified: " & txtFilename.files[0].lastModifiedDate & vbCRLF
  
  lines = Split(e.target.result, vbLF)
  txtData.text = txtData.text & "Lines: " & Len(lines) & vbCRLF
  
  For i = 0 To 50
    txtData.text = txtData.text & lines(i) & vbCRLF
  Next
  
End Function