 //This sample displays an html file in a scrolling HTMLview.
 //It needs to be deployed to run.
if(Left(location,5)=="file:") {
  NSB.MsgBox("This sample need to be deployed to run.");
}

function Main() {
 //The file we are going to display is year.htm.
 //It is included in the manifest, so it will be deployed with the app.
  htm=ReadFile("includes/year.htm");
  if(htm.status != 200 && htm.status!=0) {
    NSB.MsgBox("Could not read file. Are you running from a deployed app? It will not work locally.");
  }

 //The contents of the file are in htm.responseText.
 //For convenience only, let's put it into a local variable.
  s=htm.responseText;
 //we know the file has some stuff at the beginning we want to skip
  p1=InStr(s,"<style>");
  if(p1==0 ) { p1=1; }

 //Load the text into the control
  HTMLview1.innerHTML=Mid(s,p1);
  HTMLview1.refresh();
}

