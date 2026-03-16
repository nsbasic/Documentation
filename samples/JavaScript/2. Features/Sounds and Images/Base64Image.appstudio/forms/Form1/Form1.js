 //This sample draws an image which has been loaded in a string.
 //The method used to save the string as in image is base64 encoding.

 //A complete description of what is going on here is in our blog:
 //http://www.appstudio.dev/blog/?p=294

 //This is a string image of a red dot. It's a small dot, so the program does
 //not get cumbersome.
reddot="data:Image/png;base64,";
reddot=reddot  +  "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGP";
reddot=reddot  +  "C/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9YGARc5KB0XV+IA";
reddot=reddot  +  "AAAddEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIFRoZSBHSU1Q72QlbgAAAF1J";
reddot=reddot  +  "REFUGNO9zL0NglAAxPEfdLTs4BZM4DIO4C7OwQg2JoQ9LE1exdlYvBBeZ7jq";
reddot=reddot  +  "ch9//q1uH4TLzw4d6+ErXMMcXuHWxId3KOETnnXXV6MJpcq2MLaI97CER3N0";
reddot=reddot  +  "vr4MkhoXe0rZigAAAABJRU5ErkJggg==";

 //First, let's draw the image in a Image Control.
 //The control interprets the data part of the string and 
 //processes it as an image.
 //Note: You can also set the src property directly to a base64 string
 //in the Image control's properties at design time, without needing code.
Image1.innerHTML="<img src='"  +  reddot  +  "'/>";

 //New, let's draw the image in a PictureBox
pb = PictureBox1.getContext("2d");
pb.addImage(reddot);


Button1.onclick = function() {
 //Display the contents of the PictureBox as a string image
  alert(PictureBox1.toDataURL());
};
