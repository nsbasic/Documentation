// This sample works On iOS only.
// A solution For Android is here:
// https://discuss.appstudio.dev/t/read-compass-under-ios-and-android/3876/28

pos = "0";
if (typeof DeviceMotionEvent.requestPermission != "undefined") {
  DeviceMotionEvent.requestPermission();
}

window.ondeviceorientation = function (e) {
  Label1.text = e.webkitCompassHeading;
  if (Label1.text == "undefined") {
    Label1.text = "Compass not supported on this device";
  } else {
    Label1.text = "";
  }

  pos = e.webkitCompassHeading;
  imgCompass.style.webkitTransform = "rotate(" + pos + "deg)";
  imgCompass.style.webkitTransform = "rotate(-" + pos + "deg)";
};

btnCompass.onclick = function () {
  DeviceMotionEvent.requestPermission();
};
