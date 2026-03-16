' Important: See the documentation in http:wiki.appstudio.dev/Google_Drive_API
' Read and update a Google Drive Sheet.
' http://blog.appstudio.dev/?p=2781
' http://wiki.appstudio.dev/Google_Drive_API

GoogleDrive.CLIENT_ID = "229059222211-hqr13ohhb9ddi57m0iojb58cb2n8m798.apps.googleusercontent.com"

Dim FILE_ID = "1jvuTjmirLatrD3_Lf6BsGP_IB_5iHW4G1rdn5IdIa9Q"
Dim spreadsheet = [[0]]  'The current spreadsheet in a 2D array

Function Main()
  GoogleDrive.checkAuth(authCallback)
End Function

'Initiate auth flow
Function btnAuthorize_onclick()
  GoogleDrive.authorize(authCallback)
End Function

Function authCallback(auth)
  btnAuthorize.disabled = Not auth
End Function

Function btnList_onclick()
  GoogleDrive.listFiles(listFilesCallback)
End Function

Function listFilesCallback(files)
  console.table(files)
  Grid1.setValue(0, 0, "Filename")
  Grid1.setValue(0, 1, "File_Id")
  Grid1.deleteRows(Grid1.getRowCount())
  Grid1.addRows(files.length)
  For i = 0 To files.length-1
    Grid1.setValue(i + 1, 0, files[i].name)
    Grid1.setValue(i + 1, 1, files[i].id)
  Next
  Grid1.refresh()
End Function

Function btnGet_onclick()
  GoogleDrive.getSpreadsheet(FILE_ID, getSpreadsheetCallback)
End Function

Function getSpreadsheetCallback(results)
  spreadsheet = results
  console.table(results)
  Grid1.setValue(0, 0, "A")
  Grid1.setValue(0, 1, "B")
  Grid1.deleteRows(Grid1.getRowCount())
  Grid1.addRows(results.length)
  For i = 0 To results.length-1
    Grid1.setValue(i + 1, 0, results[i][0])
    Grid1.setValue(i + 1, 1, results[i][1])
  Next
  Grid1.refresh()
End Function

Function btnSave_onclick()
  spreadsheet[0][0] = spreadsheet[0][0] + "+"
  Grid1.setValue(1, 0, spreadsheet[0][0])
  GoogleDrive.saveSpreadsheet(spreadsheet, FILE_ID, saveSpreadsheetCallback)
End Function

Function saveSpreadsheetCallback() 
  MsgBox("done")
End Function

Function btnFileInfo_onclick()
  GoogleDrive.getFileInfo(FILE_ID, getFileInfoCallback)
End Function

Function getFileInfoCallback(info) 
  console.log(info)
  Grid1.deleteRows(Grid1.getRowCount())
  Grid1.setValue(0, 0, "Field")
  Grid1.setValue(0, 1, "Value")
  getFileInfoAddRow(info, "name")
  getFileInfoAddRow(info, "id")
  getFileInfoAddRow(info.lastModifyingUser, "displayName")
  getFileInfoAddRow(info.lastModifyingUser, "emailAddress")
  getFileInfoAddRow(info, "modifiedTime")
  getFileInfoAddRow(info, "kind")
  Grid1.refresh()
End Function

Function getFileInfoAddRow(info, field)
  var i = Grid1.getRowCount()
  Grid1.addRows(1)
  Grid1.setValue(i, 0, field)
  Grid1.setValue(i, 1, info[field])
End Function

