 //Contributed by Mike Burgher

var swStartX,swStartY,swCurX,swCurY;
var SwipeLength,swipeAngle,swipeDirection,legalSwipe = false;
var swipeMinLength = 20;

LblTop.ontouchstart = function() {
  swStartX= event.touches[0].pageX;
  swStartY= event.touches[0].pageY;
};

LblTop.ontouchmove = function() {
  swCurX = event.touches[0].pageX;
  swCurY = event.touches[0].pageY;
};

LblTop.ontouchend = function() {
  if(swCurX != 0) {
    SwipeLength = Math.round(Math.sqrt(Math.pow(swCurX - swStartX,2) + Math.pow(swCurY - swStartY,2)));
    if(SwipeLength >= swipeMinLength) {
      calcAngle();
      determineSwipeDir();
      processSwipe();
    }
  }
  TouchCancel();
};

function TouchCancel() {
  swStartX = 0;
  swStartY = 0;
  swCurX = 0;
  swCurY = 0;
  SwipeLength = 0;
  swipeAngle = null;
  swipeDirection = null;
  legalSwipe = false;
}

 // calculate the angle
function calcAngle() {
 var calX = swStartX-swCurX;
 var calY = swCurY-swStartY;
 var calZ;
 var calR;
  calZ = Math.round(Math.sqrt((calX*calX)+(calY*calY))); // the distance - rounded - in pixels
  calR = Math.atan2(calY,calX); // angle in radians
  swipeAngle = Math.round(calR*180/Math.PI); // angle in degrees
  if(swipeAngle < 0 ) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
}

 // determine swipe direction - left, right up down...
function determineSwipeDir() {
  if((swipeAngle <= 45) && (swipeAngle >= 0)) {
    swipeDirection = "left";
   }else if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
    swipeDirection = "left";
   }else if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
    swipeDirection = "right";
   }else if ((swipeAngle > 45) && (swipeAngle < 135)) {
    swipeDirection = "down";
 } else {
    swipeDirection = "up";
  }
}

function processSwipe() {
  NSB.MsgBox(swipeDirection);
}