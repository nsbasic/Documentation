 ' this sample lets you get a picture from the camera Or the Photo Library
 
 rotation = 0;
 
 Function btnMail_onclick()
   location = "mailto:" & encodeURI("myaddress@yahoo.com") & "?subject=" & encodeURI("My Great Photo") & "&body=" & "<img src='" & PictureBox1.toDataURL() & "'/>"
 End Function
 
 Function btnRotate_onclick()
   Dim pb;
   rotation = (rotation + 90) % 360;
   If (rotation % 180) <> 0 Then ' portrait
     PictureBox1.resize(48, 100, 225, 300)
   Else ' landscape
     PictureBox1.resize(10, 128, 300, 225)
   End If
   
   pb = PictureBox1.getContext("2d")
   pb.save()
   pb.translate(PictureBox1.width / 2, PictureBox1.height / 2)
   pb.rotate(rotation * Math.PI / 180)
   imgObj = PictureBox1.img
   NSB.drawImageIOSFix(pb, imgObj, 0, 0, 0, 0, -150, -112, 300, 225)
   pb.restore()
 End Function 