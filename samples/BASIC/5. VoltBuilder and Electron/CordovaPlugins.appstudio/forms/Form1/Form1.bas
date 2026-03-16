'This sample shows how to use Cordova Plugins.
'The code will only run on a device when compiled with VoltBuilder
'It will not run on the desktop browser.

'See Tech Note "Using the Cordoba Plugins" for more information
'http://wiki.appstudio.dev/Using_Cordova_Plugins

'***************************************************************
'This shows how to use the Cordova plugin to get the device info

Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub


Function butGetInfo_onclick()
  s="Device Model:" & device.model & vbCRLF
  s=s & "Cordova Version:" & device.cordova & vbCRLF
  s=s & "Platform:" & device.platform & vbCRLF
  s=s & "UUID:" & device.uuid & vbCRLF
  s=s & "OS Version:" & device.version
  TextArea1.value=s
End Function


'***************************************************************
'This shows how to use the Cordova plugin to take a Picture

Function butTakePicture_onclick()
  options={quality : 75, _
    destinationType : 1, _
    sourceType : 1, _
    allowEdit: True}
  navigator.camera.getPicture(onPictureReturned, onPictureError, options)
End Function

Function onPictureReturned(ImageURI)
  Image1.firstChild.src=ImageURI
End Function

Function onPictureError(message)
  MsgBox "Failed because " & message
End Function


'***************************************************************
'This shows how to use the Cordova plugin to load a contact

Function butContacts_onclick()
  options = new ContactFindOptions()
  'options.filter="bob"  'if you have no friends named bob, nothing will be returned
  options.multiple=True
  fields = ["displayName", "name"]
  navigator.contacts.find(fields, onContactsFound, onContactsError, options)
End Function

Function onContactsFound(contacts)
  s=""
  For i = 0 To contacts.length -1
    s=s & contacts[i].name.formatted & vbCRLF
  Next
  TextArea1.value=s
End Function

Function onContactsError(message)
  MsgBox "Failed because " & message
End Function

'***************************************************************
'This shows how to use the Cordova plugin to read a barcode

'Dim scanner
'scanner="not yet initialized"
'Sub Main()
'  scanner = cordova.require("cordova/plugin/BarcodeScanner")
'End Sub

Function butBarcode_onclick()
  cordova.plugins.barcodeScanner.scan(BarCodeSuccess, BarCodeFail)
End Function

Function BarCodeSuccess(result) 
  TextArea1.value = "We got a barcode" & vbCRLF & _
    "Result: " & result.text & vbCRLF & _
    "Format: " & result.format & vbCRLF & _
    "Cancelled: " & result.cancelled
End Function

Function BarCodeFail(Error) 
  TextArea1.value = "Scanning failed: " & Error
End Function