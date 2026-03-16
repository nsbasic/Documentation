Rem basic structure of program dealing With SQLite database
Rem concepts also demonstrated:
Rem save / retrieve program state (form that was open when program was closed)
Rem Contributed by Thomas Gruber
Rem 
Dim DBIsOpen    ' True/False, to avoid duplicate opening
Dim DBIsNew     ' True/False; True means the DB is new, required tables do not exist yet

Dim currentForm ' form to return to
Dim currentRec  ' DB table/record that was last displayed

DBIsOpen = False
DBIsNew = True

Sub Main()
  If localStorage.lastrun <> "undefined" Then
    MsgBox "this program was last run at " & localStorage.lastrun
    localStorage.lastrun = localStorage.lastrun & vbCRLF & " re-opened on " & Date() & " at " & Time()
  End If
End Sub


Rem global functions For database handling
Function window_onunload()
  localStorage.lastrun = "window_onunload triggered on " & Date() &" at " & Time()
End Function


Function openDB(dbname)
  Rem open database If it is not already open
  If Not DBIsOpen Then
    DB = SqlOpenDatabase(dbname,"1.0",dbname)
    If DB<>0 Then
      DBIsOpen = True
      openDB = True
    Else
      openDB = False
    End If
  End If
End Function
