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
*/;

Button1.onclick = function() {
  location = "twitter://timeline";
};

Button2.onclick = function() {
  location = "twitter://user?screen_name=appstudiomobile";
};

Button3.onclick = function() {
  location = "twitter://mentions";
};

Button4.onclick = function() {
  location = "twitter://messages";
};

Button5.onclick = function() {
 var s;

  if(txtMessage.text=="") {
    NSB.MsgBox("No message.");
    return;
  }

  s = "twitter://post?message="  +  encodeURIComponent(txtMessage.text);
  location = s;
};

 //If you want to tweet an image, you need to use a more sophisticated interface:
 //https://dev.twitter.com/docs/api/1/post/statuses/update_with_media
