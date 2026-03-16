var sampleData,row;

Button1.onclick = function() {
 //Render the chart.  
  $("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
};

Form1.onshow = function() {
  sampleData = [];
  for     (i=(0); i <= 0; i++) {
    sampleData = [ {rpm:"2000" , hp:20},  {rpm:"2500" , hp:28},  {rpm:"3000" , hp:45},  {rpm:"3500" , hp:67},  {rpm:"4000" , hp:83},  ];
  }

  NSB.jqxSettings["Chart2"].source = sampleData;
  NSB.jqxSettings["Chart2"].categoryAxis={dataField:"id" , showGridLines:true};
  NSB.jqxSettings["Chart2"].seriesGroups = [  {  type: "spline" ,  columnsGapPercent: 30,  seriesGapPercent: 40,  xAxis: {dataField: "rpm"},  valueAxis: {  minValue: 0,  maxValue: 122+20,  unitInterval: 10,  description: "Horspower & Torque"  },  series:[  { dataField: "hp" , displayTest:"HP"},  { dataField: "2000" , displayText: "2000"},  { dataField: "2500" , displayText: "2500"},  { dataField: "3000" , displayText: "3000"},  { dataField: "3500" , displayText: "3500"},  { dataField: "4000" , displayText: "4000"}  ]  }  ];
  $("#Chart2").jqxChart(NSB.jqxSettings["Chart2"]);

};
