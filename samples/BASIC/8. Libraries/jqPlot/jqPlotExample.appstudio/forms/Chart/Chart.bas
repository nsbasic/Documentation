Dim ChartBobsStuff(10)
Dim ChartGracesStuff(10)
Dim ChartPercentage(10)
Dim ChartXaxis(10)

Dim Line1, Line2, Line3, plot1, options



'*************************************************************************************************************
Sub Main()

'Following is the code for setting all of the options for this jqPlot sample.  Since for this example I only
'need to run this code once (at start up) I pulled it out of the onshow code below so it wouldn't run every time 
'the form is accessed.  It basically sets all of the options for the plot.

  options={}


'Set the height of the plot
  options.height=380

'  options.title="jqPlot Sample"  'Doesn't work nicely if you place a legend above the plot (can't figure out how to place it better)

'This sets which axis will be used.  For this sample there will be a secondary Y axis
  options.axes={yaxis:{},y2axis:{},xaxis:{}}

'Specific options for the primary Y axis (left hand side Y axis):
'the CanvisAxisLabelRenderer with angle:270 commands rotates the axis label text so that it's along the axis 
'instead of at 90 degrees. The minimum is set to 0 instead of letting jqPlot choose,
'the maximum is set to 500, a tick interval is provided and finally a label is provided for the axis
  options.axes.yaxis.labelRenderer=$.jqplot.CanvasAxisLabelRenderer;
  options.axes.yaxis.labelOptions ={angle: 270}
  options.axes.yaxis.min=0
  options.axes.yaxis.max=500
  options.axes.yaxis.tickInterval=100
  options.axes.yaxis.label="Lots of Stuff"


'Specific options for the secondary Y axis (right hand side axis)
'the CanvisAxisLabelRenderer with angle:270 commands rotates the axis label text so that it's along the axis 
'instead of at 90 degrees. The minimum is set to 0 instead of letting jqPlot choose,
'the maximum is set to 100, a tick interval is provided and finally a label is provided for the axis
  
  options.axes.y2axis.labelRenderer=$.jqplot.CanvasAxisLabelRenderer;
  options.axes.y2axis.labelOptions ={angle: 270}
  options.axes.y2axis.min=0
  options.axes.y2axis.max=100
  options.axes.y2axis.tickInterval=10
  options.axes.y2axis.label="% of More Stuff"


'Since I'm not rotating the label for the x axis for this sample I don't need CanvisAxisLabelRenderer
'So, all I'm providing is the minimum, maximum, tick interval and label 
  options.axes.xaxis.min=0
  options.axes.xaxis.max=100
  options.axes.xaxis.tickInterval=10
  options.axes.xaxis.label="Graph 'o Stuff"

'I haven't messed around with this one but it's required for the secondary Y axis
  options.series=[{lineWidth:4}, {yaxis:"y2axis"}]

'Set the colors you want for each line (in order of Line 1, Line 2, Line 3, where Line 2 is using the secondary Y axis)
  options.seriesColors =["#000000","#00FF00","#FF0000"]
  
'SHOW a legend, place it OUTSIDE the plot area, locate it NORTH (at the top), using the EnhancedLegendRenderer
'and then set the rendererOptions so the legend items all appear on one row.
  options.legend={show:True, placement:"outside", location:"n", renderer:$.jqplot.EnhancedLegendRenderer, rendererOptions:{numberRows:1}}

'Set the names for each of the curves in the Legend
  options.legend.labels=["Bob's Stuff","Percent","Grace's Stuff"]

'Use jqPlot's highlighter option, where you get the x and y coordinates when mousing over the data markers.  Works great in Chrome, not so great on iOS
  options.highlighter={show:True,formatString:"X: %s Y: %d",tooltipAxes:"both",showLabel:True,useAxesFormatters:True}


End Sub



'*************************************************************************************************************
Function Chart_onshow()

'Just a bunch of nonsense to demo the plot
For i=0 To 10
ChartBobsStuff[i]=i*25
ChartGracesStuff[i]=i*40
ChartPercentage[i]=i*10
ChartXaxis[i]=i*10
Next
  
  Line1=[[ChartXaxis[0],ChartBobsStuff[0]],[ChartXaxis[1],ChartBobsStuff[1]],[ChartXaxis[2],ChartBobsStuff[2]],[ChartXaxis[3],ChartBobsStuff[3]],[ChartXaxis[4],ChartBobsStuff[4]],[ChartXaxis[5],ChartBobsStuff[5]],[ChartXaxis[6],ChartBobsStuff[6]],[ChartXaxis[7],ChartBobsStuff[7]],[ChartXaxis[8],ChartBobsStuff[8]],[ChartXaxis[9],ChartBobsStuff[9]],[ChartXaxis[10],ChartBobsStuff[10]]]
  Line2=[[ChartXaxis[0],ChartPercentage[0]],[ChartXaxis[1],ChartPercentage[1]],[ChartXaxis[2],ChartPercentage[2]],[ChartXaxis[3],ChartPercentage[3]],[ChartXaxis[4],ChartPercentage[4]],[ChartXaxis[5],ChartPercentage[5]],[ChartXaxis[6],ChartPercentage[6]],[ChartXaxis[7],ChartPercentage[7]],[ChartXaxis[8],ChartPercentage[8]],[ChartXaxis[9],ChartPercentage[9]],[ChartXaxis[10],ChartPercentage[10]]]
  Line3=[[ChartXaxis[0],ChartGracesStuff[0]],[ChartXaxis[1],ChartGracesStuff[1]],[ChartXaxis[2],ChartGracesStuff[2]],[ChartXaxis[3],ChartGracesStuff[3]],[ChartXaxis[4],ChartGracesStuff[4]],[ChartXaxis[5],ChartGracesStuff[5]],[ChartXaxis[6],ChartGracesStuff[6]],[ChartXaxis[7],ChartGracesStuff[7]],[ChartXaxis[8],ChartGracesStuff[8]],[ChartXaxis[9],ChartGracesStuff[9]],[ChartXaxis[10],ChartGracesStuff[10]]]


  plot1 = $.jqplot("Chart1",[Line1,Line2,Line3],options)  
    
End Function

'*************************************************************************************************************


Function HeaderBar2_onclick(choice)
'If your data is coming from another form then destroy the plot when leaving the form so it will be refreshed after returning.

If TypeName(choice)="object" Then Exit Function  
 
If choice="home" Then

   plot1.destroy() 
   Chart.style.display="none"
   ChangeForm(Form1)  

End If

End Function



  


JavaScript
  HeaderBar2_btnLeft.onclick = function() {HeaderBar2.onclick("home")}
End JavaScript
