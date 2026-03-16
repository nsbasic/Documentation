Dim queryParams
queryParams = location.hash.split("/")
location.hash = ""

Sub Main()
  butSignIn.disabled = False
  $("#Container1 button").prop("disabled", True)
  
  If (queryParams.length > 1) Then
    
    If queryParams[1] = "confirm" Then
      $volt.auth.logout()
      $volt.auth.confirm(queryParams[2], confirmCallback)
    End If   
    
    If queryParams[1] = "reset" Then
      $volt.auth.logout()
      showResetPassword()
    End If
    
  End If
End Sub


'---- Confirm an account ----
Function confirmCallback(error, data)
  If error Then
    MsgBox data.message
    return
  Else
    console.log("confirm", data)
    MsgBox "Your account is confirmed. Have a nice day!"
  End If
End Function


'---- Sign in ----
Function butSignIn_onclick()
  showSignIn(signInCallback)
End Function

Function signInCallback()
  butSignIn.disabled = True
  $("#Container1 button").prop("disabled", False)
  MsgBox "SignIn successful."
End Function


'---- Sign Out ----
Function butSignOut_onclick()
  butSignIn.disabled = False
  $("#Container1 button").prop("disabled", True)
  signout();
End Function


'---- Change Email ----
Function butEmail_onclick()
  showChangeEmail()
End Function


'---- Change Password ----
Function butPassword_onclick()
  showChangePassword()
End Function


'---- Delete Account ----
Function butDelete_onclick()
  NSB.MsgBox deleteAccount, "This cannot be undone!", 1, "Delete Volt Account?"
End Function

Function deleteAccount(result)
  If result = 1 Then $volt.user.delete(auth.user_id, deleteAccountCallback);
End Function

Function deleteAccountCallback(error, data) 
  butSignOut_onclick();
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  End If
End Function

'---- Send Email ----
Function butSendEmail_onclick()
  Dim subject = "Email from " & AppTitle
  Dim text = "This message was sent from a Volt app to the currently signed on user."
  setBusyIcon(this)
  $volt.email.send(subject, text, sendEmailCallback)
End Function

Function sendEmailCallback(error, data)
  clearBusyIcon(this)
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    MsgBox "Email Sent."
  End If
End Function