 // Uses the bootstrap-slider control. See
 // https://github.com/seiyria/bootstrap-slider
 // for more options.

Button1.onclick = function() {
  Slider1.options.tooltip_position = "bottom";
  Slider1.options.value = 15;
  Slider1.refresh();

  Label1.textContent = Slider1.getValue();
};

 //notice the nonstandard event name
Slider1_input.onslide = function() {
  Label1.textContent = Slider1.getValue();
};
