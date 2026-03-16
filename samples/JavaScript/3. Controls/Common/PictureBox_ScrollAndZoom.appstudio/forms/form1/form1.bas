'This sample shows how to display an image,
'that can be zoomed and scrolled. You will need to 
'run this on an actual device, since zoom and
'scroll require gestures with your fingers.

'This statement gets the context of the PictureBox. 
'We will use it to manipulate the contents of it.
pb = PictureBox1.getContext("2d")

Sub Main
  imageURL="https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg"
  pb.addImage(imageURL,0,0,PictureBox1.width,PictureBox1.height)
End Sub
