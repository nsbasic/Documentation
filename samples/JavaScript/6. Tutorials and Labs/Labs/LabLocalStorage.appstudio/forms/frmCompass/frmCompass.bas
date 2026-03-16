pos="0"

Function window_ondeviceorientation(e)
  txtCompass.value=e.webkitCompassHeading
  
  imgCompass.style.webkitTransform="rotate(" & pos & "90deg)"
  pos = e.webkitCompassHeading
  imgCompass.style.webkitTransform="rotate(-" & pos & "90deg)"
End Function
