<?php
 // Get the data from the client.
 $myText = $_GET['myText'];
 // Send back the text, reversed
 echo "Data received from Device (reversed): " . strrev($myText); 
 
 /* Code to do something fancier
    Open a connection to a mySQL database, look for the customer
    and send back information
$con = mysql_connect('localhost', 'nsbasic', 'abc123');
if (!$con) {die('Could not connect: ' . mysql_error())};

mysql_select_db("ajax_demo", $con);
$sql="SELECT * FROM user WHERE id = '".$myText."'";
$result = mysql_query($sql);

// now you can format the return string, then echo it back.
*/

?>
