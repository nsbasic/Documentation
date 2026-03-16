'This is the code for Form1. It responds to the Next button
'in the title bar.

Function TitleBar1_onclick(choice)
  If choice="Next" Then ChangeForm(Form2, "fade")
End Function

Sub Form1_onshow()
  Textarea1.text = Textarea1.text & "Form1_onshow()" & vbCRLF
End Sub

Sub Form1_onhide()
  Textarea1.text = Textarea1.text & "Form1_onhide()" & vbCRLF
End Sub


JavaScript
  TitleBar1_btnRight.onclick = function() {TitleBar1.onclick("Next")}
End JavaScript
