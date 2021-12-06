<?php


$conn = connect();

//$sql = "SELECT pwd FROM users WHERE user_name = {$_POST['username']}";

//$result = mysqli_query($conn,$sql);

//echo json_encode(mysqli_fetch_all($result));
echo "test";
foreach ($_GET as $value)
    echo $value;
echo "test";
foreach ($_POST as $value)
    echo $value;
echo "test";
foreach ($_REQUEST as $value)
    echo $value;

$conn->close();

?>