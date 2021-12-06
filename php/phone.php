<?php

include("connect.php");

$conn = connect();

$qr = mysqli_real_escape_string($conn, $_POST["qr"]);

$sql = "SELECT code FROM sessions WHERE uid = '$qr'";

$result = mysqli_query($conn,$sql);

echo mysqli_fetch_all($result)[0][0];
?>