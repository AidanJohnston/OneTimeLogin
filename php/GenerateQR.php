<?php
include ("qr/qrlib.php");
include("connect.php");

// generate unique id and random key
$id = uniqid("", true);
$key = random_int(0, 999999);
$key = str_pad($key, 6, 0, STR_PAD_LEFT);

$conn = connect();

$sql = "INSERT INTO sessions (uid, code) VALUES ('$id', '$key')";

$result = mysqli_query($conn,$sql);

ob_start();
QRcode::png($id, false, 'L', 10, 2); 
$png = base64_encode( ob_get_contents() );
ob_end_clean();

$json['file'] = $png;
$json['uid'] = $id;

echo json_encode($json);

$conn->close();
?>