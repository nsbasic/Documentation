 //This sample shows how to move an image around the screen,
 //how to use the SetTimeout function.
 //and how To use a webkitTransform.

 //Movements are done a number of times per second, but the program is 
 //still idle most of the time. There is still lots of processing time
 //for other activities or even more sprites.

function moveSprite1() {
 //Function to move the image. Each time it is called,
 //the x, y and rotation are changed a bit. 
  currentX = currentX + deltaX;
  currentY = currentY - deltaY;
 //move the sprite to the new location
  nsbDOMAttr(Sprite1,'style.left',currentX + "px");
  nsbDOMAttr(Sprite1,'style.top',currentY + "px");
 //this increases the rate of spin geometricly. 
  rotate=rotate*deltaRotate;
  Sprite1.style.transform="rotate("  +  rotate  +  "deg)";

 //Stop calling moveSprite1 when we are at the top.
  if(currentY>0) {
    t=setTimeout("moveSprite1()" ,pause);
 } else {
    clearTimeout(t);
  }
}

Button1.onclick = function() {
 //Initialize Globals
 //  currentX and currentY have the current position. Init to bottom left.
  currentX = 0;
  currentY = window.innerHeight-96;
  pause=10; //milliseconds between updates to position
  rotate=1; //initial rotation in degrees.
  nsbDOMAttr(Sprite1,'style.left',currentX + "px");
  nsbDOMAttr(Sprite1,'style.top',currentY + "px");
  steps=window.innerHeight; //height of screen is number of movements 
  deltaX=(1/steps)*window.innerWidth;
  deltaY=1;
  deltaRotate=1+(1/steps)*10;

 //Set to call moveSprite1 10 times per second
  setTimeout("moveSprite1()" ,pause);
};