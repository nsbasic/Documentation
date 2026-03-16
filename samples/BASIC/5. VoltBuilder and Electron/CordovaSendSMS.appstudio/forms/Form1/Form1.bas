'Send an SMS message using Cordova SMS plugin
'Android can use Message app or native.
'iOS is Message app only.

Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub

Function Button1_onclick()
  Dim options = {}
  
  options.replaceLineBreaks = False  'True To Replace \n by a new line, False by default
  options.android = {}
  
  If radMethod.value = 0 Then
    options.android.intent = "INTENT"
  Else
    options.android.intent = ""
  End If
  
  sms.send(inpNumber.value, txtMessage.value, options, success, error);
End Function

Function success()
  MsgBox "Message sent successfully"
End Function

Function error(e)
  MsgBox "Message Failed:" & e
End Function