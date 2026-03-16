GetJSON("http://api.ipify.org?format=jsonp&callback=?" ,"" ,getip);

function getip(JSON) {
  NSB.MsgBox("My IP address is "  +  JSON.ip);
}