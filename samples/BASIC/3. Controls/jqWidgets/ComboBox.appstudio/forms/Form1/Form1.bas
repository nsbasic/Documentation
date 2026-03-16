Sub Main()
  $("#ComboBox2").jqxComboBox("selectItem", "two")
  $("#ComboBox2").jqxComboBox("selectItem", "four")
End Sub

Function ComboBox3_oncheckChange(event)
  MsgBox event.args.value
End Function
