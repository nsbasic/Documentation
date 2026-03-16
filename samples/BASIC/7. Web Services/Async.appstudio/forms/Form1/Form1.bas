Function noop(res)
  ' this function doesn't do anything, but could...
End Function

Async Function getMyIP()
  ip = Await Ajax("http://api.ipify.org?format=json", noop)
  info = Await Ajax("https://api.hackertarget.com/geoip/?q=" + ip.ip, noop)
  return info
End Function

Function showInfo()
  MsgBox "Your info is " & info
End Function

Function Button1_onclick()
  getMyIP().then(showInfo)
End Function
