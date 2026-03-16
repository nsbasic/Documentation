'make sure you set media-src * blob:; in contentSecurityPolicy.

Sub Main()
  context = PictureBox1.getContext("2d")
  videoObj = {"video": True}
  
  'Put video listeners into place
  If (navigator.webkitGetUserMedia) Then
    navigator.webkitGetUserMedia(videoObj, videoBack, errBack);
  End If
End Sub

Sub videoBack(stream)
  console.log(stream)
  Video1.srcObject = stream
  Video1.play()
End Sub

Sub errBack(error)
  MsgBox "Video capture error: " & error
End Sub

Sub Button1_onclick()
  context.drawImage(Video1, 0, 0, 320, 240)
  imageb64 = PictureBox1.toDataURL()  // in PNG Format
  console.log(imageb64)
End Sub