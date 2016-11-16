<?php
// Receive form Post data and Saving it in variables

$name = @$_POST['name'];
$email = @$_POST['email'];
$phone = @$_POST['phone'];
$subject = @$_POST['subject'];
$message = @$_POST['message'];
$vehicle = @$_POST['vehicle'];


// Write the name of text file where data will be store
$filename = "build/docs/demodata.txt";

// Marge all the variables with text in a single variable. 
$f_data= '
Name : '.$name.'
Email :  '.$email.'
Contact Number :  '.$phone.'
Subject :  '.$subject.'
Message: '.$message.'  

==============================================================================
';




//echo 'Form data has been saved to '.$filename.'  <br>
//<a href="'.$filename.'">Click here to read </a> ';
$file = fopen($filename, "a");
fwrite($file,$f_data);
fclose($file);



require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSendmail();

$mail->setFrom('movolytics@gmail.com', 'Movolytics Demo');

//$mail->addReplyTo('deepa.cse11@gmail.com', 'Deepa');

$mail->addAddress('support@movolytics.com', 'Movolytics Team');
//$mail->addAddress('deepa.balasubramanian@movilanalytics.com', 'Deepa');

$mail->Subject = $name . ' send you mail regarding ' .$subject;
$mail->Body = 'Name: ' .$name. "<br/>" . 'Email: ' .$email. "<br/>" . "Phone: " .$phone. "<br/>" . "Subject: " .$subject.  "<br/>" .   " Vehicle: " .$vehicle.  "<br/>" .   " Message: " .$message;

$mail->AltBody = 'We have received feedback in Movolytics';

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
	header('Location: demo');
    echo "Message sent!";
}




header('Location: demo');
?>