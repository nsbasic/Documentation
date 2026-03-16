Button1.onclick = function() { //Play a single tone
  PlayTone(440, 1000);
};

Button2.onclick = function() { //Play a single tone
  PlayTone(440, 1000, .1);
};

Button3.onclick = function() {
 //Play a chord
 var C = 261.63;
 var E = 329.63;
 var G = 392.00;
  PlayTone(C, 1000);
  PlayTone(E, 1000);
  PlayTone(G, 1000);
};

var notes,noteIndex;
Button4.onclick = function() {
 var G,Eb,F,D;
  G = 195.998;
  Eb = 155.563;
  F = 174.614;
  D = 146.832;

  notes = [];
  notes.push({frequency: G, duration: 300});
  notes.push({frequency: 0, duration: 100});
  notes.push({frequency: G, duration: 150});
  notes.push({frequency: 0, duration: 100});
  notes.push({frequency: G, duration: 150});
  notes.push({frequency: 0, duration: 100});
  notes.push({frequency: Eb, duration: 1000});
  notes.push({frequency: 0, duration: 250});

  notes.push({frequency: F, duration: 300});
  notes.push({frequency: 0, duration: 100});
  notes.push({frequency: F, duration: 150});
  notes.push({frequency: 0, duration: 100});
  notes.push({frequency: F, duration: 150});
  notes.push({frequency: 0, duration: 100});
  notes.push({frequency: D, duration: 1000});

  noteIndex = 0;
  player = PlayTone(0,0,0);
  player.oscillator.onended = NextNote();
};

function NextNote() {
  if(noteIndex>=notes.length ) { return; }
  frequency = notes[noteIndex].frequency;
  duration = notes[noteIndex].duration;
  player = PlayTone(frequency, duration);
  player.oscillator.onended = NextNote;
  noteIndex = noteIndex + 1;
}