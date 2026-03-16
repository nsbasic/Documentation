function Main() {
 var line1,plot1,options;

  line1=[[3,1,4,9,5,2,6,5,3,5,8,9,7,9,3]];
  options={};
  options.title="Digits of Pi";
  options.axes={xaxis: {renderer:$.jqplot.DateAxisRenderer}};
  options.series=[{lineWidth:4, markerOptions:{Style:"square"}}];
  plot1 = $.jqplot("chart1" , line1, options);

}