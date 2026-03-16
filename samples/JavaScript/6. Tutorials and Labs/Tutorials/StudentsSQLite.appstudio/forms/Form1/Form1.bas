Dim DB

Sub Main
  'Create database if it does not exist
  DB = SqlOpenDatabase("students.db","1.0","My Student Database")
  sqlList=[]
  sqlList[0]=["CREATE TABLE studentData('name', 'age', PRIMARY KEY('name') );", success, fail]
  Sql(DB, sqlList)
End Sub

Sub success()
End Sub

Sub fail()
End Sub

Function btnSave_onclick()
  If txtName.value="" Then Exit Function
  sqlList = []
  sqlList[0]=["INSERT INTO studentData (name,age) VALUES (?,?)", _
    [txtName.value, TxtAge.value]]
  Sql(DB, sqlList)
End Function

Function btnFind_onclick()
  sqlList=[]
  sqlList[0]=["SELECT * FROM studentData WHERE name=?", txtFind.value, nameFound]
  Sql(DB, sqlList)
End Function

Function nameFound(transaction, results)
  If results.rows.length>0 Then
    MsgBox results.rows.item(0).name & " is " & results.rows.item(0).age
  Else
    MsgBox "Name not found"
  End If
End Function

Function btnDelete_onclick()
  sqlList = []
  sqlList[0]=["DELETE FROM studentData WHERE name=?", txtFind.value, nameDeleted]
  Sql(DB, sqlList)
End Function

Function nameDeleted()
  MsgBox txtFind.value & " Deleted"
End Function

