<?php
 // uncomment the next line to see runtime error messages from this script
 // ini_set('display_errors','1');
 
 // Get the data from the client.
 $myText = file_get_contents('php://input');
 // Send back the text, reversed
 echo "Data received from Device (reversed):<br>" . strrev($myText); 
 
 //write the data out to a file on the server
 //make sure permissions are all OK!
 $myFile = "ajaxPost.txt";
 echo "<p>Writing data to " . getcwd() . "/" . $myFile . "\n";
 $f = fopen($myFile, 'w') or die("Error: Can't open file. Got write permission?");
 fwrite($f, $myText);
 fclose($f);

?>
