 //see http://docs.pushwoosh.com/docs/phonegap-build
 //http://docs.pushwoosh.com/docs/fcm-configuration
 //https://www.joshmorony.com/setting-up-the-pushwoosh-plugin-with-phonegap-build/

function Main() {
  if(typeof(cordova)=="undefined") {
    NSB.MsgBox("This sample will only run if compiled using PhoneGap Build and run as a native app.");
     return;
  }
  document.addEventListener("deviceready" , initPushwoosh, true);
  document.addEventListener("push-notification" , notificationReceived);
}

function notificationReceived(event) {
  console.log("notification received:" , event.notification.message);
 var message;
  message=event.notification.message;
  NSB.MsgBox("message:"  +  message);
}

function initPushwoosh() {
  console.log("initPushwoosh");
 var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");
 var init = {appid: "5ED97-CF044",projectid: "938103699235"};
  pushwoosh.onDeviceReady(init);
  pushwoosh.registerDevice(initSuccess, initFail);
}

function initSuccess(status) {
  console.log("initSuccess" , status);
  msg("push token: "  +  status);
}

function initFail(status) {
  console.log("initFail" , status);
  msg(JSON.stringify("failed to register "  +  status));
}

function msg(s) {
  txtLog.text=s  +  '\n'  +  txtLog.text;
}