<?php

include("connect.php");

$conn = connect();

$qr = mysqli_real_escape_string($conn, $_POST["qr"]);

if (count($_FILES) > 0) {
        $filename = $_FILES['file']['name'];
        $file = $_FILES['file'];
        $stringFile = file_get_contents($file['tmp_name']);

        $password_hash = hash('sha256', $stringFile);

        $sql = "UPDATE sessions 
                SET token = '$password_hash' 
                WHERE uid = '$qr'";

        $resultPwd = mysqli_query($conn,$sql);

        if ($resultPwd) {
                $sql = "SELECT code FROM sessions WHERE uid = '$qr'";
                $result = mysqli_fetch_all(mysqli_query($conn,$sql));
        
                if ($result) {
                       $response['code'] = $result[0][0];
                       $response['errorcode'] = 0;
                }
                // bad qr code
                else {
                      $response['errorcode'] = 1;
                }
        }
        // Not good token
        else {
                $response['errorcode'] = 3;
        }
}
// no token file
else {
        $response['errorcode'] = 2;
}

echo json_encode($response);

?>