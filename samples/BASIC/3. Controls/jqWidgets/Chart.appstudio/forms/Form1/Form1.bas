Dim sampleData, row


Function Button1_onclick()
  'Render the chart.
  If typeof(NSB.jqxSettings["Chart1"].source) = "undefined" Then initGrid()
  $("#Chart1").jqxChart(NSB.jqxSettings["Chart1"])
End Function

Function initGrid()
  sampleData = []
  For i=0 To 6
    row=[]
    row["id"] = "Preise"
    row["Preis1"] = 25
    row["Preis2"] = 30
    row["Preis3"] = 35
    sampleData[i]= row
  Next
  
  NSB.jqxSettings["Chart1"].source = sampleData
  NSB.jqxSettings["Chart1"].categoryAxis={dataField:"id", showGridLines:True}
  NSB.jqxSettings["Chart1"].seriesGroups = [ _
    { _
    type: "column", _
    columnsGapPercent: 30, _
    seriesGapPercent: 0, _
          valueAxis: _
          { _
          minValue: 0, _
          maxValue: 50, _
          unitInterval: 10, _
          description: "Preise in Euro(€)" _
          }, _
            series:[ _
                    { dataField: "Preis1", displayText: "Preis1"}, _
                    { dataField: "Preis2", displayText: "Preis2"}, _
                    { dataField: "Preis3", displayText: "Preis3"} _
                    ] _
    } _
    ]
    
End Function
