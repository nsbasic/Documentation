'This app sends data to a server and gets a reply using Ajax.
'Ajax is a simple, efficient protocol to get information from a server.
'It works by calling a PHP script that is running on the server. It gets
'input from your app, processes it and returns a result.
'It's like a function that you call, except it's running on your server.

'The PHP script that is called here is http://www.appstudio.dev/sendDataPOST_ajax.php. 
'The app needs to be loaded from the same server as the php script.

'This sample does two things: it returns a string that is reversed.
'It also writes the data that was receieved to a file on the server.

'<?php
' // uncomment the next line To see runtime error messages from this script
' // ini_set('display_errors','1');
' 
' // Get the data from the client.
' $myText = file_get_contents('php://input');
' // Send back the text, reversed
' echo "Data received from Device (reversed):<br>" . strrev($myText); 
' 
' //write the data out To a file On the server
' //make sure permissions are all OK!
' $myFile = "AjaxPost/ajaxPost.txt";
' echo "<p>Writing data to " . getcwd() . $myFile;
' $f = fopen($myFile, 'w') or die("can't open file");
' fwrite($f, $myText);
' fclose($f);
'
'?>

