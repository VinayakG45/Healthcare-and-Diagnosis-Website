<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone = $_POST['phoneno'];
$date = $_POST['date'];
$message = $_POST['message'];

$email_form = 'info@youwebsite.com';
$email_subject = 'New Form Submission';
$email_body =  "User Name: $name.\n". 
                "User Email: $visitor_email.\n".
                "Phone NO: $phome\.n". 
                "User Message: $message\.n";
            
 $to = 'rizwanjamadar19@gmail.com';

 $headers = "From: $email_form \r\n";

 $headers .= "Reply-To: $visitor_email \r\n";

 mail($to,$email_subject,$email_body,$headers);

 header("Location: index.html");
              
?>
