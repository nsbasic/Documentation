' Snackbars contain a single line of text directly related To the operation performed. 
' They may contain a text action, but no icons.
' also: https://codepen.io/wibblymat/pen/avAjq

Function Button1_onclick()
  Snackbar("This is a warning about something.", "more?", snackBarDismiss)
End Function

Function snackBarDismiss()
  MsgBox "Closed!"
End Function