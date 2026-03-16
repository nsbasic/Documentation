Sub Main()
  txtVideoID.text=YouTube1.settings.videoID
End Sub

Function btnRefresh_onclick()
  YouTube1.settings.videoID = txtVideoID.text
  YouTube1.settings.width = Form1.Width-20
  YouTube1.refresh()
End Function
