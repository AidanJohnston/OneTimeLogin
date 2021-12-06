<?php
session_start();

    echo "Start of session ";
    include("Connection.php");

    if(isset($_POST['password']))
    {
        $password = $_POST['password'];
        
        //Query to check if password matches the password for current user
        //$query = "SELECT * FROM users WHERE user_name = '$user_name'";
        $result = mysqli_query($con, $query);

        if(mysqli_num_rows($result) > 0)
        {
            header("Location: Login_Success.html");
        }
        else
        {
            echo "Password is incorrect! Try again...";
        }
    }
?>

<html>
		<head>
				<title> Complete Login Page </title>
		</head>
		
		<body>
				<center>
					
					<h1> Welcome to Secure Login </h1>
					<hr />
					<p> Please Enter Your Password </p>
					
                    
					<div id = "box">
                        <form method = "POST">
                             <input type = "text" name = "password">

                             <input type = "submit" value = "submit">
                        </form>
                    </div>	
					
				</center>
		</body>
</html>