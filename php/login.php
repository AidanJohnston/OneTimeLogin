<?php

include('connect.php');
$conn = connect();

$uid = mysqli_real_escape_string($conn,$_POST['uid']);
$code = mysqli_real_escape_string($conn,$_POST['code']);


$sql = "SELECT token FROM sessions WHERE uid = '$uid' AND code = '$code'";

$result = mysqli_fetch_all(mysqli_query($conn,$sql));

if ($result) {
    $sql = "SELECT uid FROM users WHERE password = '{$result[0][0]}'";
    $result = mysqli_fetch_all(mysqli_query($conn,$sql));

    if ($result) {
        $response['errorcode'] = 0;
        $response['uid'] = $result[0][0];
    }
    else {
        $response['errorcode'] = 1;
        $response['sql'] = $sql;
    }

}

else {
    $response['errorcode'] = 1;
    $response['sql'] = $sql;
}

echo json_encode($response);

$conn->close();

?>