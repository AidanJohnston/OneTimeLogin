<?php
include("connect.php");

$conn = connect();

$username = mysqli_real_escape_string($conn, $_POST["username"]);
$email = mysqli_real_escape_string($conn, $_POST["email"]);

$password = random_bytes(256);

$password_hash = hash('sha256', $password);

$sql = "INSERT INTO users (user_name, email, password) VALUES ('$username', '$email', '$password_hash')";
$result = mysqli_query($conn,$sql);

header("Content-Disposition: attachment; filename=$username.token");
header('Content-Type: text/plain'); # Don't use application/force-download - it's not a real MIME type, and the Content-Disposition header is sufficient
header('Content-Length: ' . strlen($password));
header('Connection: close');
echo $password;

die();
?>