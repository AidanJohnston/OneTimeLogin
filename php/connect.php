<?php

    function connect() {
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '12345';
    $dbname = 'brandname';

    $conn = mysqli_connect($dbhost,$dbuser,$dbpass);
    if(!$conn) {
            die('Could not connect: ' .mysqli_error($conn));
    }
    if(!mysqli_select_db($conn,$dbname))
        die("Cannot select database");

    return $conn;
    }
?>