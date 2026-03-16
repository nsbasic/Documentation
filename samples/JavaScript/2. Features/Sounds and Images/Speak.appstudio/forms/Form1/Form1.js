btnSpeak.onclick = function() {
  Speak("Hello World!");
};

Button5.onclick = function() {
 var voice;
  if(InStr(navigator.vendor,"Apple") ) { voice = "Alex"; }
  if(InStr(navigator.vendor,"Google") ) { voice = "Google UK English Male"; }
  Speak("Hello World" , voice);
};

Button1.onclick = function() {
  NSB.speech.pitch = 2;
  Speak("Hello World");
  NSB.speech.pitch = 1;
};

Button2.onclick = function() {
  NSB.speech.volume = .2;
  Speak("Hello World");
  NSB.speech.volume = 1;
};

Button3.onclick = function() {
  NSB.speech.lang = "de-DE";
  Speak(Button3.text, "Google Deutsch");
  NSB.speech.lang = navigator.language;
};

Button4.onclick = function() {
 //Works on macOS, not Windows
  NSB.speech.lang = "ar-SA";
  Speak(Button4.text);
  NSB.speech.lang = navigator.language;
};

