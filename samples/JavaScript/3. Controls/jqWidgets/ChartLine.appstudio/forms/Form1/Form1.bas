Dim sampleData, row

Function Button1_onclick()
  'Render the chart.  
  $("#Chart1").jqxChart(NSB.jqxSettings["Chart1"])
End Function

Function Form1_onshow()
  sampleData = []
  For i=0 To 0
    sampleData = [_
    {rpm:"2000", hp:20}, _
    {rpm:"2500", hp:28}, _
    {rpm:"3000", hp:45}, _
    {rpm:"3500", hp:67}, _
    {rpm:"4000", hp:83}, _
    ] 
  Next
  
  NSB.jqxSettings["Chart2"].source = sampleData
  NSB.jqxSettings["Chart2"].categoryAxis={dataField:"id", showGridLines:True}
  NSB.jqxSettings["Chart2"].seriesGroups = [ _
    { _
      type: "spline", _
      columnsGapPercent: 30, _
      seriesGapPercent: 40, _
      xAxis: {dataField: "rpm"}, _
      valueAxis: { _
        minValue: 0, _
        maxValue: 122+20, _
        unitInterval: 10, _
        description: "Horspower & Torque" _
      }, _
      series:[ _
        { dataField: "hp", displayTest:"HP"}, _
        { dataField: "2000", displayText: "2000"}, _
        { dataField: "2500", displayText: "2500"}, _
        { dataField: "3000", displayText: "3000"}, _
        { dataField: "3500", displayText: "3500"}, _
        { dataField: "4000", displayText: "4000"} _
      ] _
    } _
  ]
  $("#Chart2").jqxChart(NSB.jqxSettings["Chart2"])
  
End Function
