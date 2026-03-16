Function btnSpeak_onclick()
  Speak("Hello World!")
End Function

Function Button5_onclick()
  Dim voice
  If InStr(navigator.vendor,"Apple") Then voice = "Alex"
  If InStr(navigator.vendor,"Google") Then voice = "Google UK English Male"
  Speak("Hello World", voice)
End Function

Function Button1_onclick()
  NSB.speech.pitch = 2
  Speak("Hello World")
  NSB.speech.pitch = 1
End  Function

Function Button2_onclick()
  NSB.speech.volume = .2
  Speak("Hello World")
  NSB.speech.volume = 1
End  Function

Function Button3_onclick()
  NSB.speech.lang = "de-DE"
  Speak(Button3.text, "Google Deutsch")
  NSB.speech.lang = navigator.language
End  Function

Function Button4_onclick()
  'Works on Mac OS, not Windows
  NSB.speech.lang = "ar-SA"
  Speak(Button4.text)
  NSB.speech.lang = navigator.language
End  Function

