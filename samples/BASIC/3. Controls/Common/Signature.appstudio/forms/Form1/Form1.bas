// See https://github.com/szimek/signature_pad

Function btnSave_onclick()
  If Signature1_signaturePad.isEmpty() Then
    MsgBox "No signature entered"
    return
  End If
  
  'Get the image in a string which can be saved.
  Dim imageStr = Signature1_signaturePad.toDataURL("image/jpeg")
  
  'display the string in an Image control.
  Image1.src = imageStr
End Function

Function btnClear_onclick()
  Signature1_signaturePad.clear()
End Function
