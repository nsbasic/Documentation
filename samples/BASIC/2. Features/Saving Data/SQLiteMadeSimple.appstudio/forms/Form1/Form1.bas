Dim DB

Sub Main
  DB = SqlOpenDatabase("localStorage")
  sqlList=[]
  sqlList[0]=["CREATE TABLE studentData('name', 'age', PRIMARY KEY('name') );", _
  success, fail]
  Sql(DB, sqlList)
End Sub

Sub success()
  console.log("success")
End Sub

Sub fail(error)
  MsgBox error
End Sub

Function btnSave_onclick()
  If txtName.value="" Then Exit Function
  sqlList = []
  sqlList[0]=["INSERT INTO studentData (name,age) VALUES (?,?)", _
  [txtName.value, txtAge.value], success, fail]
  Sql(DB, sqlList)
End Function

Function btnFind_onclick()
  sqlList=[]
  sqlList[0]=["SELECT * FROM studentData WHERE name=?", txtFind.value, nameFound]
  Sql(DB, sqlList)
End Function

Function nameFound(transaction, results)
  If results.rows.length > 0 Then
    MsgBox results.rows.item(0).name & " is " & results.rows.item(0).age
  Else
    MsgBox "Name not found"
  End If
  txtName.value = results.rows.item(0).name
  txtAge.value = results.rows.item(0).age
End Function

Function btnDelete_onclick()
  sqlList = []
  sqlList[0]=["DELETE FROM studentData WHERE name=?", txtFind.value, nameDeleted]
  Sql(DB, sqlList)
  txtName.value = ""
  txtAge.value = ""
End Function

Function nameDeleted()
  MsgBox txtFind.value & " Deleted"
End Function
