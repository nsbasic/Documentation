// use Barcode scanner plugin  https;
//www.npmjs.com/package/phonegap-plugin-barcodescanner;
function Main() {
    if (typeof(cordova) == "undefined") {
        NSB.MsgBox("This sample must be built with VoltBuilder. It will only run on an iOS or Android device.");
    }
}

Button1.onclick = function() {
    options = {};
    options.preferFrontCamera = false;
    options.showFlipCameraButton = false;
    options.showTorchButton = true;
    options.prompt = "Please scan code...";
    options.resultDisplayDuration = 500;
    options.disableAnimations = true;
    options.disableSuccessBeep = false;

    cordova.plugins.barcodeScanner.scan(successCallback, failCallback, options);
};

function successCallback(result) {
    NSB.MsgBox("Scanned: Result: " + result.text + " Format: " + result.format);
    NSB.PlaySound("Scanner.mp3");
}

function failCallback(error) {
    NSB.MsgBox("Scanning failed: " + error);
}