<?php

include('connect.php');

$conn = connect();

$uid = mysqli_real_escape_string($conn,$_POST['uid']);

$sql = "SELECT user_name FROM users WHERE uid = '$uid'";

$result = mysqli_fetch_all(mysqli_query($conn,$sql));

if ($result) {
    $response['errorcode'] = 0;
    $response['username'] = $result[0][0];
}
else {
    $response['errorcode'] = 1;
}

echo json_encode($response);

?>