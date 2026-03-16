Dim queryParams 
queryParams = location.hash.split("/")
location.hash = ""

Function Main() 
  enableButtons()
  butSignIn.disabled = $volt.auth.isLoggedIn()
  butSignOut.disabled = Not butSignIn.disabled
  $("#Container1 button").prop("disabled", True)
  
  If queryParams.length > 1 Then
    
    If queryParams[1] = "confirm" Then
      $volt.auth.logout()
      $volt.auth.confirm(queryParams[2], confirmCallback)
    End If
    
    If queryParams[1] = "reset" Then
      $volt.auth.logout()
      showResetPassword()
    End If
    
  End If
End Function

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
  butSignOut.disabled = False   
  enableButtons()
  MsgBox "SignIn successful."
End Function


'---- Sign Out ----
Function butSignOut_onclick()
  butSignIn.disabled = False
  butSignOut.disabled = True
  disableButtons()
  signout()
End Function
