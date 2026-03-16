'This function shows how to send an email from an NSB/AppStudio program
'It brings up the Mail app with the fields filled in
'The user can then hit send.
'This sample works on a device, but not Chrome on the desktop.

'load some initial values in
txtEmail.value="support@appstudio.dev"
txtSubject.value="NSB/AppStudio eval"
txtBody.value="Wow, this is a great product. It's got amazing potential. I look forward to using it!"

'Send button clicked on
Function butSend_onclick()
  email(txtEmail.value,txtSubject.value,txtBody.value)
End Function

'This function constructs an HTML object which calls the Mail app
'The encodeURI function fixes the text so it is browser friendly.
Function email(t, subject, body)
  location="mailto:" & encodeURI(t) & "?subject=" & encodeURI(subject) & "&body=" + encodeURI(body)
End Function

