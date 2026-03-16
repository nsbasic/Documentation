'This app sends data to a server and gets a reply using Ajax.
'Ajax is a simple, efficient protocol to get information from a server.
'It works by calling a PHP script that is running on the server. It gets
'input from your app, processes it and returns a result.
'It's like a function that you call, except it's running on your server.

'The PHP script that is called here is sendData_ajax.php. 
'It is deployed with the project from the Samples folder.

'Here is what the php script looks like:
'<?php
' $myText = $_GET['myText'];
' // Send back the text, reversed
' echo "Data received from Device (reversed): " . strrev($myText); 
'?>