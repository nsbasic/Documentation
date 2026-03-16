 //This app deploys the well known Northwind test database. 
 //The database is automatically deployed with the app and is usable right away.
//Option Explicit;
var DB; //The database
var DBRecords; //The current set of selected records
var DB_Tables; //dataHandler_db  Tabellen-Namen Name1;Name2;..
var DB_Fields; //dataHandler_db  Tabellen-Namen Feld1,Feld2,..;Feld1,Feld2..;..
var DB_TabFields; //dataHandler_db  Tabellen-Namen+Fileds TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
var DB_Columns=createMultiDimArray('4'); //Column data
var DB_TabIndex; //Tabellenindex
var DB_Tables_no_autoresize="Suppliers,Products=10,Orders=9,Employees=9,Customers=3,PreviousEmployees=10,"; //Tabellen, bei der keine Automatischen Spaltenberechnungen erfolgen soll
var DB_Tables_no_Fields="Region,Fax,HomePage,ShippedDate,CustomerID,"; //Felder ohne resize 
var DB_top=35; //Top start
var DB_xo=5; //Gridabstand
var DB_xh=102; //Gridhöhe
var DB_xw=550; //Gridbreite  
var DB_rh=15; //Zeilenhöhe  
var DB_scrollbarsize=10; //Scrollbar höhe/Breite  
var DB_Gridn=12; //Anzahl Grids  
var DB_Theme="ui-redmond"; //Gestaltung  
 //Dim DB_Theme="ui-start" 'Gestaltung  
 //Dim DB_Theme="ui-lightness" 'Gestaltung  
 //Dim DB_Theme="classic" 'Gestaltung  


 //--------------------------------------------------
function Main() {
 //--------------------------------------------------
var xi,xo,xh,xGrid;
Grid1_settings = NSB.jqxSettings["Grid1"];
Grid2_settings = NSB.jqxSettings["Grid2"];
Grid3_settings = NSB.jqxSettings["Grid3"];
Grid4_settings = NSB.jqxSettings["Grid4"];
Grid5_settings = NSB.jqxSettings["Grid5"];
Grid6_settings = NSB.jqxSettings["Grid6"];
Grid7_settings = NSB.jqxSettings["Grid7"];
Grid8_settings = NSB.jqxSettings["Grid8"];
Grid9_settings = NSB.jqxSettings["Grid9"];
Grid10_settings = NSB.jqxSettings["Grid10"];
Grid11_settings = NSB.jqxSettings["Grid11"];
Grid12_settings = NSB.jqxSettings["Grid12"];
GridV_settings = NSB.jqxSettings["GridV"];
var data, source, dataAdapter
data = generatedata(50);
source = {localdata: data, datatype: "array"};
dataAdapter = new $.jqx.dataAdapter(source);
              
GridV_settings.source = dataAdapter;
GridV_settings.columns = [ 
    { text: "First Name", dataField: "firstname", width: 100 }, 
    { text: "Last Name", dataField: "lastname", width: 100 }, 
    { text: "Product", dataField: "productname", width: 180 }, 
    { text: "Quantity", dataField: "quantity", width: 80, cellsalign: "right" }, 
    { text: "Unit Price", dataField: "price", width: 90, cellsalign: "right", cellsformat: "c2" }, 
    { text: "Total", dataField: "total", cellsalign: "right", minwidth: 100, cellsformat: "c2" } 
  ]
//  SetGridProperty("#Grid1","theme",DB_Theme)         
 //Render Grids 1-5 from Northwind.
  DB=SqlOpenDatabase("Northwind.db");
 // s=Array(["PRAGMA tableinfo('Customers');", dataHandler_info]) 
 // Sql(DB,s)
  s= new Array(["SELECT name,sql FROM sqlite_master WHERE type='table';" , dataHandler_db]);
  Sql(DB,s);

 //Render Grid 6 from generated data
  $("#GridV").jqxGrid(GridV_settings);
}


 //--------------------------------------------------
function dataHandler_db(transaction, result) {
 //--------------------------------------------------
var Fields,xVar,xStr,xi;
  DBRecords=result;
  Fields="";
 //  MsgBox DBrecords.rows.length + Chr(13)+ DB_index
  if(DBRecords.rows.length<3 )  { return; }
  xi=2;
  for     (xi=(2); xi <= DBRecords.rows.length-1; xi++) {
 //Fields=DBRecords.rows.item(xi)["sql"]  
      xStr=DBRecords.rows.item(xi)["name"]+","+SQLite_Fields(DBRecords.rows.item(xi)["sql"]);
      xStr=SQLite_FieldCheck(xStr);
      Fields=Fields + xStr + ";";
 // MsgBox xStr
 // AnzVar(xStr,",") 
  }
 // Exit Sub
 //  For xi=2 To DBRecords.rows.length-1
 //      Fields=Fields + SQL_Fields(DBRecords.rows.item(xi)["sql"]) +";"
 //  Next
  Fields=Left(Fields,Len(Fields)-1);
  DB_TabFields=Fields; //dataHandler_db  Tabellen-Namen+Fileds TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
  DB_Tables=FDB_Tables(DB_TabFields); //dataHandler_db  Tabellen-Namen Name1;Name2;..
  DB_Fields=FDB_Fields(DB_TabFields); //dataHandler_db  Tabellen-Namen Feld1,Feld2,..;Feld1,Feld2..;..
  DemoLoadGrids(); //Mehrere Grids mit daten füllen
}
 //--------------------------------------------------
function DemoLoadGrids() { //Mehrere Grids mit Datenbank-Daten füllen
 //--------------------------------------------------
 // Diese Routine soll aus Northwind.db die ersten 5 Tabellen in Grid1 - Grid5 laden 
 // Die Spaltenbreite soll automatisch erzeugt werden
 // Code-Beispiele für:
 //  - record=DBrecords.rows.item(i)
 //  - Grid1.setValue(i+1,0,record["xy"])
 //  - MsgBox Grid1.getValue(i+1,0)
 //  - Grid1.Property=...
 //
var xVar,xTab,xFields,xi,xColumns,nCol,xTabelle;
var dataHandler,dataH,xn;
//On Error Resume Next;
xVar=Split(DB_Fields,";");
xTab=Split(DB_Tables,";");
xTabelle="";
xn=UBound(xTab)-1;
if(xn>DB_Gridn-1 ) { xn=DB_Gridn-1; }
for     (xi=(0); xi <= xn; xi++) { //Tabelle 1-5 in Grid 1-5 laden
    dataH="dataHandler_dd"  +  (xi+1);
    xLast="";
    if(xi==xn ) { xLast="SetGrid(table)"; }
    xTabelle=xTabelle  +  Add_dataHandler(dataH,xi,xLast)  +  '\n';
}
 //Execute xTabelle   Prüfung warum execute nicht funktioniert
 //MsgBox "Execute does not work ????" & vbCRLF& vbCRLF & xTabelle

for     (xi=(0); xi <= xn; xi++) { //Tabelle 1-5 in Grid 1-5 laden
    xTabelle=xTab[xi]; //Tabellen-Name 
    console.log(xi  +  " "  +  xTabelle);
    xFields=Split(xVar[xi] ,","); //Felder der Tabelle
 //MsgBox xTabelle & vbCRLF & Join(xFields,vbCRLF)

 //Set up the column headings
    DB_Columns[xi] =FGrid_Columns(xVar[xi] ,xTabelle,nCol); //aufbereiteter Stringfür Columns

 //Do a SELECT to get the data for each table. Return results to a data handler for each table.
    dataH="dataHandler_"  +  (xi+1);
    dataHandler=eval(dataH);
    s= new Array(["SELECT * FROM "  +  xTabelle  +  ";" , dataHandler]);
    Sql(DB,s);
}
}

function dataHandler_1(transaction, result) {
 var table=0;
  Grid1_settings.source = convertDBdata(table,result);
  Grid1_settings.columns = DB_Columns[table];
  $("#Grid1").jqxGrid(Grid1_settings);
  SetGrid(table);
}

function dataHandler_2(transaction, result) {
 var table=1;
  Grid2_settings.source = convertDBdata(table,result);
  Grid2_settings.columns = DB_Columns[table];
  $("#Grid2").jqxGrid(Grid2_settings);
  SetGrid(table);
}

function dataHandler_3(transaction, result) {
 var table=2;
  Grid3_settings.source = convertDBdata(table,result);
  Grid3_settings.columns = DB_Columns[table];
  $("#Grid3").jqxGrid(Grid3_settings);
  SetGrid(table);
}

function dataHandler_4(transaction, result) {
 var table=3;
  Grid4_settings.source = convertDBdata(table,result);
  Grid4_settings.columns = DB_Columns[table];
  $("#Grid4").jqxGrid(Grid4_settings);
  SetGrid(table);
}

function dataHandler_5(transaction, result) {
 var table=4;
  Grid5_settings.source = convertDBdata(table,result);
  Grid5_settings.columns = DB_Columns[table];
  $("#Grid5").jqxGrid(Grid5_settings);
  SetGrid(table); //Properties nach dem Daten laden setzen
}
function dataHandler_6(transaction, result) {
 var table=5;
  Grid6_settings.source = convertDBdata(table,result);
  Grid6_settings.columns = DB_Columns[table];
  $("#Grid6").jqxGrid(Grid6_settings);
  SetGrid(table);
}
function dataHandler_7(transaction, result) {
 var table=6;
  Grid7_settings.source = convertDBdata(table,result);
  Grid7_settings.columns = DB_Columns[table];
  $("#Grid7").jqxGrid(Grid7_settings);
  SetGrid(table);
}
function dataHandler_8(transaction, result) {
 var table=7;
  Grid8_settings.source = convertDBdata(table,result);
  Grid8_settings.columns = DB_Columns[table];
  $("#Grid8").jqxGrid(Grid8_settings);
  SetGrid(table);
}
function dataHandler_9(transaction, result) {
 var table=8;
  Grid9_settings.source = convertDBdata(table,result);
  Grid9_settings.columns = DB_Columns[table];
  $("#Grid9").jqxGrid(Grid9_settings);
  SetGrid(table);
}
function dataHandler_10(transaction, result) {
 var table=9;
  Grid10_settings.source = convertDBdata(table,result);
  Grid10_settings.columns = DB_Columns[table];
  $("#Grid10").jqxGrid(Grid10_settings);
  SetGrid(table);
}
function dataHandler_11(transaction, result) {
 var table=10;
  Grid11_settings.source = convertDBdata(table,result);
  Grid11_settings.columns = DB_Columns[table];
  $("#Grid11").jqxGrid(Grid11_settings);
  SetGrid(table);
}
function dataHandler_12(transaction, result) {
 var table=11;
  Grid12_settings.source = convertDBdata(table,result);
  Grid12_settings.columns = DB_Columns[table];
  $("#Grid12").jqxGrid(Grid12_settings);
  SetGrid(table); //Properties nach dem Daten laden setzen
}

function convertDBdata(table,DBRecords) { var returnValue="";
 var data,row,j,i;
  data=[];
  for     (j=(0); j <= DBRecords.rows.length-1; j++) {
    row={};
    for     (i=(0); i <= UBound(DB_Columns[table] ); i++) {
        row[DB_Columns[table][i].dataField] = DBRecords.rows.item(j)[DB_Columns[table][i].dataField];
    }
    data[j]=row;
  }
   returnValue  = new $.jqx.dataAdapter({localdata: data, datatype: "array"});
return returnValue; }

 //--------------------------------------------------
function FGrid_Columns(TabFields,xTabelle,nCol) { var returnValue=""; //Spaltendefinition + Anzahl Spalten
 //--------------------------------------------------
var xVar,xi,xStr,xCol,nWidth,xStr1,xIndTab;
 returnValue ="[";
xVar=Split(TabFields,",");
xIndTab=nCol;
nCol=UBound(xVar)+1;
nWidth=856/nCol;
for     (xi=(0); xi <= nCol-1; xi++) {
    xStr=xVar[xi];
    if(xi==0) {
       xStr1=xTabelle;
 } else {
       xStr1="T-"+xStr; //LCase(xStr)
    }
    xCol="{ text: "+Chr(34)+xStr1+Chr(34)+", dataField: "+Chr(34)+xStr+Chr(34)+", width: "+nWidth+" },";
     returnValue = returnValue +xCol;
}
xStr=Left( returnValue ,Len( returnValue )-1)+"]";
 returnValue =eval(xStr);
return returnValue; }

 //--------------------------------------------------
function FDB_Tables(TabFields) { var returnValue=""; //aus Tabellen-Namen+Fields TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
 //--------------------------------------------------
var xVar,xi;
 returnValue ="";
if(TabFields=="" )  { return returnValue; }
xVar=Split(TabFields,";");
 returnValue =FStrKenD(xVar[0] ,",");
if(UBound(xVar)<1 )  { return returnValue; }
for     (xi=(1); xi <= UBound(xVar); xi++) {
     returnValue = returnValue +";"+FStrKenD(xVar[xi] ,",");
}
return returnValue; }

 //--------------------------------------------------
function FDB_Fields(TabFields) { var returnValue=""; //aus Tabellen-Namen+Fields TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
 //--------------------------------------------------
var xVar,xi,xp,xStr;
 returnValue ="";
if(TabFields=="" )  { return returnValue; }
xVar=Split(TabFields,";");
for     (xi=(0); xi <= UBound(xVar); xi++) {
    xStr=xVar[xi];
    xp=InStr(xStr,",");
    if(xp>0 ) { returnValue = returnValue +Right(xStr,Len(xStr)-xp)+";"; }
}
if(returnValue >"" ) { returnValue =Left( returnValue ,Len( returnValue )-1); }
return returnValue; }


function FStrKenD(xStr,xZ) { var returnValue="";
var xF;
 returnValue ="";
xF=InStr(xStr,xZ);
if(xF>0) {
   if(xF>1 ) { returnValue =Left(xStr,xF-1); }
 } else {
    returnValue =xStr;
}
return returnValue; }


function gridReady(s) {
 //MsgBox "Grid load complete"
}
function generatedata(rowscount, hasNullValues) {
    // prepare the data
    var data = new Array();
    if (rowscount == undefined) rowscount = 100;
    var firstNames =
    [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
    ];

    var lastNames =
    [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
    ];

    var productNames =
    [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
    ];

    var priceValues =
    [
         "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];

    for (var i = 0; i < rowscount; i++) {
        var row = {};
        var productindex = Math.floor(Math.random() * productNames.length);
        var price = parseFloat(priceValues[productindex]);
        var quantity = 1 + Math.round(Math.random() * 10);

        row["id"] = i;
        row["available"] = productindex % 2 == 0;
        if (hasNullValues == true) {
            if (productindex % 2 != 0) {
                var random = Math.floor(Math.random() * rowscount);
                row["available"] = i % random == 0 ? null : false;
            }
        }
        row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["name"] = row["firstname"] + " " + row["lastname"]; 
        row["productname"] = productNames[productindex];
        row["price"] = price;
        row["quantity"] = quantity;
        row["total"] = price * quantity;

        var date = new Date();
        date.setFullYear(2012, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
        date.setHours(0, 0, 0, 0);
        row["date"] = date;
       
        data[i] = row;
    }
 
    return data;
}
//--------------------------------------------------
function SQLite_FieldCheck(xFields) { var returnValue="";
 //--------------------------------------------------
var xName,xi,xVar,xStr;
xVar=Split(xFields,",");
xStr=xVar[0];
for     (xi=(1); xi <= UBound(xVar); xi++) {
    xName=xVar[xi];
   if(xName>" ") {
      if(InStr(xStr,xName)==0 ) { xStr=xStr+","+xName; }
   }
}
 returnValue =xStr;
return returnValue; }

 //--------------------------------------------------
function SQLite_Fields(xFields) { var returnValue="";
 //--------------------------------------------------
var xName,xi,xVar,xStr;
xStr="";
xVar=Split(xFields,"(");
 //MsgBox UBound(xVar) &vbCRLF& Join(xVar,vbCRLF)
for     (xi=(1); xi <= UBound(xVar); xi++) {
 //    MsgBox "1> " &UBound(xVar) &vbCRLF& xi & " ( " & vbCRLF & xVar(xi)
    xName=SQLite_Field(xVar[xi] );
   if(xName>" ") {
      if(InStr(xStr,xName)==0 ) { xStr=xStr+xName+","; }
   }
}
 //If xStr>" " Then xStr=Left(xStr,Len(xStr)-1)
 //MsgBox xStr
 returnValue =xStr;
return returnValue; }
 //--------------------------------------------------
function SQLite_Field(xField) { var returnValue="";
 //--------------------------------------------------
var xName,xi,xVar,xStr;
xStr="";
xVar=Split(xField,",");
for     (xi=(0); xi <= UBound(xVar); xi++) {
 //     MsgBox "2> " &UBound(xVar) &vbCRLF& xi & " , " & vbCRLF & xVar(xi)
    xName=Trim(xVar[xi] );
    if(Left(xName,1)=="[") {
       xName=FStrKenD(xName,"]");
 //MsgBox xName
       xStr=xStr+Right(xName,Len(xName)-1)+",";
    }
}
 //If xStr>" " Then xStr=Left(xStr,Len(xStr)-1)
 //MsgBox "> " & xStr
 returnValue =xStr;
return returnValue; }


btnUpdate.onclick = function() {
 var nQty;
  nQty=$("#GridV").jqxGrid("getcellvalue" ,0,"quantity");
  nQty=nQty+1;
  $("#GridV").jqxGrid("setcellvalue" ,0,"quantity" ,nQty);
  debugger;
};

btnHide.onclick = function() {
  $("#GridV").jqxGrid("hidecolumn" ,"quantity");
};

btnShow.onclick = function() {
  $("#GridV").jqxGrid("showcolumn" ,"quantity");
};

btnResize.onclick = function() {
var xi,xName,xTables,xTabelle;
xTables=Split(DB_Tables,";");
for     (xi=(1); xi <= DB_Gridn; xi++) {
    xName="#Grid"  +  xi;
    xTabelle=xTables[xi-1];
    if(InStr(DB_Tables_no_autoresize,xTabelle)==0 ) { $(xName).jqxGrid("autoresizecolumns"); }
}
};


btnSizeCols.onclick = function() {
ResizeGridFeldTest();
 //ResizeGrid2
};

function SetGridStart() { //Properties bei Programm-Start setzen
var xi,xo,xl,xGrid;
xo=DB_top;
xl=0;
for     (xi=(1); xi <= DB_Gridn; xi++) {
    xGrid=eval("Grid"  +  xi);
    xGrid.top=xo;
    xGrid.left=xl;
 // xGrid.rowsheight=DB_rh                             
    xo=xo+DB_xh+DB_xo;
    if(xi==6) {
       xo=DB_top;
       xl=DB_xw+DB_xo;
    }
}
}

function SetGrid(xInd) { //Grid-Properties nach Daten laden setzen
var xi,xo,xl,xh,xw,xName,xTab,xTabName;
if(xInd>-1 && xInd<DB_Gridn-1 )  { return; } //Properties nach dem letzten Tabelle laden setzen
xo=DB_top;
xl=0;
xTab=Split(DB_Tables,";");

for     (xi=(1); xi <= DB_Gridn; xi++) {
    xName="#Grid"  +  xi;
    xTabName=xTab[xi-1];
    SetGridProp(xName,xTabName,xo,xl); //Properties nach dem Daten laden setzen
    xo=xo+DB_xh+DB_xo;
    if(xi==6) {
       xo=DB_top;
       xl=DB_xw+DB_xo;
    }
}
xName="#GridV";
$(xName).jqxGrid("autoresizecolumns");
 //SetGridProperty(xName,"height",0)         
ResizeGrid2(); //Columns Resize   why sometimes Error in "autoresizecolumns" 

}

function SetGridProp(xName,xTabelle,xo,xl) { //Properties nach dem Daten laden setzen
var xGrid;
    xGrid=eval(Right(xName,Len(xName)-1));
    xGrid.top=xo; //ok   Ersatz für SetGridProperty(xName,"top",xo)                  
    xGrid.left=xl; //ok   Ersatz für SetGridProperty(xName,"top",xo)         
 //xGrid.rowsheight=DB_rh                         'do not work     
 //xGrid.altrows="false"                          'do not work       
 //SetGridProperty(xName,"top",xo)                'do not work          
 //SetGridProperty(xName,"left",xl)               'do not work    
 //SetGridProperty(xName,"columnsresize","true")  'do not work ?            
 //SetGridProperty(xName,"altrows","false")       'do not work ?            
    SetGridProperty(xName,"width" ,DB_xw);
    SetGridProperty(xName,"height" ,DB_xh);
    SetGridProperty(xName,"rowsheight" ,DB_rh);
    SetGridProperty(xName,"columnsheight" ,DB_rh);
    SetGridProperty(xName,"scrollbarsize" ,DB_scrollbarsize);
    SetGridProperty(xName,"theme" ,DB_Theme);
 // why sometimes Error in "autoresizecolumns" 
    if(InStr(DB_Tables_no_autoresize,xTabelle)==0 ) { $(xName).jqxGrid("autoresizecolumns"); }
 // $(xName).jqxGrid("refresh")
}

function SetGridProperty(GridName,PropName,PropValue) { //not work   
$(GridName).jqxGrid(PropName,PropValue);
}

function ResizeGrid2() {
var xi,xTables;
//On Error Resume Next;
xTables=Split(DB_Tables,";");
 //MsgBox UBound(xTables)&Chr(13)&DB_Tables
for     (xi=(0); xi <= UBound(xTables); xi++) {
  if(InStr(DB_Tables_no_autoresize,xTables[xi] )>0) {
 //   MsgBox ">>" & xi &vbCRLF & xTables(xi) &vbCRLF & DB_Tables_no_autoresize
     ResizeCols(xi,xTables[xi] );
  }
}
}


function ResizeCols(xTab,xTabelle) {
var xGrid,xVar,xFields,xi,xNoFields,xn,xj,xStr;
//On Error Resume Next;
xStr=xTabelle+"=";
xj=InStr(DB_Tables_no_autoresize,xStr);
if(xj>0) {
 //MsgBox xj & Chr(13) & xStr & Chr(13) & DB_Tables_no_autoresize
   xStr=Mid(DB_Tables_no_autoresize,xj+Len(xStr),2);
   xStr=FStrKenD(xStr,",");
   xj=_jsCint(xStr)-1;
}

xVar=Split(DB_Fields,";");
xFields=Split(xVar[xTab] ,","); //Felder der Tabelle
xGrid="#Grid"  +  (xTab+1);
 //MsgBox "autoresizecolumn by " & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "FieldNames: " & xNoFields & vbCRLF& vbCRLF & "Break.. Result Error"
xn=UBound(xFields);
if(xj>0) {
  if(xj<xn ) { xn=xj; }
}
 // MsgBox xTabelle &"/"& xj &"/"& UBound(xFields)&"/"& xTab &"/"& xn
for     (xi=(0); xi <= xn; xi++) {
  if(InStr(DB_Tables_no_Fields,xFields[xi] )==0) {
 //MsgBox xi & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "MaxFelder: " & UBound(xFields) & vbCRLF& vbCRLF & xFields(xi)
 //    console.log(xi & " " & xFields(xi))
    $(xGrid).jqxGrid("autoresizecolumn" ,xFields[xi] );
  }
}
}


function Add_dataHandler(xhandler,Tab_Index,xLast) { var returnValue="";
var dataH,xInd;
xInd=Tab_Index+1;
dataH="Sub "  +  xhandler  +  "(transaction, result)"  +  '\n'  +   "Dim table="  +  Tab_Index  +  '\n'  +   "Grid"  +  xInd  +  "_settings.source = convertDBdata(table,result)"  +  '\n'  +   "Grid"  +  xInd  +  "_settings.columns = DB_Columns[table]"  +  '\n'  +   "$(" + Chr(34) + "#Grid"  +  xInd  +  Chr(34)  +  ").jqxGrid(Grid"  +  xInd  +  "settings);"  +  '\n';
if(xLast>"" ) { dataH=dataH + xLast  +  '\n'; }
dataH=dataH + "End Sub"  +  '\n';
 //MsgBox dataH
 returnValue =dataH;
return returnValue; }

function AnzVar(xString,xTr) { //Strings mit Zeilenumbruch anzeigen
var xVar,xStr;
xVar=Split(xString,xTr);
NSB.MsgBox(Join(xVar,'\n'));
}

function ResizeGridFeldTest() {
var xi,xTables;
//On Error Resume Next;
xTables=Split(DB_Tables,";");
 //MsgBox UBound(xTables)&Chr(13)&DB_Tables
for     (xi=(0); xi <= UBound(xTables); xi++) {
  if(InStr(DB_Tables_no_autoresize,xTables[xi] )>0) {
 //   MsgBox ">>" & xi &vbCRLF & xTables(xi) &vbCRLF & DB_Tables_no_autoresize
     ResizeColsT(xi,xTables[xi] );
  }
}
}


function ResizeColsT(xTab,xTabelle) {
var xGrid,xVar,xFields,xi,xNoFields,xn,xj,xStr;
//On Error Resume Next;

xVar=Split(DB_Fields,";");
xFields=Split(xVar[xTab] ,","); //Felder der Tabelle
xGrid="#Grid"  +  (xTab+1);
 //MsgBox "autoresizecolumn by " & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "FieldNames: " & xNoFields & vbCRLF& vbCRLF & "Break.. Result Error"
xn=UBound(xFields);
 // MsgBox xTabelle &"/"& xj &"/"& UBound(xFields)&"/"& xTab &"/"& xn
for     (xi=(0); xi <= xn; xi++) {
  if(InStr(DB_Tables_no_Fields,xFields[xi] )==0) {
    NSB.MsgBox(xi  +  '\n' +  '\n'  +  "TableName: "  +  xTabelle  +  '\n' +  '\n'  +  "MaxFelder: "  +  UBound(xFields)  +  '\n' +  '\n'  +  xFields[xi] );
    console.log(xi  +  " "  +  xFields[xi] );
    $(xGrid).jqxGrid("autoresizecolumn" ,xFields[xi] );
  }
}
}
