'This program shows some useful information about the device.

'These lines of code are called as soon as the program is started.
'Most of these values (plus more) are documented in Tech Note 2.
'Some are device specific.
Print "screen width = " & SysInfo(0)
Print "screen height = " & SysInfo(1)
'Next one is Android 2.2+
Print "navigator.connection = " & navigator.connection
Print "navigator.userAgent = " & navigator.userAgent
Print "navigator.vendor = " & navigator.vendor
Print "window.devicePixelRatio = " & window.devicePixelRatio
Print "window.navigator.onLine = " & window.navigator.onLine
'Next one is iOS only
Print "window.navigator.standalone = " & window.navigator.standalone
Print "window.orientation = " & window.orientation

Function window_onorientationchange()
  'This function is called if the orientation of the device is changed.
  Print "orientation changed to " & window.orientation
End Function
