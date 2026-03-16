Dim currentRecord

Sub Main
  'If we're runnning for the first time, initialize localStorage.
  If localStorage.studentInfo=undefined Then
    localStorage.studentInfo=JSON.stringify([])
  End If
  saves=JSON.parse(localStorage.studentInfo)
End Sub

Function btnSave_onclick()
  'Add the current student data to the saves() array.
  'No duplicate checking is done.
  Dim saves(), data
  If txtName.value="" Then Exit Function
  
  data={name: txtName.value, age: TxtAge.value}
  
  saves=JSON.parse(localStorage.studentInfo)
  Push(saves, data)
  localStorage.studentInfo=JSON.stringify(saves)
End Function

Function btnFind_onclick()
  'Go through the array of names and find the first match.
  Dim saves, i
  currentRecord = -1
  
  saves=JSON.parse(localStorage.studentInfo)
  For i=0 To UBound(saves)
    If saves[i].name=txtFind.value Then
      MsgBox saves[i].name & " is " & saves[i].age
      currentRecord=i
    End If
  Next
  If currentRecord=-1 Then MsgBox "Name not Found"
End Function

Function btnDelete_onclick()
  'Delete the current record
  saves=JSON.parse(localStorage.studentInfo)
  Splice(saves, currentRecord, 1)
  localStorage.studentInfo=JSON.stringify(saves)  
End Function
