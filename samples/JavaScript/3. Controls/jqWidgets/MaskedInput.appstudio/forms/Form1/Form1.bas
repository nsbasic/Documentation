Function Button1_onclick()
  $("#MaskedInput1").jqxMaskedInput("clearValue")
  $("#MaskedInput2").jqxMaskedInput("clearValue")
  $("#MaskedInput3").jqxMaskedInput("clearValue")
  $("#MaskedInput4").jqxMaskedInput("clearValue")
  $("#MaskedInput5").jqxMaskedInput("clearValue")
End Function

Function MaskedInput1_onchange()
  MsgBox "new value of Numeric is " & MaskedInput1.value
End Function
