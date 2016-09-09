var x,y;
var next=0;
function resolution(){
	x=window.screen.availHeight;
	y=window.screen.availWidth;
	apply();
}

function apply(){
document.getElementById('appMainScreen').style.height=x;
document.getElementById('appMainScreen').style.width=y;


}
var p=0;

function login(){
	setTimeout(function(){
			document.getElementById('heading').style.display = "block";
			heading.className="animated fadeIn";
		},2000);
	
	setTimeout(function(){
			document.getElementById('flash').style.display = "none";
			document.getElementById('pageOne').style.display = "block";
		},4000);
}



function slide(){
	
	if(p==0){
		TweenMax.to('.triangle',.25,{y:-1000});
		TweenMax.to('.squarebox',.25,{y:-1000});
		TweenMax.to('#mainPage',.25,{y:-180});
		TweenMax.to('#facebook',.5,{y:-1800});
		TweenMax.to('#google',.5,{y:-1800});
		TweenMax.to('#home1',.5,{y:-1680});
		
		p=2;
	}
	
	
}




function bigeight(){
	
	if(p==2){
		document.getElementById("eight").style.right="0%";
		document.getElementById("eight").style.width="100%";
		document.getElementById("eight").style.height="20%";
		TweenMax.to('#eight',.3,{y:-1330});
		document.getElementById("eight").style.opacity=".8";
		document.getElementById("contact").style.display="none";
		document.getElementById('first').style.display = "none";
		document.getElementById('second').style.display = "none";
		document.getElementById('third').style.display = "none";
		document.getElementById('fourth').style.display = "none";
		document.getElementById('fifth').style.display = "none";
		document.getElementById('sixth').style.display = "none";
		document.getElementById('seventh').style.display = "none";
	//	document.getElementById('setting1').style.display = "none";
		document.getElementById('help1').style.display = "none";
		document.getElementById('settings').style.display = "none";
		setTimeout(function(){
			document.getElementById('contactpage').style.display = "block";
			heading.className="animated fadeIn";
		},300);
		setTimeout(function(){
			document.getElementById('contactus').style.display = "block";
			contactus.className="animated fadeIn";
		},300);
		p=3;
	}
	else if(p==3){
		
		TweenMax.to('#eight',.3,{y:0});
		document.getElementById("eight").style.width="27.5%";
		document.getElementById("eight").style.height="15%";
		document.getElementById("eight").style.right="3%";
		document.getElementById("eight").style.opacity=".2";
		document.getElementById('contactpage').style.display = "none";
		setTimeout(function(){
			document.getElementById('contactus').style.display = "none";
			contactus.className="animated fadeOut";
		},0001);
		setTimeout(function(){
		document.getElementById('first').style.display = "block";
		document.getElementById('second').style.display = "block";
		document.getElementById('third').style.display = "block";
		document.getElementById('fourth').style.display = "block";
		document.getElementById('fifth').style.display = "block";
		document.getElementById('sixth').style.display = "block";
		document.getElementById('seventh').style.display = "block";
	//	document.getElementById('setting1').style.display = "block";
		document.getElementById('help1').style.display = "block";
		document.getElementById('settings').style.display = "block";
		},300);
		setTimeout(function(){
			document.getElementById("contact").style.display="block";
		},700);
		p=2;
	}
	
}

var six=0;
 function bigsix(){
	 if(six==0){
		 document.getElementById("sixth").style.right="0%";
		document.getElementById("sixth").style.width="100%";
		document.getElementById("sixth").style.height="20%";
		TweenMax.to('#sixth',.3,{y:-1140});
		document.getElementById("sixth").style.opacity=".8";
		document.getElementById("settings").style.display="none";
	//	document.getElementById("setting1").style.display="none";
		document.getElementById("contact").style.display="none";
		document.getElementById('first').style.display = "none";
		document.getElementById('second').style.display = "none";
		document.getElementById('third').style.display = "none";
		document.getElementById('fourth').style.display = "none";
		document.getElementById('fifth').style.display = "none";
		document.getElementById('seventh').style.display = "none";
		document.getElementById('eight').style.display = "none";
		document.getElementById('help1').style.display = "none";
		 six=1;
		 setTimeout(function(){
			document.getElementById('settingpage').style.display = "block";
			settingpage.className="animated fadeIn";
		},300);
	 }
	 else{
		 document.getElementById('settingpage').style.display = "none";
		 document.getElementById("sixth").style.width="34%";
		document.getElementById("sixth").style.height="15%";
		document.getElementById("sixth").style.left="3%";
		document.getElementById("sixth").style.opacity=".2";
		TweenMax.to('#sixth',.3,{y:0});
		setTimeout(function(){
		document.getElementById('first').style.display = "block";
		document.getElementById('second').style.display = "block";
		document.getElementById('third').style.display = "block";
		document.getElementById('fourth').style.display = "block";
		document.getElementById('fifth').style.display = "block";
		document.getElementById('seventh').style.display = "block";
		document.getElementById('help1').style.display = "block";
		document.getElementById('eight').style.display = "block";
		document.getElementById("contact").style.display="block";
		},300);
		setTimeout(function(){
			//document.getElementById("setting1").style.display="block";
		document.getElementById("settings").style.display="block";
		},500);
		 six=0;
	 }
 }
 
 var seven =0;
 function bigseven(){
	 if(seven==0){
		 document.getElementById("seventh").style.right="0%";
		document.getElementById("seventh").style.width="100%";
		document.getElementById("seventh").style.height="20%";
		TweenMax.to('#seventh',.3,{y:-1140});
		document.getElementById("seventh").style.opacity=".8";
		document.getElementById("settings").style.display="none";
	//	document.getElementById("setting1").style.display="none";
		document.getElementById("contact").style.display="none";
		document.getElementById('first').style.display = "none";
		document.getElementById('second').style.display = "none";
		document.getElementById('third').style.display = "none";
		document.getElementById('fourth').style.display = "none";
		document.getElementById('fifth').style.display = "none";
		document.getElementById('sixth').style.display = "none";
		document.getElementById('eight').style.display = "none";
		document.getElementById('help1').style.display = "none";
		setTimeout(function(){
			document.getElementById('helppage').style.display = "block";
			helppage.className="animated fadeIn";
		},300);
		 seven=1;
	 }
	 else 
	 {
		document.getElementById('helppage').style.display = "none";
		 document.getElementById("seventh").style.width="27.5%";
		document.getElementById("seventh").style.height="15%";
		document.getElementById("seventh").style.right="32.8%";
		document.getElementById("seventh").style.opacity=".2";
		TweenMax.to('#seventh',.3,{y:0});
		setTimeout(function(){
		document.getElementById('first').style.display = "block";
		document.getElementById('second').style.display = "block";
		document.getElementById('third').style.display = "block";
		document.getElementById('fourth').style.display = "block";
		document.getElementById('fifth').style.display = "block";
		document.getElementById('sixth').style.display = "block";
		document.getElementById('help1').style.display = "block";
		document.getElementById('eight').style.display = "block";
		document.getElementById("contact").style.display="block";
		},300);
		setTimeout(function(){
	//		document.getElementById("setting1").style.display="block";
		document.getElementById("settings").style.display="block";
		},500);
		seven=0;
	 }
 }
 
function profile(){
	if(p==2){
		TweenMax.to('.triangle2',1.0,{y:-1570});
		TweenMax.to('.squarebox2',1.0,{y:-1570});
		
		setTimeout(function(){
			document.getElementById("home").style.top="0%";
			home.className="animated fadeIn";
		},0330);
		
	}
}
function menu2(){
	if(p==2){
		TweenMax.to('.triangle2',1.0,{y:-1570});
		TweenMax.to('.squarebox2',1.0,{y:-1570});
		
		setTimeout(function(){
			document.getElementById("home").style.top="0%";
			home.className="animated fadeIn";
		},0330);
		
	}
}
function menu3(){
	if(p==2){
		TweenMax.to('.triangle2',1.0,{y:-1570});
		TweenMax.to('.squarebox2',1.0,{y:-1570});
		
		setTimeout(function(){
			document.getElementById("home").style.top="0%";
			home.className="animated fadeIn";
		},0330);
		
	}
}
function menu4(){
	if(p==2){
		TweenMax.to('.triangle2',1.0,{y:-1570});
		TweenMax.to('.squarebox2',1.0,{y:-1570});
		
		setTimeout(function(){
			document.getElementById("home").style.top="0%";
			home.className="animated fadeIn";
		},0330);
		
	}
}
function menu5(){
	if(p==2){
		TweenMax.to('.triangle2',1.0,{y:-1570});
		TweenMax.to('.squarebox2',1.0,{y:-1570});
		
		setTimeout(function(){
			document.getElementById("home").style.top="0%";
			home.className="animated fadeIn";
		},0330);
		
	}
}
function menu6(){
	if(p==2){
		TweenMax.to('.triangle2',1.0,{y:-1570});
		TweenMax.to('.squarebox2',1.0,{y:-1570});
		
		setTimeout(function(){
			document.getElementById("home").style.top="0%";
			home.className="animated fadeIn";
		},0330);
		
	}
}

var side=0;
function sidebar_show(){	
	if(side==0){
		TweenMax.to('#sidebar',.45,{x:785});
		setTimeout(function(){
			document.getElementById("outer").style.display="block";
		},9);	
			side=1;
	}
	else {
		TweenMax.to('#sidebar',.45,{x:-785});
		setTimeout(function(){
			document.getElementById("outer").style.display="none";
		},40);
		side=0;
	}
}


function nexti(){
	if(next==0){
		document.getElementById("gif").style.display="none";
		document.getElementById("lineone").style.display="none";
		document.getElementById("giftwo").style.display="block";
		giftwo.className="animated fadeIn";
		document.getElementById("linetwo").style.display="block";
                document.getElementById("Next").style.display="none";
                document.getElementById("Next1").style.display="block";
	}
       /* else
             {
               		document.getElementById("pageOne").style.display="none";
		document.getElementById("mainPage").style.display="block";
               }
         */
}


var next_1=0;

function next1(){

	if(next_1==0){

		document.getElementById("pageOne").style.display="none";

		document.getElementById("mainPage").style.display="block";

	}

}



var click=0;
function clicki(){
	if(click==0){
		document.getElementById("pageOne").style.display="none";
		document.getElementById("mainPage").style.display="block";
	}
}




