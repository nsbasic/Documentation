
Function Button1_onclick()
  'This panel displays HTML from the text property.
  Panel1.open()
End Function

Function btnSaveClick()
  'Called from Panel1
  Dim Name, Passwort
  Name = $("#name").val();
  Passwort = $("#password").val();
  
  console.log($("#password").val());
  console.log($("#name").val());
  
  MsgBox "Your Name and Password : " & Name & " / " & Passwort
End Function

Function btnCancelClick()
  'Called from Panel1
  MsgBox "Cancel clicked"
End Function

Function closePanel_onclick()
  'Called from Panel1
  Panel1.close()
End Function

Function Button2_onclick()
  'This panel displays a form.
  Panel3.open(Form2)
End Function
