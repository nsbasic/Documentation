'This function shows how to do email, phone, Skype and SMS.
'It brings up the Mail app with the fields filled in
'The user can then hit send.
'This sample works on devices, but not Chrome on the desktop.

txtEmail.value="support@appstudio.dev"
txtSubject.value="NSB/AppStudio"
txtBody.value="Wow, this is a great product. It's got amazing potential. I look forward to using it!"

Function butEmail_onclick()
  email(txtEmail.value,txtSubject.value,txtBody.value)
End Function

Function butPhone_onclick()
  phone(txtPhone.value)
End Function

Function butSkype_onclick()
  skype(txtPhone.value)
End Function

Function email(t, subject, body)
  location.href="mailto:" & encodeURI(t) & "?subject=" & encodeURI(subject) & "&body=" & encodeURI(body)
End Function

Function phone(tel)
  location.href="tel:" & tel
End Function

Function skype(tel)
  location.href="skype:" & tel
End Function

Function sms(tel, body)
  If InStr(navigator.appVersion, "iPhone") Then
    location.href="sms:" & tel & "&body=" & encodeURI(body)
  Else
    location.href="sms:" & tel & "?body=" & encodeURI(body)
  End If
End Function

Function butSMS_onclick()
  'Needs iOS 4 or Android
  'sending body is not currently supported on iOS
  'phone cannot have spaces or punctuation
  'multiple phone numbers can be separated by commas
  sms(txtPhone.value,txtBody.value)
End Function 