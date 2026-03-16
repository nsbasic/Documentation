 //Create Grid with some buttons

 //Start by generated a grid with 5 rows.
var data,source,dataAdapter;

function Main() {
  data = generatedata(4); //generatedata is a function which returns grid data
  source = {localdata: data, datatype: "array"};
  dataAdapter = new $.jqx.dataAdapter(source);

  NSB.jqxSettings["Grid1"].source = dataAdapter;
NSB.jqxSettings["Grid1"].columns = [
    { text: "Name", dataField: "Name", width: "auto" }, 
    { text: "", dataField: "B1", width: 45, columntype: "button", 
      cellsrenderer: function () {return "Stop"}, 
      buttonclick: function (row) {gridButton("Stop", row)}
    },
    { text: "", dataField: "B2", width: 60, columntype: "button", 
      cellsrenderer: function () {return "Reboot"}, 
      buttonclick: function (row) {gridButton("Reboot", row)}
    },
    { text: "", dataField: "B3", width: 55, columntype: "button", 
      cellsrenderer: function () {return "HupAll"}, 
      buttonclick: function (row) {gridButton("HupAll", row)}
    },
    { text: "", dataField: "B5", width: 80, columntype: "button", 
      cellsrenderer: function () {return "ClearCalls"}, 
      buttonclick: function (row) {gridButton("ClearCalls", row)}
    }
  ]
//instantiate the grid
  $("#Grid1").jqxGrid(NSB.jqxSettings["Grid1"]);
}

function generatedata(n) { var returnValue="";
  data=[];
  for     (i=(0); i <= n; i++) {
    data[i]={Name: "This is row "  +  i}; //, _
  }
   returnValue  = data;
return returnValue; }

 //This function gets called when a button is pushed.
function gridButton(button, row) {
  NSB.MsgBox("Button Pressed: "  +  button  +  " "  +  row);
}
