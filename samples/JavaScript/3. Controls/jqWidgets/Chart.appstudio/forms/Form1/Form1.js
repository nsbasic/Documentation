var sampleData, row;

Button1.onclick = function () {
  //Render the chart.
  if (typeof NSB.jqxSettings["Chart1"].source == "undefined") {
    initGrid();
  }
  $("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
};

function initGrid() {
  sampleData = [];
  for (i = 0; i <= 6; i++) {
    row = [];
    row["id"] = "Preise";
    row["Preis1"] = 25;
    row["Preis2"] = 30;
    row["Preis3"] = 35;
    sampleData[i] = row;
  }

  NSB.jqxSettings["Chart1"].source = sampleData;
  NSB.jqxSettings["Chart1"].categoryAxis = {
    dataField: "id",
    showGridLines: true,
  };
  NSB.jqxSettings["Chart1"].seriesGroups = [
    {
      type: "column",
      columnsGapPercent: 30,
      seriesGapPercent: 0,
      valueAxis: {
        minValue: 0,
        maxValue: 50,
        unitInterval: 10,
        description: "Preise in Euro(€)",
      },
      series: [
        { dataField: "Preis1", displayText: "Preis1" },
        { dataField: "Preis2", displayText: "Preis2" },
        { dataField: "Preis3", displayText: "Preis3" },
      ],
    },
  ];
}
