'This sample is designed to be run from the nsbasic.com server.
'It will not work as part of the AppStudio demo.
'To test it, run http://www.appstudio.dev/i/ReadFile

'This code checks if we are running from the nsbasic.com server.
'If not, it restarts the app from that location.
'If you modify the program on your own server, you will need to change this.

mylocation="https://www.appstudio.dev/i/ReadFile/"
If document.URL<>mylocation Then
  MsgBox "This app needs to be run from " & mylocation & vbCRLF & " (Currently: " & location & ")"
  location.href=mylocation
End If
