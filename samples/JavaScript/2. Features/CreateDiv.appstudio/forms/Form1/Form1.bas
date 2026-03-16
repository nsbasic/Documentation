'This sample shows how to create an HTML element at runtime.
'In this case, we will create a simple box with some text in it
'using an <DIV> elenebt.

Function Button1_onclick()
  'Call our function to create a div called "test".
  CreateDiv("test","",200,60,55,120)
  'We could have done this in the second parameter of the above statement.
  'This shows how we can do this any time.
  test.innerHTML="NSB/AppStudio rocks!"
End Function

Function Button2_onclick()
  'This removes the div from our app.
  test.parentNode.removeChild(test)
End Function

Sub CreateDiv(id, HTML, width, height, Left, top)
  'This sub creates a new element, then sets its properties.
  'Once it is all set up, appendChild() adds it to the app.
  If typeof(test) <> "undefined" Then
    MsgBox "Div already created."
    return
  End If
  
  Dim newdiv
  newdiv = document.createElement("div")
  newdiv.setAttribute("id", id)
  newdiv.style.position = "absolute"
  newdiv.style.width = width & "px"
  newdiv.style.height = height & "px"
  newdiv.style.left = Left & "px"
  newdiv.style.top = top & "px"
  newdiv.style.background = "white" 
  newdiv.style.border = "1px solid #000";
  newdiv.innerHTML = HTML
  document.body.appendChild(newdiv)
End Sub
