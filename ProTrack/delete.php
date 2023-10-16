<!DOCTYPE html>
<?php 
include("connMysql.php");
if (!@mysqli_select_db($db_link, "store")) die("資料庫選擇失敗！");
if(isset($_POST["action"])&&($_POST["action"]=="delete")){	
	$sql_query = "DELETE FROM `goods` WHERE `cID`=".$_POST["cID"];
	mysqli_query($db_link, $sql_query);
	//重新導向回到主畫面
	header("Location: index.php");
}
$sql_db = "SELECT * FROM `goods` WHERE `cID`=".$_GET["id"];
$result = mysqli_query($db_link, $sql_db);
$row_result=mysqli_fetch_assoc($result);
?>
<html>
<head>
	<meta charset="utf-8">
	<title>delete</title>
</head>
<body>
<h1 align="center">Project Plan - Detect</h1>
<p align="center"><a href="index.php">Back</a></p>
<form action="" method="post" name="formDel" id="formDel">
  <table border="1" align="center" cellpadding="4">
        <tr>
      <th>Field</th><th>Content</th>
    </tr>
    <tr>
      <td>Project Title</td><td><input type="text" name="cName" id="cName"></td>
    </tr>
    <tr>
      <td>Team Number</td><td><input type="text" name="cDay" id="cDay"></td>
    </tr>
	 <tr>
      <td>Team Members</td>
    </tr>
	 <tr>
      <td>Name</td><td><input type="text" name="cPrice" id="cPrice"></td>
    </tr>
	<tr>
      <td>Id</td><td><input type="text" name="cCompany" id="cCompany"></td>
    </tr>
    <tr>
      <td>Contact</td><td><input type="text" name="cEmail" id="cEmail"></td>
    </tr>
    <tr>
      <td>Designation</td><td><input type="text" name="cPhone" id="cPhone"></td>
    </tr>
    <tr>
      <td>Meeting Time</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>
    <tr>
      <td>Deliverables</td>
    </tr>
    <tr>
      <td>Task</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>
    <tr>
      <td>Item</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>
    <tr>
      <td>Phase</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>
    <tr>
      <td>Responsible</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>
    <tr>
      <td>Mode</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>
    <tr>
      <td>Comment</td><td><input name="cAddr" type="text" id="cAddr" size="40"></td>
    </tr>  
    <tr>
      <td colspan="2" align="center">
      <input name="cID" type="hidden" value="<?php echo $row_result["cID"];?>">
      <input name="action" type="hidden" value="delete">
      <input type="submit" name="button" id="button" value="Are You Sure to Detect？">
      </td>
    </tr>
  </table>
</form>
</body>
</html>