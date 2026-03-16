'This sample shows a basic menu. Using the naming convention of 
'the other menu controls, it probably should have been called
'menuImageTitleArrow, because those are the columns it has.

'The actual menu itself is completely defined in the IDE.
'The code in this program is optional code to add, replace and
'delete rows in the menu at runtime.

Sub Main()
    Call lblStatusUpdate()
End Sub

Function List1_onclick(i)
    Dim itemText
    'This gets executed when a menu item is clicked on
    If TypeName(i)="object" Then Exit Function
    MsgBox "Menu item chosen: " & i & " " & List1.getItem(i);
End Function

Function btnDeleteAll_onclick()
  List1.deleteItem("all")
  Call lblStatusUpdate()
End Function

Function btnAddItem_onclick()
    If List1.getItemCount() > 5 Then
      MsgBox "too many items!"
      return
    End If
  
    List1.addItem(txtNewItemName.value)
    Call lblStatusUpdate()
End Function

Function btnReplaceItem_onclick()
  Dim result
  result = List1.replaceItem(txtReplaceWhich.value,txtNewItemName.value)
  If result = -1 Then
    MsgBox "Invalid item number argument.  No changes made"
  Else
    Call lblStatusUpdate()
  End If
End Function

Function btnDeleteOne_onclick()
    List1.deleteItem()
    Call lblStatusUpdate()
End Function

Function lblStatusUpdate()
    Dim cnt
    cnt = List1.getItemCount()
    If cnt = 0 Then
      lblStatus.textContent = "List is empty"
    Else
      lblStatus.textContent = "List has " + cnt + " items, numbered 0 through " + (cnt - 1)
    End If
End Function

