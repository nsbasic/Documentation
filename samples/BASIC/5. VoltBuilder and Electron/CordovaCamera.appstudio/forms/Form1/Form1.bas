Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder It will only run on an iOS or Android device."
  End If
End Sub

Function Button1_onclick()
  options={ quality: 50, destinationType: Camera.DestinationType.FILE_URI}

  navigator.camera.getPicture(onPictureReturned, onPictureError, options)
End Function

Function onPictureReturned(ImageURI)
  Image1.src = ImageURI
End Function

Function onPictureError(message)
  MsgBox "Failed because " & message
End Function