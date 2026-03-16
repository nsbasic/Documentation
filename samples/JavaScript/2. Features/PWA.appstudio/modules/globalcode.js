function Main() {
  console.log("AppBuildStamp", AppBuildStamp);
  Label1.text = "AppBuildStamp: " + AppBuildStamp;
  NSB.getCurrentCache(showVersion);
}

function showVersion(version) {
  console.log("Cache is", version);
  Label2.text = "Cache name: " + version;
}
