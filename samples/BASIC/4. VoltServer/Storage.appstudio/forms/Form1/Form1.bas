'---- serverStorage ----

Function butClear_onclick()
  serverStorage.clear(done)
End Function

Function butGetAllItems_onclick()
  serverStorage.getAllItems(getAllItemsCallback)
End Function

Function butGetItem_onclick()
  serverStorage.getItem("SimpleString", getItemCallback)
End Function

Function butRemoveItem_onclick()
  serverStorage.removeItem("SimpleString", done)
End Function

Function butSetItem_onclick()
  serverStorage.setItem("SimpleString", "ABCD", done)
  serverStorage.setItem("Number", 123, done)
  serverStorage.setItem("Array", [1, 2, 3, 4], done)
  serverStorage.setItem("Object", {firstName: "Eric", lastName: "Cartman"}, done)
End Function

Function done(error, data)
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    console.log("success")
  End If
End Function

Function getAllItemsCallback(error, data) 
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    Print False
    For Each key in data
      console.log(key, data[key])
      k = [key, key][0]
      Print k & ": " & data[key].toString()
    Next
    End If
End Function

Function getItemCallback(error, data) 
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    MsgBox data
  End If
End Function

'---- appStorage ----
Function butClearApp_onclick()
   appStorage.clear(NSB.voltAppId, done)
End Function

Function butGetAllItemsApp_onclick()
  appStorage.getAllItems(NSB.voltAppId, getAllItemsCallback)
End Function

Function butGetItemApp_onclick()
  appStorage.getItem("SimpleString", NSB.voltAppId, getItemCallback)
End Function

Function butRemoveItemApp_onclick()
 appStorage.removeItem("SimpleString", NSB.voltAppId, done) 
End Function

Function butSetItemApp_onclick()
  appStorage.setItem("SimpleString", "ABCD", NSB.voltAppId, done)
  appStorage.setItem("Number", 123, NSB.voltAppId, done)
  appStorage.setItem("Array", [1, 2, 3, 4], NSB.voltAppId, done)
  appStorage.setItem("Object", {firstName: "Eric", lastName: "Cartman"}, NSB.voltAppId, done)
End Function


Function enableButtons()
     butClear.disabled = False
     butGetAllItems.disabled = False
     butGetItem.disabled = False
     butRemoveItem.disabled = False
     butSetItem.disabled = False
     butGetAllItemsApp.disabled = False
     butGetItemApp.disabled = False

     'Buttons which are only available to owner when voltDashBoard access is on.
     If NSB.voltDashboardAccess Then
         butClearApp.disabled = False
         butRemoveItemApp.disabled = False
         butSetItemApp.disabled = False
     End If
End Function

 Function disableButtons() 
   return
     butClear.disabled = True
     butGetAllItems.disabled = True
     butGetItem.disabled = True
     butRemoveItem.disabled = True
     butSetItem.disabled = True
     butGetAllItemsApp.disabled = True
     butGetItemApp.disabled = True
     butClearApp.disabled = True
     butRemoveItemApp.disabled = True
     butSetItemApp.disabled = True
 End Function