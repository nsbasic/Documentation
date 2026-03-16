CreateEle("img" ,"img" ,300,200,10,10);
img.src = "includes/BlackDino.jpg";

reader = new FileReader();
var e;
function CreateEle(id, type, width, height, Left, top) {

 var newele;
  newele = document.createElement(type);
  newele.setAttribute("id" , id);
  newele.style.position = "absolute";
  nsbDOMAttr(newele,'style.width', width  +  "px");
  nsbDOMAttr(newele,'style.height', height  +  "px");
  nsbDOMAttr(newele,'style.left', Left  +  "px");
  nsbDOMAttr(newele,'style.top', top  +  "px");
  newele.style.background = "white";
  newele.style.border = "1px solid #000";
 //newele.innerHTML = HTML
  document.body.appendChild(newele);
}

txtGetPicture.onchange = function() {
 //This gets called after the picture is chosen. 
 //Next, let's read start reading it in.
 //The _onload function will be called when that completes.
  reader.readAsDataURL(txtGetPicture.files[0]);
  e=event;
};

reader.onload = function(e) {
 //read of the file is complete.
 //Now, let's load it into an image.
 //The _onload function for the image will be called on completion.
  img.src=e.target.result;
};

Reset.onclick = function() {
  Pixastic.revert(img);
};

Glow.onclick = function() {
    Pixastic.process(img, "glow" , {amount:0.5,radius:1.0});
};

Invert.onclick = function() {
  Pixastic.process(img, "invert");
};

Noise.onclick = function() {
   Pixastic.process(img,"noise" , {mono:true,amount:0.5,strength:0.5});
};

FlipH.onclick = function() {
  Pixastic.process(img, "fliph");
};

FlipV.onclick = function() {
  Pixastic.process(img, "flipv");
};

Edge.onclick = function() {
  Pixastic.process(img, "edges" , {mono:true,Invert:false});
};

Emboss.onclick = function() {
  Pixastic.process(img, "emboss" , {greyLevel:100,direction:"topright"});
};

Blur.onclick = function() {
  Pixastic.process(img, "blur");
};

Button1.onclick = function() {
  NSB.Print(("Ways to save the image file:<p>1. To a file using PhoneGap.<p>2. To a database using SQLite.<p>3. To a server using Ajax.<p>4. To a DropBox account") + "<br>");
};
