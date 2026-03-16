'This sample emails the content of the form's input fields

' See http://www.formspree.com for more info

Function btnSubmit_onclick()
  'Send the form's data to the service
  data = {}
  data.message = txtMessage.value
  data.name = txtName.value
  data.email = txtEmail.value
  data._subject = "Form data sent via Formspree"
  data.data = "george"
  
  settingsObject={}
  settingsObject.data = data
  settingsObject.url = "//formspree.io/gh@nsbasic.com"
  settingsObject.method = "POST"
  settingsObject.dataType = "json"
  settingsObject.success = done
  settingsObject.fail = done
  console.log(settingsObject)
  req = Ajax(settingsObject)
End Function

Function done()
  If req.status = 200 Then 'success
    MsgBox req.responseText
  Else 'failure
    msg = "Error: Status = " & req.status
    If TypeName(req.statusText)="string" Then msg = msg & " " & req.statusText
    If TypeName(req.err)="string" Then msg = msg & " " & req.error
    MsgBox msg
  End If
End Function