<?php
session_start();

    echo "Start of session ";
    include("Connection.php");

    if(isset($_POST['user_name']))
    {
        $user_name = $_POST['user_name'];
        $query = "SELECT * FROM users WHERE user_name = '$user_name'";
        $result = mysqli_query($con, $query);

        if(mysqli_num_rows($result) > 0)
        {
            header("Location: Password.php");
        }
        else
        {
            echo "Please enter a valid username!";
        }
    }
?>

<html>

		<head>
				<title> Login Page </title>
		</head>
		
		<body>
				<center>

					<h1> Welcome to Secure Login </h1>
					<hr />
					<p> Please Login With Your Username </p>
					
                    <div id = "box">
					    <form method = "POST">
                            <input type = "text" name = "user_name">

                            <input type = "submit" value = "submit">
                        </form>
                    </div>	
				</center>
		</body>

</html>