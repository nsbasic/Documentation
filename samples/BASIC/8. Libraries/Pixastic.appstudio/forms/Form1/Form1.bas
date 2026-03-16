CreateEle("img","img",300,200,10,10)
img.src = "includes/BlackDino.jpg"

reader = new FileReader()
Dim e
Sub CreateEle(id, type, width, height, Left, top)

  Dim newele
  newele = document.createElement(type)
  newele.setAttribute("id", id)
  newele.style.position = "absolute"
  newele.style.width = width & "px"
  newele.style.height = height & "px"
  newele.style.left = Left & "px"
  newele.style.top = top & "px"
  newele.style.background = "white" 
  newele.style.border = "1px solid #000";
  'newele.innerHTML = HTML
  document.body.appendChild(newele)
End Sub

Function txtGetPicture_onchange()
  'This gets called after the picture is chosen. 
  'Next, let's read start reading it in.
  'The _onload function will be called when that completes.
  reader.readAsDataURL(txtGetPicture.files[0])
  e=event
End Function

Function reader_onload(e)
  'read of the file is complete.
  'Now, let's load it into an image.
  'The _onload function for the image will be called on completion.
  img.src=e.target.result
End Function

Function Reset_onclick()
  Pixastic.revert(img)
End Function

Function Glow_onclick()
    Pixastic.process(img, "glow", {amount:0.5,radius:1.0})
End Function

Function Invert_onclick()
  Pixastic.process(img, "invert")
End Function

Function Noise_onclick()
   Pixastic.process(img,"noise", {mono:True,amount:0.5,strength:0.5})
End Function

Function FlipH_onclick()
  Pixastic.process(img, "fliph")
End Function

Function FlipV_onclick()
  Pixastic.process(img, "flipv")
End Function

Function Edge_onclick()
  Pixastic.process(img, "edges", {mono:True,Invert:False})
End Function

Function Emboss_onclick()
  Pixastic.process(img, "emboss", {greyLevel:100,direction:"topright"})
End Function

Function Blur_onclick()
  Pixastic.process(img, "blur")
End Function

Function Button1_onclick()
  Print "Ways to save the image file:<p>1. To a file using PhoneGap.<p>2. To a database using SQLite.<p>3. To a server using Ajax.<p>4. To a DropBox account"
End Function
