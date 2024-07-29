<?php

include 'connection.php';

if($_SERVER['REQUEST_METHOD']== 'POST'){

    $username = $_POST['username'];
    $email = $_POST['username'];
    $password = $_POST['username'];

    $query = " SELECT * FROM `signup` WHERE username= '$username' AND email= '$email' AND password='$password'";

    $result = $conn->query($query);

    if($result->num_rows == 1){
        header('Location: platform.php');
        exit();
    }else{
        exit();
    }

    $conn->close();
        // if(!empty($username) || !empty($email) || !empty($password)){

        //     $insert = "INSERT INTO `signup`(`username`, `email`, `password`) VALUES ('$username', '$email', '$password')";

        // }

        
}

?>