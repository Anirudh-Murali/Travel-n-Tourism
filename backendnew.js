<html>
<head>

  <script src="js/jquery.min.js"></script>
<script src="js/materialize.min.js"></script>
<!--<script src="js/materialize.js"></script>-->
  <script src="js/backend.js"></script>
    <link href="design/frontend.css" rel="stylesheet">
      <link rel="stylesheet" href="design/animate.css" >
	  <script src="js/TweenMax.min.js"></script>
      <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
</head>
<body style="overflow:hidden"  >
	
	<div style="overflow:hidden" id="appMainScreen" onload="resolution()">
	<div id="flash" >
	<img src="assets/images/33.gif" height="100%" width="100%" onload="login()"/>
	<div id="heading">My App</div>
	</div>
	<div id="pageOne" onload="pageone()">
		<div id="pageOneFoot" onclick="clicki()"></div>
		<div id="pageOneCircle" onclick="nexti()"></div>
		<div id="Next" onclick="nexti()">Next</div>
                 <div id="Next1" onclick="next1()">Next</div>
		<div id="skip" onclick="clicki()">Skip</div>
		<div id="gif"><img src="assets/images/34.gif" height="100%" width="100%" /></div>
		<div id="lineone">Dream Big</div>
		<div id="giftwo"></div>
		<div id="linetwo">Let Us Do The Rest</div>
	</div>
	<div id="pageThree"></div>
		<div id="mainPage" style="overflow:hidden">
			
			
				<div id="triangle-down2"style="overflow:hidden" class="squarebox">
				<!--<img src="assets/images/l.gif" height="100%" width="100%"/>-->
				</div>
				<div id="ultaTriangle"/ style="overflow:hidden" class="triangle"></div>
				<div id="facebook" onclick="slide()"><img src="assets/images/16.png" height="100%" width="100%" /></div>
				<div id="google" onclick="slide()"><img src="assets/images/17.png" height="100%" width="100%" /></div>
				<div id="home1">
				<img src="assets/images/second.jpg" height="100%" width="100%" />


					
					<div id="first" onclick="bigfirst()"></div>
					<div id="second" onclick="bigsecond()" ></div>
					<div id="third" onclick="bigthird()"></div>
					<div id="fourth"  onclick="bigfourth()"></div>
					<div id="fifth" onclick="bigfifth()"></div>
					<div id="sixth" onclick="bigsix()"></div>
					<div id="seventh" onclick="bigseven()"></div>
					<div id="eight" onclick="bigeight()"></div>
					<div id="settings" onclick="bigsix()"><img src="assets/images/18.png" height="100%" width="100%"/></div>
					<div id="setting1" onclick="bigsix()">Settings</div>
					<div id="help1" onclick="bigseven()"><img src="assets/images/27.png" height="100%" width="100%"/></div>
					
					<div id="contact" onclick="bigeight()"><img src="assets/images/28.png" height="100%" width="100%" /></div>
				</div>
				<div id="contactpage"></div>
				<div id="contactus" onclick="bigeight()">Contact Us</div>
				<div id="settingpage"></div>
		
				<div id="blogPage" > </div>
                                <div id="blogHeader" onclick="bigfirst()">Travel To Your Heart</div>
			
				<div id="wgPage" ></div> 
                                <div id="wgHeader" onclick="bigsecond()">Best places to escape to!</div>

				<div id="cpPage"></div>
				<div id="cpHeader" onclick="bigthird()">Best Plans and Best Deals</div>

				<div id="bdPage"></div>
				<div id="bdHeader" onclick="bigfourth()">Best Deals on Travel</div>
                
				<div id="hdPage"></div>
				<div id="hdHeader" onclick="bigfifth()">Hot deals on the best hotels</div>
                
                                                      
				<div id="helppage"></div>
			   <div id="home" class="">
				   <div id="head"></div>
				   <div id="bars" onclick="sidebar_show()" ><i class="fa fa-bars fa-5x bars"></i></div>
				   <div id="outer" onclick="sidebar_show()"></div>
				   <div id="sidebar">
				   <div id="user"></div>
				   <div id="sideprofile"><i class="fa fa-users fa-5x user"></i></div>
				   <div id="prof">Profile</div>
				   <div id="sidemenu2"><i class="fa fa-folder fa-5x folder"></i></div>
				   <div id="folder">Folder</div>
				   <div id="sidemenu3"><i class="fa fa-star fa-5x star"></i></div>
				   <div id="star">Star</div>
				   <div id="sidemenu4"><i class="fa fa-paper-plane fa-5x plane"></i></div>
				   <div id="important">Important</div>
				   <div id="sidemenu5"><i class="fa fa-shopping-cart fa-5x cart"></i></div>
				   <div id="bin">Bin</div>
				   <div id="sidemenu6"><i class="fa fa-question-circle fa-5x question"></i></div>
				   <div id="help">Help</div>
				   <div id="sidemenu7"><i class="fa fa-cogs fa-5x set"></i></div>
				   <div id="setting">Settings</div>
				   </div>
			   </div>
		</div>
	</div>
</body>
</html>
