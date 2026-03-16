'We don't know if all the voices will be loaded before Sub Main() runs,
'so we have to be ready either way.
Sub Main()
  loadVoices()
End Sub

Sub speechSynthesis_onvoiceschanged()
  loadVoices()
End Sub

Sub loadVoices()
  If voice = undefined Then Exit Sub
  If voice.clear = undefined Then Exit Sub
  voice.clear()
  voices = speechSynthesis.getVoices() 
   
  For i=0 To Len(voices)-1
    voice.addItem(voices[i].name)
    'For Safari
    If voices[i].name="Alex" Then voice.setIndex(i)
    'For Chrome
    If voices[i].name="native" Then voice.setIndex(i)
  Next
End Sub

Function btnSpeak_onclick()
  Dim u
  u = new SpeechSynthesisUtterance()
  u.rate = rate.value/10
  u.volume = volume.value/10
  u.pitch = pitch.value/10
  u.text = text.value
  u.voice = voices[voice.selectedIndex()]
  u.onstart = start_speech
  u.onend = end_speech
  speechSynthesis.speak(u)
End Function

Function start_speech()
  console.log("start")
End Function

Function end_speech()
  console.log("end")
End Function

