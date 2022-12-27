<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "something@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
        $sender = "From: $email";

        if(mail($receiver, $subject, $body, $sender)) {
            echo "Your message has been sent";
        } else echo "Sorry, failed to send your message";
    } else echo "Invalid email";
} else echo "Email and message required";