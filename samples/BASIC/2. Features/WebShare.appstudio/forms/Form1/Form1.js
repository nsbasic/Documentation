 // Web Sharing
 // https://developers.google.com/web/updates/2016/09/navigator-share

if (!navigator.share) NSB.MsgBox("Web Sharing not supported in this browser.");

navigator.share({
  title: 'WebShare Title',
  text: 'Here is some text',
  url: 'https://appstudio.dev',
})
  .then(() => console.log('Successful share'))
  .catch((error) => NSB.MsgBox('Error sharing', error.message));

function Main() {
  var parsedURL = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  if (parsedURL.searchParams.get("title") == null) return;
  NSB.MsgBox("Title shared: " + parsedURL.searchParams.get("title") + '\n' + 
    "Text shared: " + parsedURL.searchParams.get("text") + '\n' +  
    "URL shared: " + parsedURL.searchParams.get("url"));
}