<!DOCTYPE html>
<html>

<head>
    <title>Flat Admin V.2 - Free Bootstrap Admin Templates</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:300,400' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
    <!-- CSS Libs -->
    <link rel="stylesheet" type="text/css" href="../../lib/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../../lib/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../../lib/css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="../../lib/css/bootstrap-switch.min.css">
    <link rel="stylesheet" type="text/css" href="../../lib/css/checkbox3.min.css">

    <!-- CSS App -->
    <link rel="stylesheet" type="text/css" href="../../css/style.css">
    <link rel="stylesheet" type="text/css" href="../../css/themes/flat-blue.css">
</head>

<body>
    <div class="app-container">
        <div class="row content-container">
            <nav class="navbar navbar-default navbar-fixed-top navbar-top">
                <div class="container-fluid">
                    <img src="../../../img/protrack.png" alt="ProTrack Image" style="max-width: 25%; height: auto;">
                    <ul class="nav navbar-nav navbar-right">
                        <button type="button" class="navbar-right-expand-toggle pull-right visible-xs">
                            <i class="fa fa-times icon"></i>
                        </button>

                        <li class="dropdown profile">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Emily Hart <span class="caret"></span></a>
                            <ul class="dropdown-menu animated fadeInDown">
                                <li>
                                    <div class="profile-info">
                                        <h4 class="username">Happy</h4>
                                        <p>jonna@email.com</p>
                                        <div class="btn-group margin-bottom-2x" role="group">
                                            <button type="button" class="btn btn-default"><i class="fa fa-user"></i> Profile</button>
                                            <button type="button" class="btn btn-default"><i class="fa fa-sign-out"></i> Logout</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="side-menu sidebar-inverse">
                <nav class="navbar navbar-default" role="navigation">
                    <div class="side-menu-container">

                        <ul class="nav navbar-nav">

                            <li class="panel panel-default dropdown">
                                <a data-toggle="collapse" href="#dropdown-element">
                                    <span class="icon fa fa-tachometer"></span><span class="title">ProTrack</span>
                                </a>
                                <!-- Dropdown level 1 -->
                                <div id="dropdown-element" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <ul class="nav navbar-nav">
                                            <li><a href="../../../index.php">Home</a>
                                            </li>
                                            <li><a href="./syllabus.php">Syllabus</a>
                                            </li>
                                            <li><a href="../gantt.html">Gantt</a></li>
                                            <li><a href="../theming.html">PERT</a></li>
                                            </li>
                                            <li><a href="../ui-kits/button.html">Comment</a>


                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </nav>
            </div>
            <!-- Main Content -->
              <body>
        <div class="wrapper">
            

            <div class="main">
                

                <main class="content">
  
                    <div class="container-fluid p-0">

                        <div class="mb-3">
                            <h1 class="h3 d-inline align-middle">Course Syllabus For CS 360</h1>

                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-12">
                                <div class="card">

                                    <div class="card-body">
                                        <p class="lead text-center mb-4" style="font-weight: bold;">Project Plans</p>
                                        <table class="table table-sm mt-2 mb-4">
                                            <tbody>
                                                <tr>
                                                    <th style="font-size: 15px;">Project Title:</th>
                                                    <td>BlogBase Database for Current Affairs</td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Team Number:</th>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <th style="width:200px;font-size: 15px;">Team Members:</th>
                                                    <td>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:25%;">Name</th>
                                                                    <th style="width:25%">ID</th>
                                                                    <th style="width:25%">Contact</th>
                                                                    <th style="width:25%">Designation</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><input type="text" class="form-control" placeholder="Name" value="Jane Doe"></td>
                                                                    <td><input type="text" class="form-control" placeholder="ID" value="123"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Contact" value="janedoe123@yahoo.com"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Designation" value="Leader"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="text" class="form-control" placeholder="Name"  value="John Doe"></td>
                                                                    <td><input type="text" class="form-control" placeholder="ID" value="256"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Contact" value="johndoe256@yahoo.com"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Designation" value="Member"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Meeting Time:</th>
                                                    <td><input type="text" class="form-control" placeholder="" value=" Monday, 4-5 pm"></td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Meeting Place:</th>
                                                    <td><input type="text" class="form-control" placeholder="" value="Commons"></td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Deliverables:</th>
                                                    <td>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:10%;">Task</th>
                                                                    <th style="width:26%;">Item</th>
                                                                    <th style="width:16%">Phase</th>
                                                                    <th style="width:16%">Responsible</th>
                                                                    <th style="width:16%">Mode</th>
                                                                    <th style="width:16%">Comment</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><input type="text" class="form-control" value="1"></td>
                                                                    <td><input type="text" class="form-control" value="User interface"></td>
                                                                    <td><input type="text" class="form-control" value="IV"></td>
                                                                    <td><input type="text" class="form-control" value="John Doe"></td>
                                                                    <td><input type="text" class="form-control" value="Link"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Comment"></td>
                                                                </tr>

                                                                <tr>
                                                                    <td><input type="text" class="form-control" value="1.1"></td>
                                                                    <td><input type="text" class="form-control" value="Login screen"></td>
                                                                    <td><input type="text" class="form-control" value="IV"></td>
                                                                    <td><input type="text" class="form-control" value="John Doe"></td>
                                                                    <td><input type="text" class="form-control" value="Link"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Comment"></td>
                                                                </tr>


                                                                <tr>
                                                                    <td><input type="text" class="form-control" value="1.2"></td>
                                                                    <td><input type="text" class="form-control" value="Signup screen"></td>
                                                                    <td><input type="text" class="form-control" value="IV"></td>
                                                                    <td><input type="text" class="form-control" value="John Doe"></td>
                                                                    <td><input type="text" class="form-control" value="Link"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Comment"></td>
                                                                </tr>

                                                                <tr>
                                                                    <td><input type="text" class="form-control" value="2"></td>
                                                                    <td><input type="text" class="form-control" value="ER Diagram"></td>
                                                                    <td><input type="text" class="form-control" value="I"></td>
                                                                    <td><input type="text" class="form-control" value="Jane Doe"></td>
                                                                    <td><input type="text" class="form-control" value="Image"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Comment"></td>
                                                                </tr>

                                                                <tr>
                                                                    <td><input type="text" class="form-control" value="2.1"></td>
                                                                    <td><input type="text" class="form-control" value="Revise ER Diagram"></td>
                                                                    <td><input type="text" class="form-control" value="I"></td>
                                                                    <td><input type="text" class="form-control" value="Jane Doe"></td>
                                                                    <td><input type="text" class="form-control" value="Image"></td>
                                                                    <td><input type="text" class="form-control" placeholder="Comment"></td>
                                                                </tr>


                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <p align="center"><a href="index.php">Back</a></p>
                                    </div>
                                </div>




                            </div>


                        </div>

                    </div>
                </main>


            </div>
        </div>

       

    </body>
        </div>
        <footer class="app-footer">
            <div class="wrapper">
                © 2023 Copyright.
            </div>
        </footer>
    <div>
    <!-- Javascript Libs -->
    <script type="text/javascript" src="../../lib/js/jquery.min.js"></script>
    <script type="text/javascript" src="../../lib/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../../lib/js/Chart.min.js"></script>
    <script type="text/javascript" src="../../lib/js/bootstrap-switch.min.js"></script>

    <script type="text/javascript" src="../../lib/js/jquery.matchHeight-min.js"></script>
    <script type="text/javascript" src="../../lib/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="../../lib/js/dataTables.bootstrap.min.js"></script>
    <script type="text/javascript" src="../../lib/js/select2.full.min.js"></script>
    <script type="text/javascript" src="../../lib/js/ace/ace.js"></script>
    <script type="text/javascript" src="../../lib/js/ace/mode-html.js"></script>
    <script type="text/javascript" src="../../lib/js/ace/theme-github.js"></script>
    <!-- Javascript -->
    <script type="text/javascript" src="../../js/app.js"></script>
</body>

</html>
