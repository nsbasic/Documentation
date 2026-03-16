 //This app shows a neat little trick.
 //An HTMLview can contain HTML, of course. 
 //HTML can contain JavaScript, 
 //which can call functions in your program.
 //
 //Here's the HTML:
 //You can Call a Function in your app from a link in an HTMLview.
 //<p>Example:<br>
 // &lt;a href='javascript:MyFunction();'>Text to click&lt;/a>
 //<p>Give it a Try:
 //<a href='javascript:MyFunction();'>Text to click</a>
 //
 //So, you could display an HTML page which has hot links to code in your app.

function MyFunction() { var returnValue="";
  NSB.MsgBox("MyFunction called");
   returnValue  = false;
return returnValue; }
