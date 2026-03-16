'Contributed by Mike Miller jdmdude2009@gmail.com

'This sample lets you get a picture from the camera or the Photo Library
'and display it on your screen and:
'    - Push it to a web server in base64 or PNG format using an AJAX POST
'    - Receive a response from the server and do something with it.
'This is a mod of the original Camera Sample file.
'  You must have the supplied PHP files in the same location
'  as the AppStudio production files.
'
'To control when a pic may be sent or that a pic is not sent
'multiple times by click happy users, btnSubmitImages is placed
'in different states of visiblility and/or usability by way of the 
'SentFlag.

'Note: PictureBox1 is in the negative left of the form.
'      This is a trick that developers use to hide controls
'      from the users but still have availability to them.
'
'      Image1 is used for preview ONLY because viewing PictureBox1
'      isn't very realistic for viewing because it exceeds the 
'      mobile screen size.  (You can size the PictureBox to any size
'      a camera is capable of, but beware, size does matter!  The lag
'      to insert an image into a db gets longer as the pics get larger.
'      I also noticed phpmyadmin is not very responsive to large images AND
'      I have had timeouts when loading pages with lots of images.  I suspect
'      some sort of slide presentation tool that controls the load of
'      the images will be in order to view large quantities of photos
'      (lot's of opensource for slide views)


Dim SentFlag

reader = new FileReader()
SentFlag=0

Sub Main()
  pb=PictureBox1.getContext("2d")
  btnSubmitImage.value=""
End Sub
 
Function txtGetPicture_onchange()
  'This gets called after the picture is chosen. 
  'Next, let's read start reading it in.
  'The _onload function will be called when that completes.
  reader.readAsDataURL(txtGetPicture.files[0])
End Function

Function reader_onload(e)
  'read of the file is complete.
  'Now, let's load it into an image.
  'The _onload function for the image will be called on completion.
  Image1.firstChild.src=e.target.result 'Phone Viewing ONLY
  pb.addImage(e.target.result,0,0,0,0,0,0,PictureBox1.width,PictureBox1.height)
  SentFlag=0
  btnSubmitImage.hidden=False
  btnSubmitImage.value="Send Image to Web"
  lblPicMsg.textContent="Now is the time"
  
End Function

Function PostToWebServer()
  Dim devInfo
  Dim postData
  
  SentFlag=1 'Don't allow multiple submissions because the button
             'is pushed more than once.
  
  'Get divice information - not available 
  devInfo="No device selected"

  'Build POST  
  postData = "filename=" & txtGetPicture.files[0].name
  postData = postData & "&deviceInfo=" & devInfo 
  postData = postData & "&imgBase64=" & PictureBox1.toDataURL()
  
  
  'Send POST to server
  req=Ajax("insertimage.php","POST",postData) 

  If req.status=200 Then 'success
    btnSubmitImage.hidden=True 'Picture was pushed to server so hide button
    lblPicMsg.textContent =  "Success!!!"
    htmResponse.innerHTML=req.responseText
  Else 'failure
    htmResponse.innerHTML="Error: " & req.err
    btnSubmitImage.hidden=False
    lblPicMsg.textContent =  "Failure"
    SentFlag=0
  End If

End Function



Function btnSubmitImage_onclick()
  If Len(PictureBox1.toDataURL())>0 And SentFlag=0 Then
      btnSubmitImage.value = "Sending"
      lblPicMsg.textContent = "Please Wait"
      
    'Use the SetTimout function to call a procedure OUTSIDE
    'this onclick event so that any events that need to 
    'occur on submission are not held up by the size of the
    'image or the speed of the internet connection.
    '(i.e. the btn value change and the label caption change.  
    SetTimeout(PostToWebServer,3000) 'POST TO WEB
    
  Else
      lblPicMsg.textContent =  "Need to take a pic first"
  End If
End Function
