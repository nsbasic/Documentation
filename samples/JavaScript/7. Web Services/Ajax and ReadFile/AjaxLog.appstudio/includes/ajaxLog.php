<?php
  // write and append file
  $myFile = "AjaxLog/log.txt";
  $f = fopen($myFile, 'a') or die("can't open file");
  fwrite($f, $_GET['myText'] . Chr(13) . Chr(10));
  fclose($f);
?>