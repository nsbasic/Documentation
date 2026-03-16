Function Button1_onclick() 'Play a single tone
  PlayTone(440, 1000);
End Function

Function Button2_onclick() 'Play a single tone
  PlayTone(440, 1000, .1);
End Function

Function Button3_onclick()
  'Play a chord
  Dim C = 261.63
  Dim E = 329.63
  Dim G = 392.00
  PlayTone(C, 1000)
  PlayTone(E, 1000)
  PlayTone(G, 1000)
End Function

Dim notes, noteIndex
Function Button4_onclick()
  Dim G, Eb, F, D
  G = 195.998
  Eb = 155.563
  F = 174.614
  D = 146.832
  
  notes = []
  notes.push({frequency: G, duration: 300})
  notes.push({frequency: 0, duration: 100})
  notes.push({frequency: G, duration: 150})
  notes.push({frequency: 0, duration: 100})
  notes.push({frequency: G, duration: 150})
  notes.push({frequency: 0, duration: 100})
  notes.push({frequency: Eb, duration: 1000})
  notes.push({frequency: 0, duration: 250})
  
  notes.push({frequency: F, duration: 300})
  notes.push({frequency: 0, duration: 100})
  notes.push({frequency: F, duration: 150})
  notes.push({frequency: 0, duration: 100})
  notes.push({frequency: F, duration: 150})
  notes.push({frequency: 0, duration: 100})
  notes.push({frequency: D, duration: 1000})
  
  noteIndex = 0
  player = PlayTone(0,0,0)
  player.oscillator.onended = NextNote
End Function

Function NextNote()
  If noteIndex>=notes.length Then return;
  frequency = notes[noteIndex].frequency
  duration = notes[noteIndex].duration
  player = PlayTone(frequency, duration)
  player.oscillator.onended = NextNote
  noteIndex = noteIndex + 1
End Function