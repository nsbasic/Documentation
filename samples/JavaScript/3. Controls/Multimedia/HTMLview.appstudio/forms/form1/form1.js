 //This sample shows some of the things you can do with the HTMLview control.
 //It starts by showing some text and images in a scrolling area.
 //You can then add text to the existing contents,
 //Replace it with a map,
 //Or display a .htm file.

function Main() {
 //Set up the initial contents. 
  HTMLview1.innerHTML="This is an <b>HTMLview</b> with scrolling.</b><br><img src=includes/mario.jpg width=100 height=200><br><img src=includes/mario.jpg width=100 height=200>";
 //reset the scroll area
  HTMLview1.refresh();
}

Button1.onclick = function() {
 //Add some text to the existing contents.
  HTMLview1.innerHTML=HTMLview1.innerHTML  +  "<br>Length is "  +  Len(HTMLview1.innerHTML);
  HTMLview1.refresh();
};

Button3.onclick = function() {
 //This will only work when deployed to a server. See ReadFile documentation.
 //Notice that year.htm is in the manifest, so it will be deployed with the app.
  htm=ReadFile("includes/year.htm");
  if(htm.status == 200) {
    HTMLview1.innerHTML=htm.responseText;
    HTMLview1.refresh();
 } else {
    NSB.MsgBox("Could not read file. Are you running from a deployed app? It will not work locally.");
  }
};

Button4.onclick = function() {
  HTMLview1.innerHTML="<iframe src='includes/year.pdf' width=310 height=260 ></iframe>";
  HTMLview1.refresh();
};

Button5.onclick = function() {
  HTMLview1.innerHTML="<iframe frameborder='0' allowfullscreen src='https://www.youtube.com/embed/eDF7QRC3c3Y?feature=player_detailpage'></iframe>'";
  HTMLview1.refresh();
};
