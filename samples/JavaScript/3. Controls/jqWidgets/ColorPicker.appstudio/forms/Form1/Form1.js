ColorPicker1.oncolorchange = function() {
  color=$("#ColorPicker1").jqxColorPicker("getColor");
  labChosen.text=RGB(color.r, color.g, color.b);
};

