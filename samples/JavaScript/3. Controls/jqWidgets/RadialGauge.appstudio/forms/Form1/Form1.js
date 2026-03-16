 // Radial Gauge with its value set from a slider control
var temp;

function Main() {
  $("#RadialGauge1").jqxGauge("max" , 100);
 // "max" sets the maxium value of the gauge or full scale deflection
  $("#RadialGauge1").jqxGauge("value" , 50);
 // "value" is the new pointer value for the gauge
}

 // the slider value is assigned to the new gauge value
Slider1_input.onslide = function() {
  temp = Slider1.getValue();
  $("#RadialGauge1").jqxGauge("value" , temp);
};Slider1_input.onslide =Slider1_input.onslide;
