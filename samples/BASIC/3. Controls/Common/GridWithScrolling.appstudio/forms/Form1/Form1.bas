 'This is a simple scrolling grid. 
 
 'You need to do 3 things to make a grid scrollable:
 '1. Set scrolling to true in its properties.
 '2. Set the scrollheight to the number of pixels the grid should show.
 '   The scrolling will take place within this height.
 '3. After the grid is drawn, refresh it so it can calculate how tall the
 '   scrolling area is.
 
 Function Main()
   For row = 1 To 29 
     For col = 0 To 3
       Grid1.setValue(row, col, row * col)
     Next
   Next
   Grid1.refresh()
 End Function
 
 Function Grid1_onclick(event)
   Dim s = createMultiDimArray(2)
   s = Split(event.target.id, "_")
   console.log(event.target.id)
   console.log(s)
   NSB.MsgBox("Click on " & s[0] & " at row " & s[1] & " and column " & s[2] & ". Value is " & Grid1.getValue(s[1], s[2]))
 End Function 