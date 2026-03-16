Function Hamburger1_onclick(s)
  If typeof(s) == "object" Then
    return;
  End If
  MsgBox "Choice is " & s
  If s === "Sign Out" Then
    ' Do code For sign out.
  End If
  If s === "Reset Password" Then
    ' Do code For Reset Password.
  End If
  If s === "Change Email" Then
    ' Do code For Change Email.
  End If
  If s === "Delete Account" Then
    ' Do code For delete Account.
  End If
End Function