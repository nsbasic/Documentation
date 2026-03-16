 //make sure you set media-src * blob:; in contentSecurityPolicy.

 function Main() {
     context = PictureBox1.getContext("2d");
     videoObj = {
         "video": true
     };

     //Put video listeners into place
     if ((navigator.webkitGetUserMedia)) {
         navigator.webkitGetUserMedia(videoObj, videoBack, errBack);
     }
 }

 function videoBack(stream) {
     console.log(stream);
     Video1.srcObject = stream;
     Video1.play();
 }

 function errBack(error) {
     NSB.MsgBox("Video capture error: " + error);
 }

 Button1.onclick = function() {
     context.drawImage(Video1, 0, 0, 320, 240);
     imageb64 = PictureBox1.toDataURL() // in PNG Format;
     console.log(imageb64);
 }