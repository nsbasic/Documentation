' jqWidget CheckBox sample

'It is important to position the label field
'behind the checkbox field if you wish the user
'to be able to click on the label as well.  Make
'the width of the CheckBox large enough To cover the
'label text.

'You can place the checkbox to the right or the left with
'the 'rtl' property.

'These three checkboxes are grouped together with 
'a common 'groupName' so they act as radiobuttons.

'I have not found a way to 'uncheck' all boxes as clicking  
'on it again does not deselect it.  The 'Cancel' button works!


Dim thisExchange, value
thisExchange=""

Function xcbNYSE_onchecked()
  thisExchange="Y"  
  MsgBox("You chose the New York Stock Exchange!")
End Function

Function xcbNASDAQ_onchecked()
  MsgBox("You chose the Nasdaq Stock Exchange!")  
End Function

Function xcbAMEX_onchecked()
  value = $("#xcbAMEX").jqxCheckBox("val");
  If value=True Then
    MsgBox("You chose the American Stock Exchange!")  
  End If
End Function

Function Button1_onclick()
  $("#xcbNYSE").jqxCheckBox("uncheck"); 
  $("#xcbNASDAQ").jqxCheckBox("uncheck"); 
  $("#xcbAMEX").jqxCheckBox("uncheck"); 
  thisExchange=""
End Function
