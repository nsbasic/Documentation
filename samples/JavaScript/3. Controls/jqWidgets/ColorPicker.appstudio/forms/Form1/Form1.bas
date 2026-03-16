Function ColorPicker1_oncolorchange()
  color=$("#ColorPicker1").jqxColorPicker("getColor")
  labChosen.text=RGB(color.r, color.g, color.b)
End Function

