Dim bell

Function Button1_onclick()
  bell = PlaySound("BellToll.wav")
  bell.loop=True
End Function

Function Button2_onclick()
  PlaySound("DoorClose.mp3")
End Function

Function Button3_onclick()
  PlaySound("Pop.wav")
End Function

Function Button4_onclick()
  PlaySound("Rattle.wav")
End Function

Function Button5_onclick()
  PlaySound("WaterDrop.mp3")
End Function

Function Button6_onclick()
  bell.stop(0)
End Function
