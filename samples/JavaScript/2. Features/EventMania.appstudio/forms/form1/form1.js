 //This app explores some of the events that happen when someone touches the screen.
 //It's best to test this on an actual device.

 //Sometimes the same event appears multiple times. This is a global we can 
 //check so that we only report events that are different from the previous one.
lastEvent="";

 //This function logs the events to the screen as they appear.
function logit(s) {
  if(s!=lastEvent) {
    txtResults.value=s  +  '\n'  +  txtResults.value;
    lastEvent=s;
  }
}

 //Touch Events
Button1.ontouchstart = function() {
  logit(event.target.id  +  "_"  +  event.type  +  " x:"  +  event.touches[0].pageX  +  " y:"  +  event.touches[0].pageY);
};
Button1.ontouchend = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.ontouchmove = function() {
  logit(event.target.id  +  "_"  +  event.type  +  " x:"  +  event.touches[0].pageX  +  " y:"  +  event.touches[0].pageY);
};

 //Click and KeyDown Events for Button1
Button1.onchange = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onclick = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.ondblclick = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onfocus = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onkeydown = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onkeypress = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onkeyup = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onmousedown = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onmousemove = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onmouseup = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onmouseover = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
Button1.onmouseup = function() {
  logit(event.target.id  +  "_"  +  event.type);
};


 //Click and KeyDown Events for txtResults
txtResults.onchange = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onclick = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.ondblclick = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onfocus = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onkeydown = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onkeypress = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onkeyup = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onmousedown = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onmousemove = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onmouseup = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onmouseover = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onmouseup = function() {
  logit(event.target.id  +  "_"  +  event.type);
};
txtResults.onselect = function() {
  logit(event.target.id  +  "_"  +  event.type);
};

