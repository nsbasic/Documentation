 //Set the background image of the page at runtime. 
 //Pattern repeats itself to fill screen
 //Also, sets an event and responds To it.

 //Set the onmousedown event of the body to call our bodyMouseDown function.
document.body.onclick=bodyClick;

function bodyClick() {
 //event is a global object that contains information about the last event.
  if(event.clientY>30) {
    NSB.MsgBox(event.type  +  " at "  +  event.clientX  +  ","  +  event.clientY);
 } else {
    form1.style.backgroundImage="url(https://www.appstudio.dev/images/lavalamp.gif)";
  }
}
