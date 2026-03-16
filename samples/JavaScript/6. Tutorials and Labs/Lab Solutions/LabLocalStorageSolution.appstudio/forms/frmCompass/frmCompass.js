pos="0";

window.ondeviceorientation = function(e) {
  txtCompass.value=e.webkitCompassHeading;

  imgCompass.style.webkitTransform="rotate("  +  pos  +  "90deg)";
  pos = e.webkitCompassHeading;
  imgCompass.style.webkitTransform="rotate(-"  +  pos  +  "90deg)";
};
