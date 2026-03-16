 //This program shows some useful information about the device.

 //These lines of code are called as soon as the program is started.
 //Most of these values (plus more) are documented in Tech Note 2.
 //Some are device specific.
NSB.Print((("screen width = ")  +  (SysInfo(0))) + "<br>");
NSB.Print((("screen height = ")  +  (SysInfo(1))) + "<br>");
 //Next one is Android 2.2+
NSB.Print((("navigator.connection = ")  +  (navigator.connection)) + "<br>");
NSB.Print((("navigator.userAgent = ")  +  (navigator.userAgent)) + "<br>");
NSB.Print((("navigator.vendor = ")  +  (navigator.vendor)) + "<br>");
NSB.Print((("window.devicePixelRatio = ")  +  (window.devicePixelRatio)) + "<br>");
NSB.Print((("window.navigator.onLine = ")  +  (window.navigator.onLine)) + "<br>");
 //Next one is iOS only
NSB.Print((("window.navigator.standalone = ")  +  (window.navigator.standalone)) + "<br>");
NSB.Print((("window.orientation = ")  +  (window.orientation)) + "<br>");

window.onorientationchange = function() {
 //This function is called if the orientation of the device is changed.
  NSB.Print((("orientation changed to ")  +  (window.orientation)) + "<br>");
};
