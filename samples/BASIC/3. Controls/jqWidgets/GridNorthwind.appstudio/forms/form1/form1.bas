'This app deploys the well known Northwind test database. 
'The database is automatically deployed with the app and is usable right away.
Option Explicit
Dim DB          'The database
Dim DBRecords   'The current set of selected records
Dim DB_Tables    'dataHandler_db  Tabellen-Namen Name1;Name2;..
Dim DB_Fields    'dataHandler_db  Tabellen-Namen Feld1,Feld2,..;Feld1,Feld2..;..
Dim DB_TabFields 'dataHandler_db  Tabellen-Namen+Fileds TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
Dim DB_Columns(4) 'Column data
Dim DB_TabIndex   'Tabellenindex
Dim DB_Tables_no_autoresize="Suppliers,Products=10,Orders=9,Employees=9,Customers=3,PreviousEmployees=10,"  'Tabellen, bei der keine Automatischen Spaltenberechnungen erfolgen soll
Dim DB_Tables_no_Fields="Region,Fax,HomePage,ShippedDate,CustomerID,"                      'Felder ohne resize 
Dim DB_top=35             'Top start
Dim DB_xo=5               'Gridabstand
Dim DB_xh=102             'Gridhöhe
Dim DB_xw=550             'Gridbreite  
Dim DB_rh=15              'Zeilenhöhe  
Dim DB_scrollbarsize=10   'Scrollbar höhe/Breite  
Dim DB_Gridn=12           'Anzahl Grids  
Dim DB_Theme="ui-redmond" 'Gestaltung  
'Dim DB_Theme="ui-start" 'Gestaltung  
'Dim DB_Theme="ui-lightness" 'Gestaltung  
'Dim DB_Theme="classic" 'Gestaltung  


'--------------------------------------------------
Sub Main()
'--------------------------------------------------
Dim xi,xo,xh,xGrid  
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

JavaScript
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
End JavaScript

 '  SetGridProperty("#Grid1","theme",DB_Theme)         
  'Render Grids 1-5 from Northwind.
  DB=SqlOpenDatabase("Northwind.db")
 ' s=Array(["PRAGMA table_info('Customers');", dataHandler_info]) 
 ' Sql(DB,s)
  s=Array(["SELECT name,sql FROM sqlite_master WHERE type='table';", dataHandler_db]) 
  Sql(DB,s)
  
  'Render Grid 6 from generated data
  $("#GridV").jqxGrid(GridV_settings);
End Sub


'--------------------------------------------------
Sub dataHandler_db(transaction, result)
'--------------------------------------------------
Dim Fields,xVar,xStr,xi
  DBRecords=result
  Fields=""  
'  MsgBox DBrecords.rows.length + Chr(13)+ DB_index
  If DBRecords.rows.length<3 Then Exit Sub
  xi=2
  For xi=2 To DBRecords.rows.length-1
      'Fields=DBRecords.rows.item(xi)["sql"]  
      xStr=DBRecords.rows.item(xi)["name"]+","+SQLite_Fields(DBRecords.rows.item(xi)["sql"])
      xStr=SQLite_FieldCheck(xStr)
      Fields=Fields + xStr + ";"
     ' MsgBox xStr
     ' AnzVar(xStr,",") 
  Next
' Exit Sub
'  For xi=2 To DBRecords.rows.length-1
'      Fields=Fields + SQL_Fields(DBRecords.rows.item(xi)["sql"]) +";"
'  Next
  Fields=Left(Fields,Len(Fields)-1)
  DB_TabFields=Fields 'dataHandler_db  Tabellen-Namen+Fileds TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
  DB_Tables=FDB_Tables(DB_TabFields)    'dataHandler_db  Tabellen-Namen Name1;Name2;..
  DB_Fields=FDB_Fields(DB_TabFields)    'dataHandler_db  Tabellen-Namen Feld1,Feld2,..;Feld1,Feld2..;..
  DemoLoadGrids  'Mehrere Grids mit daten füllen
End Sub
'--------------------------------------------------
Sub DemoLoadGrids  'Mehrere Grids mit Datenbank-Daten füllen
'--------------------------------------------------
' Diese Routine soll aus Northwind.db die ersten 5 Tabellen in Grid1 - Grid5 laden 
' Die Spaltenbreite soll automatisch erzeugt werden
' Code-Beispiele für:
'  - record=DBrecords.rows.item(i)
'  - Grid1.setValue(i+1,0,record["xy"])
'  - MsgBox Grid1.getValue(i+1,0)
'  - Grid1.Property=...
'
Dim xVar,xTab,xFields,xi,xColumns,nCol,xTabelle
Dim dataHandler,dataH,xn
On Error Resume Next
xVar=Split(DB_Fields,";")
xTab=Split(DB_Tables,";")
xTabelle=""
xn=UBound(xTab)-1
If xn>DB_Gridn-1 Then xn=DB_Gridn-1
For xi=0 To xn                                'Tabelle 1-5 in Grid 1-5 laden
    dataH="dataHandler_dd" & (xi+1)
    xLast=""
    If xi=xn Then xLast="SetGrid(table)"
    xTabelle=xTabelle & Add_dataHandler(dataH,xi,xLast) & vbCRLF
Next    
'Execute xTabelle   Prüfung warum execute nicht funktioniert
'MsgBox "Execute does not work ????" & vbCRLF& vbCRLF & xTabelle

For xi=0 To xn                                'Tabelle 1-5 in Grid 1-5 laden
    xTabelle=xTab(xi)                        'Tabellen-Name 
    console.log(xi & " " & xTabelle)
    xFields=Split(xVar(xi),",")              'Felder der Tabelle
'MsgBox xTabelle & vbCRLF & Join(xFields,vbCRLF)
    
    'Set up the column headings
    DB_Columns[xi]=FGrid_Columns(xVar(xi),xTabelle,nCol)    'aufbereiteter Stringfür Columns
    
    'Do a SELECT to get the data for each table. Return results to a data handler for each table.
    dataH="dataHandler_" & (xi+1)
    dataHandler=Eval(dataH) 
    s=Array(["SELECT * FROM " & xTabelle & ";", dataHandler]) 
    Sql(DB,s)
Next    
End Sub

Sub dataHandler_1(transaction, result)
  Dim table=0
  Grid1_settings.source = convertDBdata(table,result)
  Grid1_settings.columns = DB_Columns[table]
  $("#Grid1").jqxGrid(Grid1_settings);
  SetGrid(table)
End Sub

Sub dataHandler_2(transaction, result)
  Dim table=1
  Grid2_settings.source = convertDBdata(table,result)
  Grid2_settings.columns = DB_Columns[table]
  $("#Grid2").jqxGrid(Grid2_settings);
  SetGrid(table)
End Sub

Sub dataHandler_3(transaction, result)
  Dim table=2
  Grid3_settings.source = convertDBdata(table,result)
  Grid3_settings.columns = DB_Columns[table]
  $("#Grid3").jqxGrid(Grid3_settings);
  SetGrid(table)
End Sub

Sub dataHandler_4(transaction, result)
  Dim table=3
  Grid4_settings.source = convertDBdata(table,result)
  Grid4_settings.columns = DB_Columns[table]
  $("#Grid4").jqxGrid(Grid4_settings);
  SetGrid(table)
End Sub

Sub dataHandler_5(transaction, result)
  Dim table=4
  Grid5_settings.source = convertDBdata(table,result)
  Grid5_settings.columns = DB_Columns[table]
  $("#Grid5").jqxGrid(Grid5_settings);
  SetGrid(table)  'Properties nach dem Daten laden setzen
End Sub
Sub dataHandler_6(transaction, result)
  Dim table=5
  Grid6_settings.source = convertDBdata(table,result)
  Grid6_settings.columns = DB_Columns[table]
  $("#Grid6").jqxGrid(Grid6_settings);
  SetGrid(table)
End Sub
Sub dataHandler_7(transaction, result)
  Dim table=6
  Grid7_settings.source = convertDBdata(table,result)
  Grid7_settings.columns = DB_Columns[table]
  $("#Grid7").jqxGrid(Grid7_settings);
  SetGrid(table)
End Sub
Sub dataHandler_8(transaction, result)
  Dim table=7
  Grid8_settings.source = convertDBdata(table,result)
  Grid8_settings.columns = DB_Columns[table]
  $("#Grid8").jqxGrid(Grid8_settings);
  SetGrid(table)
End Sub
Sub dataHandler_9(transaction, result)
  Dim table=8
  Grid9_settings.source = convertDBdata(table,result)
  Grid9_settings.columns = DB_Columns[table]
  $("#Grid9").jqxGrid(Grid9_settings);
  SetGrid(table)
End Sub
Sub dataHandler_10(transaction, result)
  Dim table=9
  Grid10_settings.source = convertDBdata(table,result)
  Grid10_settings.columns = DB_Columns[table]
  $("#Grid10").jqxGrid(Grid10_settings);
  SetGrid(table)
End Sub
Sub dataHandler_11(transaction, result)
  Dim table=10
  Grid11_settings.source = convertDBdata(table,result)
  Grid11_settings.columns = DB_Columns[table]
  $("#Grid11").jqxGrid(Grid11_settings);
  SetGrid(table)
End Sub
Sub dataHandler_12(transaction, result)
  Dim table=11
  Grid12_settings.source = convertDBdata(table,result)
  Grid12_settings.columns = DB_Columns[table]
  $("#Grid12").jqxGrid(Grid12_settings);
  SetGrid(table)  'Properties nach dem Daten laden setzen
End Sub

Function convertDBdata(table,DBRecords)
  Dim data, row, j, i
  data=[]
  For j=0 To DBRecords.rows.length-1
    row={}
    For i=0 To UBound(DB_Columns[table])
        row[DB_Columns[table][i].dataField] = DBRecords.rows.item(j)[DB_Columns[table][i].dataField]
    Next
    data[j]=row
  Next
  convertDBdata = new $.jqx.dataAdapter({localdata: data, datatype: "array"});
End Function

'--------------------------------------------------
Function FGrid_Columns(TabFields,xTabelle,byref nCol) 'Spaltendefinition + Anzahl Spalten
'--------------------------------------------------
Dim xVar,xi,xStr,xCol,nWidth,xStr1,xIndTab
FGrid_Columns="["
xVar=Split(TabFields,",")
xIndTab=nCol
nCol=UBound(xVar)+1
nWidth=856/nCol
For xi=0 To nCol-1 
    xStr=xVar(xi)
    If xi=0 Then
       xStr1=xTabelle
    Else    
       xStr1="T-"+xStr 'LCase(xStr)
    End If
    xCol="{ text: "+Chr(34)+xStr1+Chr(34)+", dataField: "+Chr(34)+xStr+Chr(34)+", width: "+nWidth+" },"
    FGrid_Columns=FGrid_Columns+xCol
Next
xStr=Left(FGrid_Columns,Len(FGrid_Columns)-1)+"]"
FGrid_Columns=Eval(xStr)
End Function

'--------------------------------------------------
Function FDB_Tables(TabFields) 'aus Tabellen-Namen+Fields TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
'--------------------------------------------------
Dim xVar,xi
FDB_Tables=""
If TabFields="" Then Exit Function
xVar=Split(TabFields,";")
FDB_Tables=FStrKenD(xVar(0),",")
If UBound(xVar)<1 Then Exit Function 
For xi=1 To UBound(xVar) 
    FDB_Tables=FDB_Tables+";"+FStrKenD(xVar(xi),",")
Next
End Function

'--------------------------------------------------
Function FDB_Fields(TabFields) 'aus Tabellen-Namen+Fields TabName1,Feld1,Feld2,..;TabName2,Feld1,Feld2..;..
'--------------------------------------------------
Dim xVar,xi,xp,xStr
FDB_Fields=""
If TabFields="" Then Exit Function
xVar=Split(TabFields,";")
For xi=0 To UBound(xVar) 
    xStr=xVar(xi)
    xp=InStr(xStr,",")
    If xp>0 Then FDB_Fields=FDB_Fields+Right(xStr,Len(xStr)-xp)+";"
Next
If FDB_Fields>"" Then FDB_Fields=Left(FDB_Fields,Len(FDB_Fields)-1)
End Function


Function FStrKenD(xStr,xZ)
Dim xF
FStrKenD=""
xF=InStr(xStr,xZ)
If xF>0 Then
   If xF>1 Then FStrKenD=Left(xStr,xF-1)
Else
   FStrKenD=xStr
End If
End Function


Function gridReady(s)
 'MsgBox "Grid load complete"
End Function

JavaScript
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
End JavaScript


'--------------------------------------------------
Function SQLite_FieldCheck(xFields)
'--------------------------------------------------
Dim xName,xi,xVar,xStr
xVar=Split(xFields,",")
xStr=xVar(0)
For xi=1 To UBound(xVar)
    xName=xVar(xi) 
   If xName>" " Then 
      If InStr(xStr,xName)=0 Then xStr=xStr+","+xName 
   End If
Next
SQLite_FieldCheck=xStr
End Function

'--------------------------------------------------
Function SQLite_Fields(xFields)
'--------------------------------------------------
Dim xName,xi,xVar,xStr
xStr=""
xVar=Split(xFields,"(")
'MsgBox UBound(xVar) &vbCRLF& Join(xVar,vbCRLF)
For xi=1 To UBound(xVar)
'    MsgBox "1> " &UBound(xVar) &vbCRLF& xi & " ( " & vbCRLF & xVar(xi)
    xName=SQLite_Field(xVar(xi))
   If xName>" " Then 
      If InStr(xStr,xName)=0 Then xStr=xStr+xName+"," 
   End If
Next
'If xStr>" " Then xStr=Left(xStr,Len(xStr)-1)
'MsgBox xStr
SQLite_Fields=xStr
End Function
'--------------------------------------------------
Function SQLite_Field(xField)
'--------------------------------------------------
Dim xName,xi,xVar,xStr
xStr=""
xVar=Split(xField,",")
For xi=0 To UBound(xVar)
'     MsgBox "2> " &UBound(xVar) &vbCRLF& xi & " , " & vbCRLF & xVar(xi)
    xName=Trim(xVar(xi))
    If Left(xName,1)="[" Then
       xName=FStrKenD(xName,"]")
'MsgBox xName
       xStr=xStr+Right(xName,Len(xName)-1)+","
    End If
Next
'If xStr>" " Then xStr=Left(xStr,Len(xStr)-1)
'MsgBox "> " & xStr
SQLite_Field=xStr
End Function


Function btnUpdate_onclick()
  Dim nQty
  nQty=$("#GridV").jqxGrid("getcellvalue",0,"quantity")
  nQty=nQty+1
  $("#GridV").jqxGrid("setcellvalue",0,"quantity",nQty)
  debugger
End Function

Function btnHide_onclick()
  $("#GridV").jqxGrid("hidecolumn","quantity")
End Function

Function btnShow_onclick()
  $("#GridV").jqxGrid("showcolumn","quantity")
End Function

Function btnResize_onclick()
Dim xi,xName,xTables,xTabelle
xTables=Split(DB_Tables,";")
For xi=1 To DB_Gridn
    xName="#Grid" & xi
    xTabelle=xTables(xi-1)
    If InStr(DB_Tables_no_autoresize,xTabelle)=0 Then $(xName).jqxGrid("autoresizecolumns")
Next
End Function


Function btnSizeCols_onclick()
ResizeGridFeldTest
'ResizeGrid2
End Function

Sub SetGridStart      'Properties bei Programm-Start setzen
Dim xi,xo,xl,xGrid
xo=DB_top
xl=0
For xi=1 To DB_Gridn
    xGrid=Eval("Grid" & xi) 
    xGrid.top=xo                                                
    xGrid.left=xl                                     
   ' xGrid.rowsheight=DB_rh                             
    xo=xo+DB_xh+DB_xo
    If xi=6 Then
       xo=DB_top
       xl=DB_xw+DB_xo
    End If   
Next
End Sub

Sub SetGrid(xInd)  'Grid-Properties nach Daten laden setzen
Dim xi,xo,xl,xh,xw,xName,xTab,xTabName
If xInd>-1 And xInd<DB_Gridn-1 Then Exit Sub    'Properties nach dem letzten Tabelle laden setzen
xo=DB_top
xl=0
xTab=Split(DB_Tables,";")

For xi=1 To DB_Gridn
    xName="#Grid" & xi
    xTabName=xTab(xi-1)
    SetGridProp(xName,xTabName,xo,xl) 'Properties nach dem Daten laden setzen
    xo=xo+DB_xh+DB_xo
    If xi=6 Then
       xo=DB_top
       xl=DB_xw+DB_xo
    End If   
Next
xName="#GridV"
$(xName).jqxGrid("autoresizecolumns")
'SetGridProperty(xName,"height",0)         
ResizeGrid2 'Columns Resize   why sometimes Error in "autoresizecolumns" 

End Sub

Sub SetGridProp(xName,xTabelle,xo,xl) 'Properties nach dem Daten laden setzen
Dim xGrid
    xGrid=Eval(Right(xName,Len(xName)-1)) 
    xGrid.top=xo                                    'ok   Ersatz für SetGridProperty(xName,"top",xo)                  
    xGrid.left=xl                                   'ok   Ersatz für SetGridProperty(xName,"top",xo)         
    'xGrid.rowsheight=DB_rh                         'do not work     
    'xGrid.altrows="false"                          'do not work       
    'SetGridProperty(xName,"top",xo)                'do not work          
    'SetGridProperty(xName,"left",xl)               'do not work    
    'SetGridProperty(xName,"columnsresize","true")  'do not work ?            
    'SetGridProperty(xName,"altrows","false")       'do not work ?            
    SetGridProperty(xName,"width",DB_xw)          
    SetGridProperty(xName,"height",DB_xh)         
    SetGridProperty(xName,"rowsheight",DB_rh)         
    SetGridProperty(xName,"columnsheight",DB_rh)         
    SetGridProperty(xName,"scrollbarsize",DB_scrollbarsize)         
    SetGridProperty(xName,"theme",DB_Theme)         
    ' why sometimes Error in "autoresizecolumns" 
    If InStr(DB_Tables_no_autoresize,xTabelle)=0 Then $(xName).jqxGrid("autoresizecolumns")
   ' $(xName).jqxGrid("refresh")
End Sub

Sub SetGridProperty(GridName,PropName,PropValue)          'not work   
$(GridName).jqxGrid(PropName,PropValue);
End Sub

Sub ResizeGrid2
Dim xi,xTables
On Error Resume Next
xTables=Split(DB_Tables,";")
'MsgBox UBound(xTables)&Chr(13)&DB_Tables
For xi=0 To UBound(xTables)                               
  If InStr(DB_Tables_no_autoresize,xTables(xi))>0 Then 
  '   MsgBox ">>" & xi &vbCRLF & xTables(xi) &vbCRLF & DB_Tables_no_autoresize
     ResizeCols(xi,xTables(xi))
  End If
Next
End Sub


Sub ResizeCols(xTab,xTabelle)
Dim xGrid,xVar,xFields,xi,xNoFields,xn,xj,xStr
On Error Resume Next
xStr=xTabelle+"="
xj=InStr(DB_Tables_no_autoresize,xStr) 
If xj>0 Then 
   'MsgBox xj & Chr(13) & xStr & Chr(13) & DB_Tables_no_autoresize
   xStr=Mid(DB_Tables_no_autoresize,xj+Len(xStr),2)
   xStr=FStrKenD(xStr,",")
   xj=CInt(xStr)-1
End If  

xVar=Split(DB_Fields,";")
xFields=Split(xVar(xTab),",")              'Felder der Tabelle
xGrid="#Grid" & (xTab+1)
'MsgBox "autoresizecolumn by " & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "FieldNames: " & xNoFields & vbCRLF& vbCRLF & "Break.. Result Error"
xn=UBound(xFields)
If xj>0 Then
  If xj<xn Then xn=xj
End If
  ' MsgBox xTabelle &"/"& xj &"/"& UBound(xFields)&"/"& xTab &"/"& xn
For xi=0 To xn                               
  If InStr(DB_Tables_no_Fields,xFields(xi))=0 Then 
     'MsgBox xi & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "MaxFelder: " & UBound(xFields) & vbCRLF& vbCRLF & xFields(xi)
'    console.log(xi & " " & xFields(xi))
    $(xGrid).jqxGrid("autoresizecolumn",xFields(xi))
  End If
Next
End Sub


Function Add_dataHandler(xhandler,Tab_Index,xLast)
Dim dataH,xInd
xInd=Tab_Index+1
dataH="Sub " & xhandler & "(transaction, result)" & vbCRLF & _ 
  "Dim table=" & Tab_Index & vbCRLF & _
  "Grid" & xInd & "_settings.source = convertDBdata(table,result)" & vbCRLF & _
  "Grid" & xInd & "_settings.columns = DB_Columns[table]" & vbCRLF & _
  "$(" + Chr(34) + "#Grid" & xInd & Chr(34) & ").jqxGrid(Grid" & xInd & "settings);" & vbCRLF
If xLast>"" Then dataH=dataH + xLast & vbCRLF
dataH=dataH + "End Sub" & vbCRLF
'MsgBox dataH
Add_dataHandler=dataH
End Function

Sub AnzVar(xString,xTr) 'Strings mit Zeilenumbruch anzeigen
Dim xVar,xStr
xVar=Split(xString,xTr)
MsgBox Join(xVar,vbCRLF)
End Sub

Sub ResizeGridFeldTest
Dim xi,xTables
On Error Resume Next
xTables=Split(DB_Tables,";")
'MsgBox UBound(xTables)&Chr(13)&DB_Tables
For xi=0 To UBound(xTables)                               
  If InStr(DB_Tables_no_autoresize,xTables(xi))>0 Then 
  '   MsgBox ">>" & xi &vbCRLF & xTables(xi) &vbCRLF & DB_Tables_no_autoresize
     ResizeColsT(xi,xTables(xi))
  End If
Next
End Sub


Sub ResizeColsT(xTab,xTabelle)
Dim xGrid,xVar,xFields,xi,xNoFields,xn,xj,xStr
On Error Resume Next

xVar=Split(DB_Fields,";")
xFields=Split(xVar(xTab),",")              'Felder der Tabelle
xGrid="#Grid" & (xTab+1)
'MsgBox "autoresizecolumn by " & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "FieldNames: " & xNoFields & vbCRLF& vbCRLF & "Break.. Result Error"
xn=UBound(xFields)
  ' MsgBox xTabelle &"/"& xj &"/"& UBound(xFields)&"/"& xTab &"/"& xn
For xi=0 To xn                               
  If InStr(DB_Tables_no_Fields,xFields(xi))=0 Then 
    MsgBox xi & vbCRLF& vbCRLF & "TableName: " & xTabelle & vbCRLF& vbCRLF & "MaxFelder: " & UBound(xFields) & vbCRLF& vbCRLF & xFields(xi)
    console.log(xi & " " & xFields(xi))
    $(xGrid).jqxGrid("autoresizecolumn",xFields(xi))
  End If
Next
End Sub
