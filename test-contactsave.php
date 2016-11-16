<
/**
 * This example shows sending a message using a local sendmail binary.
 */

require MailerMailerAutoload';

$name = @$_POST['name'];
$email = @$_POST['email'];
$phone = @$_POST['phone'];
$phone = @$_POST['message'];


$mail = newMailer;

$mail->isSendmail();

$mail->setFrom('deepa.cse11@gmail.com', 'Deepa');

$mail->addReplyTo('deepa.cse11@gmail.com', 'Deepa');

$mail->addAddress('deepa.balasubramanian@movilanalytics.com', 'Deepa');

$mail->Subject = $name . 'send you mail regarding website';
$mail->Body = Mailer sendmail test';

$mail->AltBody = 'This is a plain-text message body';

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
?>