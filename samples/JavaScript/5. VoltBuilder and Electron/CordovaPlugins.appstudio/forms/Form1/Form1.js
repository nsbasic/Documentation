 //This sample shows how to use Cordova Plugins.
 //The code will only run on a device when compiled with VoltBuilder
 //It will not run on the desktop browser.

 //See Tech Note "Using the Cordoba Plugins" for more information
 //http://wiki.appstudio.dev/Using_Cordova_Plugins

 //***************************************************************
 //This shows how to use the Cordova plugin to get the device info

 function Main() {
     if (typeof(cordova) == "undefined") {
         NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
     }
 }


 butGetInfo.onclick = function() {
     s = "Device Model:" + device.model + '\n';
     s = s + "Cordova Version:" + device.cordova + '\n';
     s = s + "Platform:" + device.platform + '\n';
     s = s + "UUID:" + device.uuid + '\n';
     s = s + "OS Version:" + device.version;
     TextArea1.value = s;
 };


 //***************************************************************
 //This shows how to use the Cordova plugin to take a Picture

 butTakePicture.onclick = function() {
     options = {
         quality: 75,
         destinationType: 1,
         sourceType: 1,
         allowEdit: true
     };
     navigator.camera.getPicture(onPictureReturned, onPictureError, options);
 };

 function onPictureReturned(ImageURI) {
     Image1.firstChild.src = ImageURI;
 }

 function onPictureError(message) {
     NSB.MsgBox("Failed because " + message);
 }


 //***************************************************************
 //This shows how to use the Cordova plugin to load a contact

 butContacts.onclick = function() {
     options = new ContactFindOptions();
     //options.filter="bob"  'if you have no friends named bob, nothing will be returned
     options.multiple = true;
     fields = ["displayName", "name"];
     navigator.contacts.find(fields, onContactsFound, onContactsError, options);
 };

 function onContactsFound(contacts) {
     s = "";
     for (i = (0); i <= contacts.length - 1; i++) {
         s = s + contacts[i].name.formatted + '\n';
     }
     TextArea1.value = s;
 }

 function onContactsError(message) {
     NSB.MsgBox("Failed because " + message);
 }

 //***************************************************************
 //This shows how to use the Cordova plugin to read a barcode

 //Dim scanner
 //scanner="not yet initialized"
 //Sub Main()
 //  scanner = cordova.require("cordova/plugin/BarcodeScanner")
 //End Sub

 butBarcode.onclick = function() {
     cordova.plugins.barcodeScanner.scan(BarCodeSuccess, BarCodeFail);
 };

 function BarCodeSuccess(result) {
     TextArea1.value = "We got a barcode" + '\n' + "Result: " + result.text + '\n' + "Format: " + result.format + '\n' + "Cancelled: " + result.cancelled;
 }

 function BarCodeFail(Error) {
     TextArea1.value = "Scanning failed: " + Error;
 }