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
                                        <p class="lead text-center mb-4" style="font-weight: bold;">Syllabus</p>
                                        <table class="table table-sm mt-2 mb-4">
                                            <tbody>
                                                <tr>
                                                    <th><b style="font-size: 15px;">Project Title:</b></th>
                                                    <td>BlogBase Database for Current Affairs</td>
                                                </tr>
                                                <tr>
                                                    <th><b style="font-size: 15px;">Total Points:</b></th>
                                                    <td>60</td>
                                                </tr>
                                                <tr>
                                                    <th style="width:200px;font-size: 15px;">Learning Outcomes:</th>
                                                    <td style="font-style: italic;">
                                                        <div class="btext1">
                                                            By the end of the course, students are expected to be able to model, design, implement and deploy a BCNF/3NF relational database application on a server for the end-users complete with web-based user interfaces.
                                                        </div>   
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Competencies Earned:</th>
                                                    <td style="font-style: italic;">
                                                        <div class="btext1">
                                                            Students will learn to use Flask, MySQL, CKEditor and integration of PDF based newsletter authoring and editing tools.
                                                            <br>
                                                            &nbsp;
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Description of the Project:</th>
                                                    <td style="font-style: italic;">
                                                        <div class="btext1">
                                                        In this project, you will design a blogging database in which readers and writers could come together to discuss current affairs. An editorial board will moderate the submissions and thus will have the authority to edit or disallow content written by an author, or retract contents. Readers will be able to comment on articles, and on other readers’ comments in ways similar to Facebook. All the articles will have to be presented in the form of a newsletter in PDF with active links to multimedia contents such as pictures, videos, sounds and other types of contents. 
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr style="font-style: italic;">
                                                    <th style="font-size: 15px;">Requirements:</th>
                                                    <td>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:50%;">System</th>
                                                                    <th style="width:50%">Software</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>MySQL</td>
                                                                    <td>CKEditor</td>
                                                                    
                                                                </tr>
                                                                <tr>
                                                                    <td>XAMPP</td>
                                                                    <td>WordTune</td>
                                                                    
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                    <td>PDFCreator</td>
                                                                    
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                    <td>Faker/Mockaroo</td>
                                                                    
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style="font-size: 15px;">Number of Phases:</th>
                                                    <td>
                                                        
                                                        
                                                        <table class="table table-bordered"  style="font-style: italic;">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:12%;">4</th>
                                                                    <th style="width:22%">7th February, 2023</th>
                                                                    <th style="width:22%">5th March, 2023</th>
                                                                    <th style="width:22%">3rd April, 2023</th>
                                                                    <th style="width:22%">10th May, 2023</th>
                                                                </tr>
                                                            </thead>
                                                            
                                                        </table>
                                                        
                                                        
                                                        
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th style="font-size: 15px;">Deliverables:</th>
                                                    <td>
                                                        <table class="table table-bordered"  style="font-style: italic;">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width:15%;">Item</th>
                                                                    <th style="width:10%">Phase</th>
                                                                    <th style="width:15%">Mode</th>
                                                                    <th style="width:30%">Assessment Standard</th>
                                                                    <th style="width:20%">Necessity</th>
                                                                    <th style="width:10%">Weight</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>ER Diagram</td>
                                                                    <td>I</td>
                                                                    <td>Image</td>
                                                                    <td>Competent</td>
                                                                    <td>Required</td>
                                                                    <td>10%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>BCNF Model</td>
                                                                    <td>II</td>
                                                                    <td>Text</td>
                                                                    <td>Accompished</td>
                                                                    <td>Required</td>
                                                                    <td>20%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Query 1</td>
                                                                    <td>Open</td>
                                                                    <td>Link</td>
                                                                    <td>Competent</td>
                                                                    <td>Expected</td>
                                                                    <td>40%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>User interface</td>
                                                                    <td>III</td>
                                                                    <td>Link</td>
                                                                    <td>Accompished</td>
                                                                    <td>Required</td>
                                                                    <td>30%</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th style="font-size: 15px;">Assignment Rubrics:</th>
                                                    <td>
                                                        <table class="table table-bordered" style="font-style: italic;">
                                                           
                                                            <tbody style="height: 300px;display: inline-block;width: 100%;overflow: auto;">
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
