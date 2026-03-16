 ' This sample works On iOS only. 
' A solution For Android is here:
' https://discuss.appstudio.dev/t/read-compass-under-ios-and-android/3876/28

pos="0"
If typeof(DeviceMotionEvent.requestPermission) <> "undefined" Then
  DeviceMotionEvent.requestPermission()
End If

Function window_ondeviceorientation(e)
  Label1.text=e.webkitCompassHeading
  If Label1.text="undefined" Then 
    Label1.text="Compass not supported on this device"
  Else  
    Label1.text=""
  End If
  
  pos = e.webkitCompassHeading
  imgCompass.style.webkitTransform="rotate(" & pos & "deg)"
  imgCompass.style.webkitTransform="rotate(-" & pos & "deg)"
End Function

Function btnCompass_onclick()
  DeviceMotionEvent.requestPermission()
End Function
