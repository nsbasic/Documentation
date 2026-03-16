' Uses the bootstrap-slider control. See
' https://github.com/seiyria/bootstrap-slider
' for more options.

Function Button1_onclick()
  Slider1.options.tooltip_position = "bottom"
  Slider1.options.value = 15
  Slider1.refresh()
  
  Label1.textContent = Slider1.getValue()
End Function

'notice the nonstandard event name
Function Slider1_input_onslide()
  Label1.textContent = Slider1.getValue()
End Function
