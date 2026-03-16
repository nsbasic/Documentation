 //We don't know if all the voices will be loaded before Sub Main() runs,
 //so we have to be ready either way.
function Main() {
  loadVoices();
}

speechSynthesis.onvoiceschanged = function() {
  loadVoices();
}

function loadVoices() {
  if(voice == undefined )  { return; }
  if(voice.clear == undefined )  { return; }
  voice.clear();
  voices = speechSynthesis.getVoices();

  for     (i=(0); i <= Len(voices)-1; i++) {
    voice.addItem(voices[i].name);
 //For Safari
    if(voices[i].name=="Alex" ) { voice.setIndex(i); }
 //For Chrome
    if(voices[i].name=="native" ) { voice.setIndex(i); }
  }
}

btnSpeak.onclick = function() {
 var u;
  u = new SpeechSynthesisUtterance();
  u.rate = rate.value/10;
  u.volume = volume.value/10;
  u.pitch = pitch.value/10;
  u.text = text.value;
  u.voice = voices[voice.selectedIndex()];
  u.onstart = start_speech;
  u.onend = end_speech;
  speechSynthesis.speak(u);
};

function start_speech() {
  console.log("start");
}

function end_speech() {
  console.log("end");
}

