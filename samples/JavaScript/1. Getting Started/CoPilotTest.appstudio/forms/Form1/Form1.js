
Button1.onclick = function() {
  var values = [Input1, Input2, Input3, Input4, Input5];
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += parseFloat(values[i].value) || 0;
  }
  var avg = sum / values.length;
  lblResult.innerHTML = "Average: " + avg.toFixed(2);
};
