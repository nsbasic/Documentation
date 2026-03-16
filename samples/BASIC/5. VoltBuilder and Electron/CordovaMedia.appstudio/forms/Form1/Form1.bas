Dim audio
file = "/android_asset/www/Super.wav"

Sub Main()
  console.log(Media)
  audio = new Media(file, mediaSuccess, mediaError, mediaStatus)

  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub

Function mediaSuccess()
  TextBox1.value = "Success"
End Function

Function mediaError(err)
  TextBox1.value = "Error:" & err
End Function

Function mediaStatus(err)
  Dim s
  s = ["None", "Starting", "Running", "Paused", "Stopped"]
  TextBox1.value = "Status:" & s[err]
End Function

Function Button1_onclick()
  TextBox1.value = "Playing..."
  audio.play()
End Function

