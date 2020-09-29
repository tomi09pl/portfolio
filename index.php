<?php

header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: origin, x-requested-with, content-type, accept");
header ("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTP_REFERER'] === "http://localhost:3000/" || $_SERVER['HTTP_REFERER'] === "https://tomaszkawalek.com/" || $_SERVER['HTTP_REFERER'] === "https://www.tomaszkawalek.com/" || $_SERVER['HTTP_REFERER'] === "http://tomaszkawalek.com/" || $_SERVER['HTTP_REFERER'] === "http://www.tomaszkawalek.com/"){
    // extract the data from $_POST
    $data = json_decode(file_get_contents('php://input'), true);
    $decodedData = $data!=null ? $data : null;

    // $name = isset($_GET['name']) ? $_GET['name'] : null;
    // $message = isset($_GET['message']) ? $_GET['message'] : null;
    // $email = isset($_GET['email']) ? $_GET['email'] : null;

    if($decodedData['name'] && $decodedData['message'] && $decodedData['email']){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'hybrydybry@gmail.com';           // SMTP username
            $mail->Password   = '*******';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('hybrydybry@gmail.com', 'TomaszKawalek.com');
            $mail->addAddress('hybrydybry@gmail.com');     // Add a recipient
            $mail->addReplyTo($decodedData['email']);

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'Nowa wiadomosc z tomaszkawalek.com';
            $mail->Body    = 'Name: ' . $decodedData['name'] . '<br />Email: ' . $decodedData['email'] . '<br /><br /><b>Message:</b> ' . $decodedData['message'];

            if($mail->send())
                echo json_encode("Message has been sent!");
        }catch (Exception $e){
            echo json_encode("Message couldn't be sent. Error: ", $mail->ErrorInfo);
        }
    }else{
        echo json_encode("All the fileds are required!");
    }
}else{
    echo json_encode("You can't use this server!");
}
?>
