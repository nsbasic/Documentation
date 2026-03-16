 //This app deploys the well known Northwind test database. 
 //The database is automatically deployed with the app and is usable right away.
 //The app dynamically displays all columns and all rows.

var DB; //The database
var columns=createMultiDimArray('');
var data;

function loadGrid(e) {
  console.log("loadGrid called: "  +  e);
  NSB.ShowProgress("Loading grid with customers...");
  DB=SqlOpenDatabase("Northwind.db");

 //These two SQLite calls get the layout of the customer database and the data itself.
  s=[];
  s[0] =["Select Sql FROM sqlite_master WHERE tbl_name = 'Customers'" , columnHandler];
  s[1] =["Select * from Customers ORDER BY CustomerID;" , dataHandler];
  Sql(DB,s);
}

function columnHandler(transaction, result) {
 //Parse the returned string into an array of column names.
 var list,s;
  console.log("columnHandler");
  list = result.rows.item(0)["sql"];
  list = Mid(list, InStr(list,"(")+1);
  list=Split(list,",");
  columns = [];
  for     (i=(0); i <= UBound(list); i++) {
    s=Split(Trim(list[i] ), " ");
    s=s[0];
    if(Left(s,1)=="[" ) { s=Mid(s,2,Len(s)-2); }
    if(Left(s,1)=="'" ) { s=Mid(s,2,Len(s)-2); }
    columns[i] = s;
  }
}

function dataHandler(transaction, result) {
 //Load the data into rows of the table
 var row=createMultiDimArray(''),i,j,record,columnName;
  console.log("dataHandler called");
  data=[];

  for     (i = (0); i  <= result.rows.length-1; i ++) {
    record = result.rows.item(i);
    row = {};
    for      (j = (0); j  <= UBound(columns); j ++) {
      columnName = columns[j];
      row[columnName] = record[columnName];
    }
  data[i]=row;
  }

  displayData();
}

function displayData() {
 //Display the grid.
 var source,dataAdaptor;
  source = {localdata: data, datatype: "array"};
  dataAdaptor = new $.jqx.dataAdapter(source);
  NSB.jqxSettings["Grid1"].source = dataAdaptor;

 //Define the columns
  NSB.jqxSettings["Grid1"].columns = [];
  for     (i = (0); i  <= UBound(columns); i ++) {
    NSB.jqxSettings["Grid1"].columns[i] = {text: columns[i], dataField: columns[i] , width: "100px"};
  }

 //Now, display the Grid.
  $("#Grid1").jqxGrid(NSB.jqxSettings["Grid1"]);
  NSB.ShowProgress(false);
}


