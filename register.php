<?php
    
    $server = "localhost";
    $username = "root";
    $password = "";
    
    // Create a database connection
    $con = mysqli_connect($server, $username, $password);
    
    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }

        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $pass = $_POST['pass'];
        $phone = $_POST['phone'];

        // $sql1 = "SELECT * FROM register WHERE email='$mail' AND password='$pass'";
        // if($sql1 == true){
        //     echo "Already user";
        // }

		// $result = mysqli_query($conn, $sql1);

		// if (mysqli_num_rows($result)) {
        //     echo "successfully logged in";
			
		// }else{
        //     echo "successfully logged out";
		// }
    
        $sql = "INSERT INTO `healthcare`.`register` (`Name`,`Email`,`Password`,`Phone`) VALUES ('$name','$mail','$pass','$phone');";

        // echo($sql);
        if($con->query($sql) == true){
            // echo "Successfully inserted";
            // Flag for successful insertion
            $insert = true;
            header('Location:index.html');
        }

    else{
            echo "ERROR: $sql <br> $con->error";
        }
    

        // Close the database connection
        $con->close();
    
?>