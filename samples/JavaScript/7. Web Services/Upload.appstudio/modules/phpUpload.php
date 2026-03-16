<?php
if (!is_dir('./uploads')) {
  mkdir('./uploads');
}

$file = basename($_REQUEST['file']);
$content = $_REQUEST['content'];

file_put_contents('./uploads/'.$file, $content);
