 // Web Sharing
 // https://developers.google.com/web/updates/2016/09/navigator-share

if !navigator.share Then MsgBox "Web Sharing not supported in this browser." 

function Button1_onclick()
  Dim args = {}
  args.title = "WebShare Title"
  args.text = "Here is some text"
  args.url = "https://appstudio.dev"
  
  navigator.share(args).then(successCB).catch(failCB)
End function

function successCB()
  ' success - Sharing slip should display
End function

function failCB(error)
  MsgBox error.message
End Function

Sub Main()
  Dim parsedURL
  parsedURL = new URL(window.location)
  ' searchParams.get() will properly handle decoding the values.
  If parsedURL.searchParams.get("title") = null Then Exit Sub   
  MsgBox "Title shared: " & parsedURL.searchParams.get("title") & vbCRLF _
    & "Text shared: " & parsedURL.searchParams.get("text") & vbCRLF _
    & "URL shared: " & parsedURL.searchParams.get("url")
End Sub