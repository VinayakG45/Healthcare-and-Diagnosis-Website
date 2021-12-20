<?php 

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "healthcare";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if(!$conn){
echo "connection fail";
}
// include "db_connect.php";
session_start(); 
$mail = $_POST['mail'];
$pass = $_POST['pass'];
// echo $mail;
if (isset($_POST['submit'])) {
    # code...

$sql = "SELECT * FROM register WHERE Email='$mail' AND Password='$pass'";

		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result)) {
              header('Location:loggedin.html');

		}else{
            header('Location:index.html');
		}
    }
?>