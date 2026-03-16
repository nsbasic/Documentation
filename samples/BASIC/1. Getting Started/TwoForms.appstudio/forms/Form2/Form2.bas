Function TitleBar2_onclick(choice)
  If choice = "Prev" Then ChangeForm(Form1, "slide", "slide", 1000)
End Function 

Sub Form2_onshow()
  Textarea2.text = Textarea2.text & "Form2_onshow()" & vbCRLF
End Sub

Sub Form2_onhide()
  Textarea2.text = Textarea2.text & "Form2_onhide()" & vbCRLF
End Sub

JavaScript
  TitleBar2_btnLeft.onclick = function() {TitleBar2.onclick("Prev")}
End JavaScript
