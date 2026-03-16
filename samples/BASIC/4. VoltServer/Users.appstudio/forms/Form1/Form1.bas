Dim queryParams
queryParams = location.hash.split("/")
location.hash = ""

Sub Main()    
  If (queryParams.length > 1) Then
    If queryParams[1] = "confirm" Then
      $volt.auth.logout();
      $volt.auth.confirm(queryParams[2], confirmCallback);
    End If
  End If
End Sub

Function inpPassword_onchange()
  CheckPassword(this)
End Function

Function inpPasswordConfirm_onchange()
  CheckPassword(this)
End Function

Function butAddUser_onclick()
  If CheckPassword(inpPassword) And CheckPassword(inpPasswordConfirm) Then
    $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, inpAppID.value, addUserCallback)
  End If
End Function

Function addUserCallback(error, data)
  If error Then
    If data.message = "Password too weak." Then
      MsgBox formatErrorMessage(data)
      return
    End If
  
    
    If data.message = "Invalid Request Body." Then
      MsgBox data.message & " Did you fill in all the fields?"
      return
    End If
    
    If data.message = "Could not decode scope." Then
      MsgBox data.message & " Are you sure the App ID is correct?"
      return
    End If
    
    MsgBox data.message
    console.log(data)
  Else 
    MsgBox "A confirmation email has been sent (if Confirm Page has been set for the app.)"
  End If
End Function


Function formatErrorMessage(data)
  Dim s, i, p
  s = data.message
  p = data.validations.password
  For i = 0 To p.length - 1
    s += "<br>• " + p[i]
  Next
  return s
End Function 


Function confirmCallback(error, data)
  If error Then
    MsgBox data.message
    return
  Else
    console.log("confirm", data)
    MsgBox "Your account is confirmed. Have a nice day!"
  End If
End Function


JavaScript
  
function CheckPassword(inputtxt) {
  var ok = false;
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 
  ok = (inputtxt.value.match(decimal) != null)
  if (inputtxt.value.length>19) ok = true;
  if (ok) {
    Alert1.hide();
  } else {
    Alert1.show();
  }
  return ok
}

End JavaScript

