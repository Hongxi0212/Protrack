<!DOCTYPE html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "store";

// 创建连接
$conn = new mysqli($servername, $username, $password, $database);

// 检查连接是否成功
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 设置字符集为UTF-8
mysqli_set_charset($conn, 'utf8');

$name = '';
$company = '';

if (isset($_POST['name']) && isset($_POST['company'])) {
    $name = $_POST['name'];
    $company = $_POST['company'];

    if ($name != '' || $company != '') {
        $name = $conn->real_escape_string($name);
        $company = $conn->real_escape_string($company);

        $query = "SELECT * FROM goods WHERE cName LIKE '%$name%' AND cCompany LIKE '%$company'";
        $result = $conn->query($query);
    } else {
        $query = "SELECT * FROM goods";
        $result = $conn->query($query);
    }
}
?>

<html>
<head>
    <meta charset="utf-8">
    <title>Test Page</title>
</head>

<body>
<h1 align="center">Test Page</h1>
<p align="center"><a href="index.php">Back</a></p>

<form action="" method="post" name="formFix" id="formFix">
    <table border="0" align="center" cellpadding="4">
        <p>
        Title:<input name="name" type="text" id="name" value="<?php echo $name?>" />
        Team member name:<input name="company" type="text" id="company" value="<?php echo $company?>" />
        <input type="submit" name="button" id="button" value="Search" /></p>
    </table>
</form>

<p></p>

<table border="1" align="center" cellpadding="4">
   <tr>
    <th>Id</th>
    <th>Name</th>
    <th>date</th>
    <th>123</th>
    <th>123</th>
    <th>123</th>
    <th>123</th>
    <th>123</th>
    <th>123</th>
  </tr>
<?php
if (isset($result)) {
    while ($row = $result->fetch_assoc()) {
?>
  <tr>
    <td><?php echo $row['cID']?></td>
    <td><?php echo $row['cName']?></td>
    <td><?php echo $row['cDay']?></td>
    <td><?php echo $row['cAmount']?></td>
    <td><?php echo $row['cPrice']?></td>
    <td><?php echo $row['cCompany']?></td>
    <td><?php echo $row['cEmail']?></td>
    <td><?php echo $row['cPhone']?></td>
    <td><?php echo $row['cAddr']?></td>
  </tr>
<?php
    }
}

// 关闭数据库连接
$conn->close();
?>
</table>
</body>
</html>
