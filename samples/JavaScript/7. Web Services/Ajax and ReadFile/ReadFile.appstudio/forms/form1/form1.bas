Function btnReadFileLocal_onclick()
  'In this function, we read the contents of a local file and put it in a textarea.
  'Of course, you could do a lot more than just put it in a text area. 
  'You could process the information as data within your program.
  'A local file is one that is deployed with your app.
  txtWhy.value="Read contents of local file 'datafile.txt'."
  filename="datafile.txt"
  req=ReadFile(filename)
  'Normally, a sucessful read has a status of 200. Some versions of iOS return 0.
  If req.status=200 Or req.status=0 Then
    txtWhy.value="Contents of local file 'datafile.txt'."
    Textarea1.value=req.responseText
  Else
    Textarea1.value = "File could not be read. (" & req.status & ")"
  End If
End Function

Function btnGetLocalData_onclick()
  'In this function, we execute the contents of a local file, 
  'which contains JavaScript.
  'A local file is one that is deployed with your app.
  txtWhy.value="Execute local file 'datafile.js', which calls processData() to update the textbox below."
  Textarea1.value=""
  head = document.getElementsByTagName("head")[0]
  newScript = document.createElement("script")
  newScript.src = "datafile.js"
  head.appendChild(newScript)    
End Function

Function btnReadFileRemote_onclick()
  'This is the same as ReadFileLocal above, except this file is located on the server.
  'It is useful for data that could change at any time.
  'The app would get the latest data from the server.
  'The file has to be on the same server as where the app originated.
  filename="datafile.js"
  req=ReadFile(filename)
  If req.status=200 Then
   txtWhy.value="Contents of remote file 'https://www.appstudio.dev/i/ReadFile/datafile.js'."
    Textarea1.value=req.responseText
  Else
    Textarea1.value = req.err
  End If  
End Function

Function btnGetRemoteData_onclick()
  'This is like GetLocalData above, except it executes a remote file.
  'What is interesting is that the file does not have to be on the
  'same server as the app was run from, which ReadFileRemote required.
  txtWhy.value="Execute remote file 'https://www.appstudio.dev/i/ReadFile/datafile.js', which calls processData() to update the textbox below."
  Textarea1.value=""
  head = document.getElementsByTagName("head")[0]
  newScript = document.createElement("script")
  newScript.src = "datafile.js"
  head.appendChild(newScript)    
End Function

Function processData(s)
  'This function is called by the JavaScript scripts that are run
  'in GetLocalData and GetRemoteData.
  data=Split(s,",")
  Textarea1.value=""
  For i=0 To UBound(data)
    Textarea1.value=Textarea1.value & data[i] & vbCRLF
  End If
End Function
