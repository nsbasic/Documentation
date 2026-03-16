Function Input1_oncopy(event)
  length = Input1.selectionEnd - Input1.selectionStart
  selectedText = Mid(Input1.value, Input1.selectionStart+1, length)
  modifiedText = UCase(selectedText)
  
  clipboardData = event.clipboardData;
  clipboardData.setData("text/plain", modifiedText)
  'Stop the default copy from the field.
  event.preventDefault()
  
  MsgBox "Selected text:" & selectedText & vbCRLF & "Changed to:" & modifiedText & _
    vbCRLF & "Right click to paste in other fields."

End Function

Function Input2_onpaste(event)
  clipboardData = event.clipboardData;
  tobePasted = clipboardData.getData("text/plain")
  Input2.value = tobePasted & " was pasted"
  'Stop the default paste to the field.
  event.preventDefault()
  
  MsgBox "Pasted text:" & tobePasted & vbCRLF & "Change to:" & Input2.value 
End Function

Function Textarea1_onpaste(event)  'Paste as HTML
  clipboardData = event.clipboardData;
  tobePasted = clipboardData.getData("text/html")
  Textarea1.innerHTML = tobePasted & " was pasted"
  'Stop the default paste to the field.
  event.preventDefault()
  
  MsgBox "Pasted text:" & tobePasted & vbCRLF & "Change to:" & Input2.value 
End Function

Function btnCopy_onclick()
  'execCommand does not work on all browsers and platforms
  Input1.select()
  document.execCommand("Copy")  
End Function
