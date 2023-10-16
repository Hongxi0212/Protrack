<!DOCTYPE HTML>
<?php 
	header("Content-Type: text/html; charset=utf-8");
	include("connMysql.php");
	$seldb = @mysqli_select_db($db_link, "store");
	if (!$seldb) die("資料庫選擇失敗！");
	
	//預設每頁筆數
	$pageRow_records = 10;
	//預設頁數
	$num_pages = 1;
	//若已經有翻頁，將頁數更新
	if (isset($_GET['page'])) {
	  $num_pages = $_GET['page'];
	}
	//本頁開始記錄筆數 = (頁數-1)*每頁記錄筆數
	$startRow_records = ($num_pages -1) * $pageRow_records;
	//未加限制顯示筆數的SQL敘述句
	$sql_query = "SELECT * FROM `goods`";
	//加上限制顯示筆數的SQL敘述句，由本頁開始記錄筆數開始，每頁顯示預設筆數
	$sql_query_limit = $sql_query." LIMIT ".$startRow_records.", ".$pageRow_records;
	//以加上限制顯示筆數的SQL敘述句查詢資料到 $result 中
	$result = mysqli_query($db_link, $sql_query_limit);
	//以未加上限制顯示筆數的SQL敘述句查詢資料到 $all_result 中
	$all_result = mysqli_query($db_link, $sql_query);
	//計算總筆數
	$total_records = mysqli_num_rows($all_result);
	//計算總頁數=(總筆數/每頁筆數)後無條件進位。
	$total_pages = ceil($total_records/$pageRow_records);
?>

<html>

<head>
	<title>index</title>
	<meta charset="utf-8">
	<link href="css/style.css" rel="stylesheet" type="text/css"  media="all" />
</head>

<body>
<div class="wrap">
	<div class="header">
		<div class="logo"><img src="img/protrack.png" /></div>
		<div class="clear"></div>
	</div>

<div class="content">
    <div class="sidebar">
    	<div class="side">
            <h3>Total number of courses submitted:<?php echo $total_records;?></h3>
            <ul>
                <li><a href="add_project_plan.php" target="iframe_a">Creat project plan(student)</a></li>
                <li><a href="add_syllabus.php" target="iframe_a">Creat syllabus(teacher)</a></li>
                <li><a href="select.php">Database query</a></li>
            </ul>
        </div>
    </div>
	
	<div class="main">
	<?php
	while($row_result=mysqli_fetch_assoc($result)){
	?>
        <div class="grid">
        	<div class="prev"><img src="img/sql.png" /></div>
            <ul class="details">
                <li>Project Title:<?php echo $row_result["cName"]?></li>
                <li>Team Number:<?php echo $row_result["cAmount"]?></li>
                                <li><?php echo "<a href='./src/html/table/table.php?id=".$row_result["cID"]."'>View</a>"?></li>
				<li><?php echo "<a href='update.php?id=".$row_result["cID"]."'>Edit</a>"?></li>
				<li><?php echo "<a href='delete.php?id=".$row_result["cID"]."'>Delete</a>"?></li>
                                <li><?php echo "<a href='./src/html/table/testing_plan_validation.php?id=".$row_result["cID"]."'>Testing and Validation</a>"?></li>
            </ul>
            <div class="clear"></div>
        </div>
	<?php 
	}
	?>
    </div>
	
	<div class="grid" style="margin-left:425px; background-color:#FFAC55;">
	<tr>
		<?php if ($num_pages > 1) { // 若不是第一頁則顯示 ?>
		<td><a href="index.php?page=1">1</a></td>
		<td><a href="index.php?page=<?php echo $num_pages-1;?>">Last</a></td>
		<?php } ?>
		<?php if ($num_pages < $total_pages) { // 若不是最後一頁則顯示 ?>
		<td><a href="index.php?page=<?php echo $num_pages+1;?>">Next</a></td>
		<td><a href="index.php?page=<?php echo $total_pages;?>">Final</a></td>
		<?php } ?>
	</tr>
	
	
	<tr>
		<td>
		  Page：
		  <?php
		  for($i=1;$i<=$total_pages;$i++){
			  if($i==$num_pages){
				  echo $i." ";
			  }else{
				  echo "<a href=\"index.php?page=$i\">$i</a> ";
			  }
		  }
		  ?>
		</td>
	</tr>
	</div>
	
<div class="clear"></div>
</div>
</div>
<!--------------------------------------->
<div class="wrap">
<div id="bg_footer">	
    <div class="clear"></div>
    <div class="copy">Copyright &copy; 2023.ZY.W HX.Z ZR.Q.</div>
</div>
</div>
</body>
</html>
