Sub Main()
  console.log("AppBuildStamp", AppBuildStamp)
  Label1.text = "AppBuildStamp: " & AppBuildStamp
  NSB.getCurrentCache(showVersion);
End Sub

Function showVersion(version)
  console.log("Cache is", version);
  Label2.text = "Cache name: " & version
End Function
