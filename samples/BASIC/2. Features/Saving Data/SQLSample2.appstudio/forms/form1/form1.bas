'This sample shows how to access SQLite from NSB/AppStudio
'See Tech Note 15 for more information

Dim databaseSize  'number of records in the database
Dim DB            'the database itself
Dim startTime     'used for timer
Dim lastSQL       'the last SQL statement. Useful for debugging.
Dim total         'use to total sales from customers   
Dim DBRecords     'the last set of records selected from DB
Dim iRec          'record number of record being processed, starting with 0
Dim nTables       'number of tables in the database (when it works)


databaseSize=22
btnCreate.value = "Create /" & vbCRLF & "Open DB"

Function btnCreate_onclick()
  total=0
  initDB
End Function

Function btnCount_onclick()
  total=0
  startTime=SysInfo(10)
  For i=0 To DBRecords.rows.length-1
    total=total + DBRecords.rows.item(i)["sales"]
  Next
  txtMessage.value = "Total sales of " & DBRecords.rows.length & " recs is " & total & " in " & (SysInfo(10)-startTime) & " milliseconds."
End Function

Function btnRandom_onclick()
  Dim sqlList
  startTime=SysInfo(10)
  total=0
  sqlList = []
  For j=0 To databaseSize-1
    sqlList[j]=["SELECT * FROM customerData WHERE name=?", "cust" & Fix(Rnd * databaseSize), Random_Total]
  Next
  
  sqlList[databaseSize-1][2]=Random_Complete
  Sql(DB,sqlList)
End Function

Function Random_Total(transaction, results)
  total = total + results.rows.item(0)["sales"]
End Function

Function Random_Complete(transaction, results)
  txtMessage.value =  "Total of " & databaseSize & " random recs is " & total & " in " & (SysInfo(10)-startTime) & " milliseconds."
End Function

Function initDB()
  Dim sqlList
  DB = SqlOpenDatabase("localStorage","1.0","My Customer Database")
  If DB<>0 Then
    startTime=SysInfo(10)
    nTables = -1
    sqlList=[]
    sqlList[0]=["SELECT COUNT(*) AS tabCount FROM sqlite_master WHERE type='table' AND name='customerData';",tableExistCheck,masterErr]
    Sql(DB, sqlList)
  End If
End Function

Function createDB()
  ' checks if table "customerData" exists
  ' if not, drops (just in case), re-creates, and fills the table with data
  Dim sqlList
  If nTables < 1 Then
    MsgBox "Table customerData does not exist"
    sqlList=[]
    sqlList[0]=["DROP TABLE IF EXISTS customerData;"]
    sqlList[1]=["CREATE TABLE IF NOT EXISTS " & "customerData('name', 'age', 'sales', PRIMARY KEY('name') );"]
    For j = 0 To databaseSize-1
      args=["cust" & j, j, j*10]
      sqlList[j+2]=["INSERT INTO customerData (name, age, sales) VALUES ( ?,?,?);", args]
    Next
    ' now execute to create the table
    Sql(DB, sqlList)
  Else
    MsgBox "DB with table customerData already exists with " & nTables & " Tables named ""customerData"" "
  End If
  ' select the data for further processing
  sqlList=[]
  sqlList[0]=["SELECT * FROM customerData ORDER BY name;", dataHandler]
  Sql(DB, sqlList)  
End Function

Function tableCount(transaction, results)
  Dim rtc
  Dim i,j
  DBRecords = results
  nTables = DBRecords.rows.length
  txtMessage.value = "The database currently has " & nTables & " Tables"
  grMaster.rows = nTables + 1
  If nTables > 4 Then nTables = 4       ' because of fixed grid size
  Rem remove old grid values
  For i=1 To 4
    For j=0 To 4
      grMaster.setValue(i,j,"")
    Next j
  Next i
  
  For j=0 To nTables - 1
    i = j + 1
    grMaster.setValue(i,0,DBRecords.rows.item(j)["type"])
    grMaster.setValue(i,1,DBRecords.rows.item(j)["name"])
    grMaster.setValue(i,2,DBRecords.rows.item(j)["tbl_name"])
    grMaster.setValue(i,3,DBRecords.rows.item(j)["rootpage"])
    grMaster.setValue(i,4,DBRecords.rows.item(j)["sql"])
  Next j
  form1.style.display = "none"
  form2.style.display = "block"
End Function

Function tableExistCheck(transaction, results)
  Dim rtc
  MsgBox "tableExistCheck"
  DBRecords = results
  nTables = DBRecords.rows.item(0)["tabCount"]
  txtMessage.value = "The database contains " & nTables & " tables with the name specified"
  rtc = createDB()
End Function

Function masterErr(transaction, results)
  ' called in Case of Error
  MsgBox "Error: " & results.message
  debugger
End Function

Function dataHandler(transaction, results)
  ' Called On completion of Sql command
  DBRecords = results
  txtMessage.value =  "Recs in DB created/read: " & DBRecords.rows.length & " in " & (SysInfo(10)-startTime) & " milliseconds."
End Function

Function skipError(transaction, results)
  ' Called On failure of Sql command
  MsgBox "skipError"
  MsgBox "results = " & results
End Function 

Function btnRead_onclick()
  Dim sqlList
  Dim i, j
  For i=1 To 5
    For j=0 To 3
      Grid1.setValue(i,j,CStr(i) & ":" & CStr(j))
    Next j
  Next i
  sqlList=[]
  sqlList[0]=["SELECT name, age, sales from customerData ORDER BY name;", [], resultToGrid]
  iGridStart = 1
  iRec = 0
  DBRecords=[]
  WaitCursor True
  Sql(DB, sqlList)
End Function

Function resultToGrid(transaction, results)
  console.log("result")
  ' Called On completion of Sql command in Function btnRead_onclick
  DBRecords = results
  WaitCursor False
  iRec=0
  btnShowNext_onclick()
End Function

Function btnShowNext_onclick()
  Dim i, j
  
  Rem Clear grid before reading Next group of records
  For i=1 To 5
    For j=0 To 3
      Grid1.setValue(i,j,"")
    Next j
  Next i
  Rem fill grid With Next group of 5 records
  For i=1 To 5
    If iRec<DBRecords.rows.length Then
      Grid1.setValue(i,0,iRec)
      Grid1.setValue(i,1,DBRecords.rows.item(iRec)["name"])
      Grid1.setValue(i,2,DBRecords.rows.item(iRec)["age"])
      Grid1.setValue(i,3,DBRecords.rows.item(iRec)["sales"])
      iRec = iRec + 1
    End If
  Next i
End Function

Function btnTotalSales_onclick()
  startTime = SysInfo(10)
  sqlList=[]
  sqlList[0]=["SELECT SUM(sales) AS TotalSales, AVG(sales) AS AvgSales FROM customerData;", sumSales]
  Sql(DB, sqlList)
End Function

Function sumSales(transaction, results)
  'Called On completion of Sql command in Function btnTotalSales_onclick
  txtMessage.value = "Total Sales are " & results.rows.item(0)["TotalSales"] & " , Average: " & results.rows.item(0)["AvgSales"] & " in " & (SysInfo(10)-startTime) & " ms."
End Function

Function btnDrop_onclick()
  Dim sqlList
  MsgBox "Table customerData will be dropped"
  sqlList=[]
  sqlList[0]=["DROP TABLE customerData;",dropExec,dropError]
  Sql(DB, sqlList)
End Function

Function dropExec(transaction, result)
  DBRecords=[]
  MsgBox "Table customerData dropped"
End Function

Function dropError
  MsgBox "error in drop statement"
End Function

Function btnOpen_onclick()
  total=0
  DB = SqlOpenDatabase("customerdb.db","1.0","My Customer Database")
End Function
