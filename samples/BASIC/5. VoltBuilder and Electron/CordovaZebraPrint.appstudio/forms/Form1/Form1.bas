' This demo uses the following Cordova Plugin to print to a
' Zebra Bluetooth printer.
' https://www.npmjs.com/package/cordova-plugin-zebraprinter

Sub Main()
  If typeof(cordova) = "undefined" Then
    MsgBox "This sample must be built with VoltBuilder. It will only run on an iOS or Android device."
  End If
End Sub

Function output(str1, str2)
  ' The mac address of the printer. Get this from the printer
  mac = "AC:3F:A4:EA:58:B1"
  
  ' The data gets embedded in control codes in ZPL
  ' (Zebra Programming Language)
  str = "^XA^"
  str += "^FO20,40^A0N,25,25^FD" + str1 + "^FS"
  str += "^FO20,80^A0N,25,25^FD" + str2 + "^FS"
  str += "^XZ"
  console.log(str)
  cordova.plugins.zbtprinter.print(mac, str, success, fail)
End Function

Function success()
  console.log("success")
End Function

Function fail(fail)
  console.log("fail", fail)
  alert(fail)
End Function

Function btnPrint_onclick()
  output(inpLine1.value, inpLine2.value)
End Function

' Here is what the control codes mean:
' ^XA - start format
' ^FO20,20 - Field origin - position 20 in from left and top
' ^A0N,25,25 - Font name 0, Normal orientation, char height, chr width
' ^FD - Field Data - up to 3072 bytes
' ^FS - Field Separator - ends field
' ^XZ - End format
'
' Complete docs on ZPL are here:
' https://support.zebra.com/cpws/docs/zpl/zpl_manual.pdf
