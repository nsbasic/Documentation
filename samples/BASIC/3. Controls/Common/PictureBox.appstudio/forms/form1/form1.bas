'The PictureBox control is a powerful tool for displaying
'and manipulating pictures, drawings and text.
'See full docs in Tech Note 13.

'This statement gets the context of the PictureBox. 
'We will use it to manipulate the contents of it.
pb = PictureBox1.getContext("2d")
rotate = 0

Function Button1_onclick()
  'Do some drawing: start by setting our colors.
  pb.strokeStyle = vbBlack
  pb.fillStyle = vbRed
  'Now, we define the lines we want to draw in a path.
  pb.beginPath()
  pb.arc(150,150,50,0,Math.PI*2,True)
  pb.closePath()
  'Path is complete: draw it
  pb.stroke()
  'and paint the area inside the path
  pb.fill()  
End Function

Function Button2_onclick()
  'Do some text
  pb.textBaseline = "top"
  pb.font="16px sans-serif"
  pb.fillText("This is a picturebox",100,0)  
End Function

Function Button3_onclick()
  pb.addImage("mario.jpg",0,0) 
End Function

Function Button4_onclick()
  rotate = rotate + 90
  PictureBox1.style.webkitTransform="rotate(" & rotate & "deg)"
End Function
