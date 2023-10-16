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
    
    <link href="../../../css/app.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <script type="text/javascript" src="../../../assets/scripts/drawBarChart.js"></script>
    <style>
        textarea
        {
            resize: none;
            overflow-y: scroll;
            height:50px;
        }
        .xLabels{
            font-size:10px !important;
        }
        .tickLabels{
           font-size:12px !important; 
        }

        .textarea
        {
            height:300px  !important;
            overflow-y: none !important;
        }
    </style>
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
                                            <li><a href="../ui-kits/list.html">Home</a>
                                            </li>
                                            <li><a href="../ui-kits/list.html">Syllabus</a>
                                            </li>
                                            <li><a href="../gantt.html">Gantt</a></li>
                                            <li><a href="../theming.html">PERT</a></li>
                                            </li>
                                            <li><a href="../ui-kits/button.html">Comment</a>
                                            </li>
                                            <li><a href="../ui-kits/card.html">Edit</a>
                                            </li>

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
                                <div class="card" style="background: #F8F8F8;">

                                    <div class="card-body">
                                        <p class="lead text-center mb-4" style="font-weight: bold;">Testing and Validation</p>
                                        <table class="table table-sm mt-2 mb-4">
                                            <tbody>
                                                <tr>
                                                    <td colspan="2"><b style="font-size: 15px;">Project Title:</b> BlogBase Database for Current Affairs</td>
                                                </tr>
                                                <tr>
                                                    <td><b style="font-size: 15px;">Team Number:</b> 6</td>
                                                    <td><b style="font-size: 15px;">Date at Evaluation:</b> <span style="font-style: italic;"> 10th May 2023</span></td>
                                                </tr>
                                                <tr>
                                                    <td width="340px;"><b style="font-size: 15px;">Phases:</b> <span style="font-style: italic;">4</span></td>
                                                    <td style="width:600px;">

                                                        <table class="table table-bordered" style="font-style: italic;">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:10%;font-style: italic;">
                                                                        <label class="form-check">
                                                                            
                                                                            <input class="form-check-input" type="checkbox" value="">
                                                                            <span class="form-check-label" style="font-weight: normal;">
                                                                                All
                                                                            </span>
                                                                            
                                                                        </label>
                                                                    </th>
                                                                    <th style="width:22%;font-style: italic;">
                                                                        <label class="form-check">
                                                                            
                                                                            <input class="form-check-input" type="checkbox" value="">
                                                                            <span class="form-check-label" style="font-weight: normal;">
                                                                                7th Feb, 2023
                                                                            </span>
                                                                            
                                                                        </label>
                                                                    </th>
                                                                    <th style="width:22%;font-style: italic;">
                                                                        <label class="form-check">
                                                                            
                                                                            <input class="form-check-input" type="checkbox" value="">
                                                                            <span class="form-check-label" style="font-weight: normal;">
                                                                                5th Mar, 2023
                                                                            </span>
                                                                            
                                                                        </label>
                                                                    </th>
                                                                    <th style="width:22%;font-style: italic;">
                                                                        <label class="form-check">
                                                                            
                                                                            <input class="form-check-input" type="checkbox" value="">
                                                                            <span class="form-check-label" style="font-weight: normal;">
                                                                                3rd Apr, 2023
                                                                            </span>
                                                                            
                                                                        </label>
                                                                    </th>
                                                                    <th style="width:22%;font-style: italic;">
                                                                        <label class="form-check">
                                                                            
                                                                            <input class="form-check-input" type="checkbox" value="" checked="">
                                                                            <span class="form-check-label" style="font-weight: normal;">
                                                                                10th May, 2023
                                                                            </span>
                                                                            
                                                                        </label>
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                        </table>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b style="font-size: 15px;">Deliverables:</b><br>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:40%;text-align: center;font-style: italic;">Item</th>
                                                                    <th style="width:40%;text-align: center;font-style: italic;">Mode</th>
                                                                    <th style="width:20%;text-align: center;font-style: italic;">Points</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody style="font-style: italic;">
                                                                <tr>
                                                                    <td>ER Diagram</td>
                                                                    <td>Image</td>
                                                                    <td>7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>BCNF Model</td>
                                                                    <td>Text</td>
                                                                    <td>5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Query 1</td>
                                                                    <td>Link</td>
                                                                    <td>9</td>
                                                                </tr>
                                                                <tr bgcolor="#FAEBEB">
                                                                    <td>User Interface</td>
                                                                    <td>Link</td>
                                                                    <td>3</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style="width:700px;">



                                                        <article id="chart">


                                                            <script src="https://code.jquery.com/jquery-3.5.0.slim.min.js"></script>
                                                            <script>
                                                                let data = [[40], [25], [60], [45], [10], [15]];
                                                                let options = {
                                                                    width: 600,
                                                                    height: 200,
                                                                    barSpacing: 25,
                                                                    barLabelPosition: "top",
                                                                    barColour: ["#7B9E87", "#06A94D", "#D2D0BA", "#E5C1BD", "#A49CBF", "#9E7B91", "#BEE1E5"],
                                                                    barLegend: ["", "", "", "", "", ""],
                                                                    barLabelColour: ["white", "white", "white", "white"],
                                                                    barLabelFontSize: 10,
                                                                    // can be top, center, or bottom
                                                                    barLabelPosition: "center",
                                                                    // space between bar and top
                                                                    barPaddingTop: 10,
                                                                    legendFontSize: 10,
                                                                    legendBorderSize: 1,
                                                                    legendBoxSize: 1,
                                                                    xLabels: ["Begin", "1st", "2nd", "3rd", "4th", "Overall"],
                                                                    xLabelFontSize: 10,
                                                                    yTickCount: 1,
                                                                    yTickThickness: 2,
                                                                    yLabelFontSize: 10,
                                                                    yLabelDecimalCount: 0,
                                                                    yLabelColour: "white",
                                                                    yAxisTitle: "",
                                                                    yAxisTitleFontSize: 10,
                                                                    chartTitle: "",
                                                                    titleFontSize: 10,
                                                                    titleFontColour: "white",
                                                                    chartBackgroundColour: "#FFFFFF",
                                                                    chartBorderColour: "white",
                                                                    borderWidth: 2
                                                                };

                                                                let element = "#chart";

                                                                $(document).ready(drawBarChart(jQuery, data, options, element));
                                                            </script>
                                                        </article><br><br>



                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">
                                                        Rubric:<br>
                                                        <textarea class="form-control textarea">https://www.testmysoftware.org</textarea>
                                                    </th>
                                                    <td>


                                                        <table class="table table-bordered" style="font-style: italic;">
                                                           
                                                            <tbody style="height: 300px;display: inline-block;width: 100%;overflow-y: scroll;">
                                                                <tr>
                                                                    <td colspan="5"  style="text-align: center;">Assessment</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="1">&nbsp;</td>
                                                                    <td colspan="1">0.0............3</td>
                                                                    <td colspan="1">3.1............6</td>
                                                                    <td colspan="1">6.1............10</td>
                                                                    <td colspan="1">10 max</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Category</b></td>
                                                                    <td><b>Developing</b></td>
                                                                    <td><b>Competent</b></td>
                                                                    <td><b>Accomplished</b></td>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="vertical-align: top;">User Interface design</td>
                                                                    <td style="vertical-align: top;">
                                                                        a. Some of the functionalities are implemented.<br>
                                                                        b. The interface did not meet aesthetic standards expected.<br>
                                                                        c. Tool choices were flawed.
                                                                    </td>
                                                                    <td style="vertical-align: top;">
                                                                        a. Choice of tools are reasonable.<br>
                                                                        b. Layout is acceptable and some of the functionalities are implemented.
                                                                    </td>
                                                                    <td style="vertical-align: top;">
                                                                        a. Student delivered a fully functional web interface for user interaction for all the expected functions.<br>
                                                                        b. Made prudent choice of tools.<br>
                                                                        c. No known bug or errors present.<br>
                                                                        d. The layout and color schemes are visually pleasant.
                                                                    </td>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                
                                                                
                                                            </tbody>
                                                        </table>


                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div style="height:340px;overflow-y: scroll;">

                                            <table class="table table-sm mt-2 mb-4" >
                                                <tbody>
                                                    <tr>
                                                        <th style="text-align: center;">Strengths</th>
                                                        <td style="text-align: center;"><b>Weaknesses</b></td>
                                                    </tr>
                                                    <tr>
                                                        <th>

                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width:50%;text-align: center;">Student</th>
                                                                        <th style="width:50%;text-align: center;">Instructor</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <textarea class="form-control"></textarea>
                                                                        </td>
                                                                        <td><textarea class="form-control"></textarea></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </th>
                                                        <td>
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width:50%;text-align: center;">Student</th>
                                                                        <th style="width:50%;text-align: center;">Instructor</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <textarea class="form-control"></textarea>
                                                                        </td>
                                                                        <td><textarea class="form-control"></textarea></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style="text-align: center;">Errors/bugs</th>
                                                        <td style="text-align: center;"><b>Comments</b></td>
                                                    </tr>
                                                    <tr>
                                                        <th>

                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width:50%;text-align: center;">Student</th>
                                                                        <th style="width:50%;text-align: center;">Instructor</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <textarea class="form-control"></textarea>
                                                                        </td>
                                                                        <td><textarea class="form-control"></textarea></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </th>
                                                        <td>
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width:50%;text-align: center;">Student</th>
                                                                        <th style="width:50%;text-align: center;">Instructor</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <textarea class="form-control"></textarea>
                                                                        </td>
                                                                        <td><textarea class="form-control"></textarea></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>




                                                </tbody>
                                            </table>

                                        </div>
                                        <br><br><br>
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
