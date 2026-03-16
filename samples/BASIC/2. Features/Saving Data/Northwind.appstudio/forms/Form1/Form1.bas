'This app deploys the well known Northwind test database. 
'The database is automatically deployed with the app and is usable right away.
Dim DB          'The database
Dim DBrecords   'The current set of selected records

Sub loadGrid(e)
  console.log("loadGrid called: " & e)
  NSB.ShowProgress("Loading grid with customers...")
  DB=SqlOpenDatabase("Northwind.db")
  s=Array(["Select * from Customers ORDER BY CustomerID;", dataHandler])
  Sql(DB,s)
End Sub

Sub dataHandler(transaction, result)
  console.log("dataHandler called")
  DBrecords=result
  For i=0 To DBrecords.rows.length-1
    record=DBrecords.rows.item(i)
    Grid1.setValue(i+1,0,record["CustomerID"])
    Grid1.setValue(i+1,1,record["CompanyName"])
    Grid1.setValue(i+1,2,record["City"])
    Grid1.setValue(i+1,3,record["Country"])
  Next
  Grid1.refresh()
  NSB.ShowProgress(False)
End Sub

Function HeaderBar1_onclick(button)
  If TypeName(button)="object" Then Exit Function
  s=Array(["UPDATE Customers SET CompanyName=? WHERE CustomerID=?;", _
    ["NewCo", "ALFKI"], loadGrid])
  Sql(DB,s)
End Function

JavaScript
  HeaderBar1_btnRight.onclick = function() {HeaderBar1.onclick("Update")}
End JavaScript
