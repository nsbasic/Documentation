'This sample shows some of the things you can do with the HTMLview control.
'It starts by showing some text and images in a scrolling area.
'You can then add text to the existing contents,
'Replace it with a map,
'Or display a .htm file.

Sub Main()
  'Set up the initial contents. 
  HTMLview1.innerHTML="This is an <b>HTMLview</b> with scrolling.</b><br>" & _
    "<img src=includes/mario.jpg width=100 height=200><br>" & _
    "<img src=includes/mario.jpg width=100 height=200>"
  'reset the scroll area
  HTMLview1.refresh()
End Sub

Function Button1_onclick()
  'Add some text to the existing contents.
  HTMLview1.innerHTML=HTMLview1.innerHTML & "<br>Length is " & Len(HTMLview1.innerHTML)
  HTMLview1.refresh()
End Function

Function Button3_onclick()
  'This will only work when deployed to a server. See ReadFile documentation.
  'Notice that year.htm is in the manifest, so it will be deployed with the app.
  htm=ReadFile("includes/year.htm")
  If htm.status = 200 Then      
    HTMLview1.innerHTML=htm.responseText
    HTMLview1.refresh()
  Else
    MsgBox "Could not read file. Are you running from a deployed app? It will not work locally."
  End If  
End Function

Function Button4_onclick()
  HTMLview1.innerHTML="<iframe src='includes/year.pdf' width=310 height=260 ></iframe>"
  HTMLview1.refresh()  
End Function

Function Button5_onclick()
  HTMLview1.innerHTML="<iframe frameborder='0' allowfullscreen " _
    & "src='https://www.youtube.com/embed/eDF7QRC3c3Y?feature=player_detailpage'>" _
    & "</iframe>'"
  HTMLview1.refresh()
End Function
