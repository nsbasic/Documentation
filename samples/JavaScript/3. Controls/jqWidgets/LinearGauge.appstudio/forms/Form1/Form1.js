 // Linear Gauge with its value set from a slider control
var temp;

function Main() {
  $("#LinearGauge1").jqxLinearGauge("min" , 0);
  $("#LinearGauge1").jqxLinearGauge("max" , 100);
 // "max" sets the maxium value of the gauge or full scale deflection
  $("#LinearGauge1").jqxLinearGauge("value" , 50);
 // "value" is the new jqxLinearGauge value for the gauge
}

 // the slider value is assigned to the new gauge value
Slider1_input.onslide = function() {
  temp = Slider1.getValue();
  $("#LinearGauge1").jqxLinearGauge("value" , temp);
};
