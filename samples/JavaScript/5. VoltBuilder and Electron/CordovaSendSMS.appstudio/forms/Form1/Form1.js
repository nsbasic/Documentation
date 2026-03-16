 //Send an SMS message using Cordova SMS plugin
 //Android can use Message app or native.
 //iOS is Message app only.

 function Main() {
     if (typeof(cordova) == "undefined") {
         NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
     }
 }

 Button1.onclick = function() {
     var options = {};

     options.replaceLineBreaks = false; //True To Replace \n by a new line, False by default
     options.android = {};

     if (radMethod.value == 0) {
         options.android.intent = "INTENT";
     } else {
         options.android.intent = "";
     }

     sms.send(inpNumber.value, txtMessage.value, options, success, error);
 };

 function success() {
     NSB.MsgBox("Message sent successfully");
 }

 function error(e) {
     NSB.MsgBox("Message Failed:" + e);
 }