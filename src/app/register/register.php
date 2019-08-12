<!-- ?php

$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
$nickname = filter_input(INPUT_POST, 'nickname');
$email = filter_input(INPUT_POST, 'email');

if (!empty($username)){
    if(!empty($password)){
        if(!empty($nickname)){
            if(!empty($email)){

                $host = "localhost";
                $dbusername = "root";
                $dbpassword = "123456";
                $dbname = "jstest";
        
                //Create Connection
                $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
        
                if(mysqli_connect_error()){
                    die('Connect Error ('. mysqli_connect_error() .')' . mysqli_connect_error());
                }
                else{
                    $sql = "INSERT INTO `user`(`username`, `password`, `nickname`, `email`) VALUES ('$username','$password','$nickname','$email')";
                    if ($conn->query($sql)){
                        echo "New record is inserted successfully";
                    }
                    else {
                        echo "Error: ".$sql."<br>".$conn->error;
                    }
                    $conn->close();
                }

            }
            else{
                echo "Email should not be empty";
                die();
            }
        }
        else{
            echo "Nickname should not be empty";
            die();
        }
       
    }
    else{
        echo "Password should not be empty";
        die();
    }
}
else{
    echo "Username should not be empty";
    die();
}

?> -->


<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Header: *');

$requestURI = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

if($requestMethod == 'OPTIONS') exit();

$database = new mysqli('127.0.0.1','root','123456','jstest');
if ($database->connect_error) exit($database->connect_error);

switch($requestURI) {
    case '/api/account/login' : 
        $input = file_get_contentes('php://input');
        $postRequest = json_decode($input);
        break;

    case '/api/account/register' : 
        $input = file_get_contentes('php://input');
        $data = json_decode($input);
        $data->nickname = '';
        $data->email = '';

        $sql = 'INSERT INTO user (username, password, nickname, email) VALUES (?,?,?,?)';
        $statement = $database->prepare($sql) or die(response_json(['message' => $statement->error], 400)); 
        $statement->bind_param('ssss',
            $data->username,
            $data->passwrd,
            $data->nickname,
            $data->email
        );
        $statement->execute() or die(response_json(['message' => $statement->error], 400));
        $query = $database->query('SELECT * FROM user WHERE id=' . $database->insert_id);
        response_json($query->fetch_assoc());
        break;
}


function response_json ($data, $status = 200)
{
    http_response_code($status);
    header('Content-Type: Application/json');
    exit(json_encode($data));
}
?>