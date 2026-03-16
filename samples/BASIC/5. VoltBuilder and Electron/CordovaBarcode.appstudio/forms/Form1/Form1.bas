// use Barcode scanner plugin
// https://www.npmjs.com/package/phonegap-plugin-barcodescanner

Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub

Function Button1_onclick()
  options = {}
  options.preferFrontCamera = False
  options.showFlipCameraButton = False
  options.showTorchButton = True
  options.prompt = "Please scan code..."
  options.resultDisplayDuration = 500
  options.disableAnimations = True
  options.disableSuccessBeep = False

  cordova.plugins.barcodeScanner.scan(successCallback, failCallback, options);
End Function

Function successCallback(result)
  MsgBox "Scanned: Result: " & result.text & " Format: " & result.format
  PlaySound("Scanner.mp3")
End Function

Function failCallback(error)
  MsgBox "Scanning failed: " & error
End Function
