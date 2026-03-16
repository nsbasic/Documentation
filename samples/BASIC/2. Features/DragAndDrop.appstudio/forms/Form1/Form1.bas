Sub Main()
  'This will work for any control. We're using a Label here.
  Label1.setAttribute("draggable", "true")
End Sub

Function Form1_ondragover(e)
  'Tell the form not to handle dragover the usual way.
  e.preventDefault()
End Function

Function Label1_ondragstart(e)
  'Get the position where were start dragging
  Label1.dragStart = {x: e.x, y: e.y}
End Function

Function Form1.ondrop(e)
  'Reposition the control by the amount of the change
  Label1.Left = Label1.Left - (Label1.dragStart.x - e.x)
  Label1.Top = Label1.Top - (Label1.dragStart.y - e.y)
End Function