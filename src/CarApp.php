<?php
// define variables and set to empty values
$unameERR = $pswERR = = "";
$uname = $psw = = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["uname"])) {
    $unameErr = "Name is required";
  } else {
    $uname = test_input($_POST["uname"]);
  }

  if (empty($_POST["psw"])) {
    $pswErr = "Password is required";
  } else {
    $psw = test_input($_POST["psw"]);
  }
 }

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>