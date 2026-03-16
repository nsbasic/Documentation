Sub Main()
  $("#DropDownList2").jqxDropDownList("selectItem", "two")
End Sub

Function DropDownList2_onselect(event)
  NSB.MsgBox event.args.item.index + " " + event.args.item.value
End Function
