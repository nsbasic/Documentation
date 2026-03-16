/*
twitter://list?screen_name=lorenb&slug=abcd
twitter://mentions          'iOS
twitter://messages          'iOS or Android
twitter://post?message=hello%20world  'Android or iOS
twitter://post?message=hello%20world&in_reply_to_status_id=12345
twitter://search?query=%23hashtag
twitter://status?id=12345    'status of a message. iOS only.
twitter://timeline           'iOS or Android
twitter://user?id=12345      'iOS or Android
twitter://user?screen_name=lorenb
*/

Function Button1_onclick()
  location = "twitter://timeline"
End Function

Function Button2_onclick()
  location = "twitter://user?screen_name=appstudiomobile"
End Function

Function Button3_onclick()
  location = "twitter://mentions"
End Function

Function Button4_onclick()
  location = "twitter://messages"
End Function

Function Button5_onclick()
  Dim s
  
  If txtMessage.text="" Then
    MsgBox "No message."
    Exit Function
  End If
  
  s = "twitter://post?message=" & encodeURIComponent(txtMessage.text)
  location = s
End Function

'If you want to tweet an image, you need to use a more sophisticated interface:
'https://dev.twitter.com/docs/api/1/post/statuses/update_with_media
