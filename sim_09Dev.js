//this part the general for all files_______________________

var canvas, stage, exportRoot;



function init() {
	canvas = document.getElementById("canvas");
	images = images||{};
	
		//__Preloading_______________________________________	
	stage = new createjs.Stage(canvas);
	 var preloader_text = new createjs.Text("Loading", "20px 'MS Reference Sans Serif'", "#6E8AB6");
	preloader_text.name = "preloader_text";
	preloader_text.textAlign = "center";
	preloader_text.lineHeight = 22;
	preloader_text.lineWidth = 167;
	preloader_text.setTransform(268,227);  
  stage.addChild(preloader_text);
  stage.update();
	
	//__Preloading_______________________________________

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
exportRoot = new lib.sim_09();

	stage = new createjs.Stage(canvas);
	//here we change the name for the current

	var touchDev;
	if (BrowserDetect.version != touchDevice) {
		touchDev = false;
		stage.enableMouseOver();
	} else {
		touchDev = true;

	}

	var touchDevice = (window.hasOwnProperty('ontouchstart'));

	if (BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 10 && !touchDevice) {
	} else {
		createjs.Touch.enable(stage, false, true);
	}

	stage.addChild(exportRoot);
	
	mask1 = new createjs.Shape();
	mask1.graphics.beginFill("#ff0000").drawRect(100, 122, 513, 17.5);	
	exportRoot.s1.mask = mask1;

mask2 = new createjs.Shape();
	mask2.graphics.beginFill("#ff0000").drawRect(100, 136.5, 513, 17.5);	
	exportRoot.s2.mask = mask2;
	
	mask3 = new createjs.Shape();
	mask3.graphics.beginFill("#ff0000").drawRect(100, 147, 513, 17.5);	
	exportRoot.s3.mask = mask3;
	
	mask4 = new createjs.Shape();
	mask4.graphics.beginFill("#ff0000").drawRect(100, 162, 513, 17.5);	
	exportRoot.s4.mask = mask4;
	
	
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	//______________________________________________________________________
	//______________________________________________________________________
exportRoot.gotoAndStop(1);

var hand = exportRoot.hand;
var peg1 = exportRoot.peg1;
var peg2 = exportRoot.peg2;
var peg3 = exportRoot.peg3;
var peg4 = exportRoot.peg4;
var finger = exportRoot.finger;
var string1 = exportRoot.string1;
var string2 = exportRoot.string2;
var string3 = exportRoot.string3;
var string4 = exportRoot.string4;

var s1 = exportRoot.s1;
var s2 = exportRoot.s2;
var s3 = exportRoot.s3;
var s4 = exportRoot.s4;

var playStop = exportRoot.playStop;

var rbGroup1 = exportRoot.rbGroup1;
var rbGroup2 = exportRoot.rbGroup2;


//var slider1 = exportRoot.slider1;
//var slider2 = exportRoot.slider2;

var sliderThumb1 = exportRoot.sliderThumb1;
var sliderThumb2 = exportRoot.sliderThumb2;

var slidertrack1 = exportRoot.slidertrack1;
var slidertrack2 = exportRoot.slidertrack2;

var val1 = exportRoot.val1;
var val2 = exportRoot.val2;

var pitch = exportRoot.pitch; 

var finger_X = finger.x;
//var mask_X = mask1.x;
var hand_X = hand.x;
var finger_Y = finger.y;
var hand_Y = hand.y;
var temporary;
var peg = "1";
var stringH = 17.15;

var string_Y = new Array(string1.y,string2.y,string3.y,string4.y);
var string_H = new Array(17.15,10.5,10.5,17.15);

var mask_X = mask1.x;
var dis_mc = exportRoot.dis_mc;

dis_mc.visible = false;

for (var i=1; i<=4; i++) {

			exportRoot["string" + i].visible = false;
		}


var mass = 0.0008;
var modeH = 1;

rbGroup1.RadBut_1.gotoAndStop (2);
rbGroup2.RadBut_1.gotoAndStop (2);
temporary = 0;
mass=0.0008;
peg = 1;
modeH =1;

val1.text = "50.00";
val2.text = "328.0";

sliderThumb1.x = slidertrack1.x + 185/99999*5000;

sliderThumb2.x = slidertrack1.x + 185;

pitch.text = pitchValue();

stage.update();


function pitchValue() {
	 return my_round(1 / (2 * ( Number(val2.text) / 1000)) * Math.sqrt(Number(val1.text) /( mass / 0.328)) * modeH,2);
	 console.log(1 / (2 * ( Number(val2.text) / 1000)) * Math.sqrt(Number(val1.text) /( mass / 0.328)) * modeH);
}

var compare  = new Array();

sliderThumb1.addEventListener("pressmove", sliding1); 

function sliding1(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack1.x;
	    event.currentTarget.x = event.stageX;
	  sliderDrag(1,1,99998,0.01,2,185, zeroP);
   } 

sliderThumb2.addEventListener("pressmove", sliding2); 

function sliding2(event){
	    event.nativeEvent.preventDefault();
	    zeroP = slidertrack2.x;
	    event.currentTarget.x = event.stageX;
	  sliderDrag(2,1000,2280,0.1,1,185, zeroP);
   } 


function sliderDrag(sliderNum, shift, area, step, rounding, sliderTrackWidth, zeroP) {

	 
		if (stage.mouseX < zeroP)  
		{
			exportRoot["sliderThumb" + sliderNum].x = zeroP;
		}
		if (stage.mouseX > zeroP + sliderTrackWidth)
		{ 
			exportRoot["sliderThumb" + sliderNum].x = zeroP + sliderTrackWidth;
		}
 percent = (exportRoot["sliderThumb" + sliderNum].x - zeroP)/sliderTrackWidth*area;  

  exportRoot["val" + sliderNum].text = my_round((percent + shift) * step,rounding).toString();
       
   if(sliderNum == 1){   
       tension();
     }
     
    if(sliderNum == 2){   
       lengthChange();
     }    
        stage.update();

 }

function tension(){
	    compare.push(val1.text);
	if (compare.length ==2) {

		if (compare[0]<compare[1]) {
			exportRoot["peg" + peg].gotoAndStop(exportRoot["peg"+peg].currentFrame + 1);
			if (exportRoot["peg"+peg].currentFrame==29) {
				exportRoot["peg" + peg].gotoAndStop(1);
			}
		}
		if (compare[0]>compare[1]) {

			exportRoot["peg" + peg].gotoAndStop(exportRoot["peg"+peg].currentFrame - 1);
			if (exportRoot["peg"+peg].currentFrame==0) {
				exportRoot["peg" + peg].gotoAndStop(28);
			}
		}
		compare.length = 0;

	}
	pitch.text = pitchValue();
}


function lengthChange(){
	
	finger.x = finger_X - (328 - Number(val2.text))*1.10;
	hand.x = hand_X - (328- Number(val2.text))*1.10;
	pitch.text = pitchValue();
	

}

//radioButtons______________________________________________	
 var rbValue1;
for(var i = 1; i<= 4; i++){
			 	rbGroup1["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup1["RadBut_" + i].addEventListener("click", rbOn1); 
	         }

	  function rbOn1(event) {
	  	event.nativeEvent.preventDefault();
             for(var i = 1; i<= 4; i++){
				  rbGroup1["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue1 =  event.currentTarget.name.substr(7,8);
				
if (rbValue1 =="1") {
		temporary = 0;
    mass=0.0008;
    peg = 1;
	}
	if (rbValue1 =="2") {
	    temporary = 10;
	    mass=0.0004;
	     peg = 2;
	}
	if (rbValue1=="3") {
	temporary = 20;
	mass=0.0002;
	 peg = 3;
	}

if (rbValue1=="4") {
	temporary = 30;
	mass=0.0001;
	 peg = 4;
	}
finger.y = finger_Y + temporary;
	hand.y = hand_Y + temporary;

pitch.text = pitchValue();

}


var rbValue2;
for(var i = 1; i<= 3; i++){
			 	rbGroup2["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup2["RadBut_" + i].addEventListener("click", rbOn2); 
	         }

	  function rbOn2(event) {
	  	event.nativeEvent.preventDefault();
             for(var i = 1; i<= 3; i++){
				  rbGroup2["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue2 =  event.currentTarget.name.substr(7,8);
				
if (rbValue2 =="1") {
	modeH =1;

	}
	if (rbValue2 =="2") { 
		modeH =2;
	}
	if (rbValue2=="3") {
	modeH =3;
	}
pitch.text = pitchValue();
}

playStop.addEventListener("click", playAnimation);

function playAnimation(event){
	    event.nativeEvent.preventDefault();
	    pitch.text = pitchValue();
	if (playStop.currentFrame==0) {    
	     playStop.gotoAndStop(1);
	     finger.x = finger_X - (328-Number(val2.text))*1.10;
	      hand.x = hand_X - (328-Number(val2.text))*1.10;
	     exportRoot["string" + peg].visible = true;
		exportRoot["string" + peg].y = string_Y[Number(peg) - 1];
	  exportRoot["string" + peg].scaleX = Number(val2.text)*1.3/382;   
	
	  if(Number(val1.text)>500){
		exportRoot["string" + peg].scaleY = (stringH-(Number(val1.text)-500)/60)/string_H[Number(peg -1)];
	    
		}
	  if(Number(val1.text)<500){
		exportRoot["string" + peg].scaleY = (stringH+(500-Number(val1.text))/100)/string_H[Number(peg -1)];
		}
		 if(Number(val1.text)==500){
		exportRoot["string" + peg].scaleY = stringH/string_H[Number(peg -1)];
		}
	  console.log("scale = "+exportRoot["string" + peg].scaleY);
	  for (i=1; i<=4; i++) {
		if (modeH ==1) {
			exportRoot["string" + i].gotoAndStop(0);
		}
		if (modeH ==2) {
			exportRoot["string" + i].gotoAndStop(1);
		}
		if (modeH ==3) {
			exportRoot["string" + i].gotoAndStop(2);
			
		   }

    
     }
   if(peg == "1"){
    mask1.x= Number(val2.text)*1.3;
  }
	  if(peg == "2"){
    mask2.x= Number(val2.text)*1.3;
  }
    if(peg == "3"){
    mask3.x= Number(val2.text)*1.3;
  }
    if(peg == "4"){
    mask4.x= Number(val2.text)*1.3;
  }     
	   
	  dis_mc.visible = true; 
	    
	     }else{
	     	dis_mc.visible = false;
	     	 playStop.gotoAndStop(0);
	         if(peg == "1"){
    mask1.x= mask_X;
  }
	  if(peg == "2"){
    mask2.x= mask_X;
  }
    if(peg == "3"){
    mask3.x= mask_X;
  }
    if(peg == "4"){
    mask4.x= mask_X;
  }  
	 exportRoot["string" + peg].visible = false;
		exportRoot["string" + peg].gotoAndStop(1);
		playStop.gotoAndStop(0);   
	      }
	 stage.update();
	  }





}

function my_round(number, n) {
	var k = Math.pow(10, n);
	var t = Math.round(number * k) / k;

	var b;
	var s = t.toString().length - t.toString().indexOf(".");
	var d = n - s + 1;
	if (t.toString().indexOf(".") == -1) {

		b = t + ".0";
		for (var i = 0; i < n - 1; i++) {
			b = b + "0";
		}
	}
	else {
		if (d > 0) {
			b = t + "0";
			for (i = 0; i < d - 1; i++) {
				b = b + "0";
			}
		}
		if (d == 0) {
			b = t;
		}
	}
	return b;
       }
