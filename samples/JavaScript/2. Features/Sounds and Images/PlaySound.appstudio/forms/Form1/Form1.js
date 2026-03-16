var bell;

Button1.onclick = function() {
  bell = NSB.PlaySound("BellToll.wav");
  bell.loop=true;
};

Button2.onclick = function() {
  NSB.PlaySound("DoorClose.mp3");
};

Button3.onclick = function() {
  NSB.PlaySound("Pop.wav");
};

Button4.onclick = function() {
  NSB.PlaySound("Rattle.wav");
};

Button5.onclick = function() {
  NSB.PlaySound("WaterDrop.mp3");
};

Button6.onclick = function() {
  bell.stop(0);
};
