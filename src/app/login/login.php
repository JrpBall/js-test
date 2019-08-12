<!-- ?php @session_start();

    $conn = mysql_connect("localhost","root","");
        mysql_select_db("project_angular", $conn);
        mysql_query("SET NAME UTF8");

    $_POST = json_decode(file_get_contents('php://input'),TRUE);

    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    if($username != null && $password != null){

        $resp['status'] = 'error';

        $SQL = "SELECT * FORM 'login' WHERE 'username' = '".$user."' AND 'password' = '".$pass."' ";
        $query = mysql_query($SQL);
        $num = mysql_num_rows($query);
        $row = mysql_fetch_assoc($query);

        if($num > 0){
            $_SESSION['login'] = true;
            $_SESSION['id_login'] = $row['id'];

            $resp['data'] = $row['nickname'];
            $resp['status'] = 'success';
        }

    }else{
        $resp['status'] = 'required';
    }

    $result = json_encode($resp);

    echo $result;


?> -->
